import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid,
  ScrollView,
  FlatList,
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
        <FlatList
          data={list}
          renderItem={(itemData) => {
            let index = itemData.index
            let goal = itemData.item
            return (
              <View>
                <Text
                  key={index}
                  style={styles.goal}
                  onPress={() => deleteGoal(goal)}
                >{`${index + 1}. ${goal}`}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 30,
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

// The rounded corners are missing on iOS because we added our styling here that applies the rounded corners directly on this text component. Now it turns out that this text component is translated by React Native to a fitting native widget, a native UI element. And the element to which it is translated in case of Android seems to be an element where corners can be rounded. But in case of iOS, it looks like the underlying native text output element does not support rounded corners. And that's why border radius has no effect on the text elements on iOS. Now to work around that, we can wrap our text here in a view. So in this more generic container element, this is also translated to a fitting underlying element. And it turns out that the underlying element to which view is compiled by React Native is an element that supports surrounded corners on both platforms.

{
  /* space is different than it was before, we have way more space for the input and way less space for the list. The reason for that is that the ScrollView has the job of making something scrollable, but the area that's scrollable is in the end determined by the current, the container that holds the ScrollView. So what you should do here is add another normal view, which restricts the available height, to which you then apply the style that sets the height that will be taken up by that view. So that is the setup we had before, but now we have a ScrollView inside of that view. So the outer view, controls how much space this area of the screen should take up. And the inner ScrollView then makes sure that this space, and the items in that space, to be precise, will be scrollable inside that overall space. That's how we set up such a ScrollView, and how we let it interact with the surrounding container. */
}
