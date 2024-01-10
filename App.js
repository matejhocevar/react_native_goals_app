import {Button, FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";

export default function App() {
  const [modelIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(goal) {
    setGoals(currentGoals => [...currentGoals, goal]);
    endAddGoalHandler();
  }

  function onDeleteItemHandler(id) {
    setGoals(currentGoals => currentGoals.filter(g => g.id !== id))
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modelIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={itemData =>
              <GoalItem
                item={itemData.item}
                onDeleteItem={onDeleteItemHandler}
              />}
            keyExtractor={(item, index) => item.id}/>
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 7,
  },
});