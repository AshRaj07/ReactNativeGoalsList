import React, { useState } from "react";
import { View, ToastAndroid } from "react-native";
import GoalInput from "./components/GoalInput";
import ListOfGoals from "./components/ListOfGoals";
import styles from "./components/Styles";

export default function App() {
  const [list, setlist] = useState([]);
  const [text, setText] = useState("");
  const textInputHandle = (props) => {
    setText(props);
  };
  const addGoals = () => {
    if (text.length != 0) {
      if (list.includes(text)) {
        showToastWithGravity("You have already entered this goal!");
        setText("");
      } else {
        setlist((currentGoals) => [...currentGoals, text]);
        // list.push(text);
        setText("");
      }
    } else {
      showToastWithGravity("Enter something");
    }
  };
  const showToastWithGravity = (txt) => {
    ToastAndroid.showWithGravity(txt, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  };
  return (
    <View style={styles.main}>
      <GoalInput
        text={text}
        textInputHandle={textInputHandle}
        addGoals={addGoals}
      />
      <ListOfGoals list={list} setlist={setlist} />
    </View>
  );
}
