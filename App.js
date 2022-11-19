import React, { useState } from "react";
import { View, Modal,Button } from "react-native";
import GoalInput from "./components/GoalInput";
import ListOfGoals from "./components/ListOfGoals";
import styles from "./components/Styles";
import showToast from "./components/showToast";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [showModal, setshowModal] = useState(false)
  const [list, setlist] = useState([]);
  const [text, setText] = useState("");

  const addGoals = () => {
    if (text.length != 0) {
      if (list.includes(text)) {
        showToast("You have already entered this goal!");
        setText("");
      } else {
        setshowModal(false)
        showToast("Goal added successfully 👍");
        setlist((currentGoals) => [...currentGoals, text]);
        setText("");
      }
    } else {
      showToast("Enter something");
    }
  };
  const handleModal = () => {
    setshowModal(true)
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.main}>
      <Modal visible={showModal} animationType="slide">
        <GoalInput
          text={text}
          textInputHandle={(props) => {
            setText(props);
          }}
          addGoals={addGoals}
          setshowModal={setshowModal}
        />
      </Modal>

      <ListOfGoals list={list} setlist={setlist} />
      <View style={styles.modalbtn}>
      <Button title="Add Goal" onPress={handleModal}  />
      </View>
    </View>
</>
  );
}
