import React from "react";
import {View,TextInput,Button} from "react-native";
import styles from "./Styles";
const GoalInput = ({text,textInputHandle,addGoals}) => {
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.textinput}
        placeholder="Your Course goal!"
        onChangeText={textInputHandle}
        value={text}
      />
      <Button title="Add Goal" onPress={addGoals} />
    </View>
  );
};

export default GoalInput;
