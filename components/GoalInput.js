import React from "react";
import { View, TextInput, Button, Image } from "react-native";
import styles from "./Styles";
const GoalInput = ({ text, textInputHandle, addGoals, setshowModal }) => {
  return (
    <>
      <View style={styles.search}>
    <Image source={require('../assets/goal.png')} style={styles.img} />
        <TextInput
          style={styles.textinput}
          placeholder="Your Course goal!"
          placeholderTextColor="gray"
          onChangeText={textInputHandle}
          value={text}
        />
        <View style={styles.modalbutton}>
          <Button title="Add Goal" onPress={addGoals} color="green" />
          <Button title="Cancel" onPress={() => setshowModal(false)} color="red" />
        </View>
      </View>
    </>
  );
};

export default GoalInput;
