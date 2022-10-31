import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType="slie">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={props.onCancel} title="Cancel"></Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  buttonContainer: {
    margintTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: '40%',
    marginHorizontal: 8
  }
})
