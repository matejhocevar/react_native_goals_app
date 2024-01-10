import {Pressable, StyleSheet, Text, View} from "react-native";

const GoalItem = (props) => {
  const item = props.item;

  return (
    <View key={item.text} style={styles.goalItem}>
      <Pressable
        android_ripple={{color: "#ddd"}}
        onPress={props.onDeleteItem.bind(this, item.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  }
});

export default GoalItem;