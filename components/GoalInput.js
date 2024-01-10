import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import React, {useState} from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal({text: enteredGoalText, id: Math.random().toString()});
    setEnteredGoalText('');
  }

  return (
    <Modal
      visible={props.visible}
      animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}/>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => props.onCancel()}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b"
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "#120438",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",

  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  }
});

export default GoalInput;