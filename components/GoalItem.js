import React from "react";
import styles from "./Styles";
import { View, Text, Pressable } from "react-native";

const GoalItem = ({ index, goal, list, setlist }) => {
  return (
    <View style={styles.goal}>
    <Pressable
    android_ripple={{ color: "dark-gray" }}
    onPress={() => setlist(list.filter((v) => v != goal))}
    >
      <Text style={styles.goaltxt} key={index} >{`${index + 1}. ${goal}`}</Text>
    </Pressable>
      </View>
  );
};

export default GoalItem;
