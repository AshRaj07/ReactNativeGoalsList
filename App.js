import React, { useState } from "react";
import { View} from "react-native";
import GoalInput from "./components/GoalInput";
import ListOfGoals from "./components/ListOfGoals";
import styles from "./components/Styles";
import showToast from "./components/showToast";

export default function App() {
  const [list, setlist] = useState([]);
  const [text, setText] = useState("");

  const addGoals = () => {
    if (text.length != 0) {
      if (list.includes(text)) {
        showToast("You have already entered this goal!");
        setText("");
      } else {
        setlist((currentGoals) => [...currentGoals, text]);
        setText("");
      }
    } else {
      showToast("Enter something");
    }
  };
  
  return (
    <View style={styles.main}>
      <GoalInput
        text={text}
        textInputHandle={(props) => {setText(props)}}
        addGoals={addGoals}
      />
      <ListOfGoals list={list} setlist={setlist} />
    </View>
  );
}
