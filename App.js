import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Keyboard} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Task from './components/tasks';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const taskHandler = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTasks = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }



  return (
    <View style={styles.container}>

      <View style ={styles.taskWrapper}>

        <Text style = {styles.sectionTitle}>Fortunada's Daily To-Do</Text>

          <View style = {styles.items}>
            {
              taskItems.map((item, index) => {
                return(
                  <TouchableOpacity  key={index} onPress={() => completeTasks(index)}>
                    <Task text={item}/>
                  </TouchableOpacity>
                )
              }) 
            }
          </View>
      </View>

      <KeyboardAvoidingView
        behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
        style = {styles.writeTaskWraper}
      >
        <TextInput style = {styles.input} placeholder = {'Enter a task'} value = {task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress = {() => taskHandler()}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>

          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9dd3e0',
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },

  sectionTitle: {
    fontSize:24,
    fontWeight: 'bold'

  },

  items: {
    marginTop: 30,
  },

  writeTaskWraper : {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  input : {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    backgroundColor: '#FFFFFF',



  },

  addWrapper : {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },

  addText : {

  },

});