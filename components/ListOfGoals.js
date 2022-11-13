import React from 'react'
import styles from './Styles';
import {View,Text,FlatList} from "react-native"
import GoalItem from './GoalItem';
const ListOfGoals = ({list,setlist}) => {
  return (
    <View style={styles.log}>
    <Text style={styles.logtxt}>List of goals 🎯</Text>
    <FlatList
      data={list}
      renderItem={(itemData) => {
        let index = itemData.index;
        let goal = itemData.item;
        return (
          <GoalItem
            index={index}
            goal={goal}
            list={list}
            setlist={setlist}
          />
        );
      }}
      keyExtractor={(item, index) => index}
    />
  </View>
  )
}

export default ListOfGoals