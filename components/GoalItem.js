import React from "react";
import styles from "./Styles";
import {View,Text} from "react-native"

const GoalItem = ({index,goal,list,setlist}) => {
  return (
    <View>
      <Text
        key={index}
        style={styles.goal}
        onPress={()=>setlist(list.filter((v) => v != goal))}
      >{`${index + 1}. ${goal}`}</Text>
    </View>
  );
};

export default GoalItem;
