import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid,
} from "react-native";

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
  const deleteGoal = (goal) => {
    setlist(list.filter((v) => v != goal));
  };
  const showToastWithGravity = (txt) => {
    ToastAndroid.showWithGravity(txt, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  };
  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <TextInput
          style={styles.textinput}
          placeholder="Your Course goal!"
          onChangeText={textInputHandle}
          value={text}
        />
        <Button title="Add Goal" onPress={addGoals} />
      </View>
      <View style={styles.log}>
        <Text style={styles.logtxt}>List of goals 🎯</Text>
        {list.map((goal, index) => {
          return (
            <View>
              <Text
                key={index}
                style={styles.goal}
                onPress={() => deleteGoal(goal)}
              >{`${index + 1}. ${goal}`}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 40,
    marginTop: 10,
    // height:'100%',
    flex: 1,
    flexDirection: "column-reverse",
  },
  search: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "gray",
    borderTopWidth: 1,
  },
  textinput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "70%",
    padding: 10,
  },
  log: {
    flex: 5,
    marginVertical: 25,
  },
  logtxt: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  goal: {
    backgroundColor: "gray",
    fontSize: 30,
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
});
