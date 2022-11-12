import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <TextInput style={styles.textinput} placeholder="Your Course goal!" />
        <Button title="Add Goal" />
      </View>
      {/* <View style={styles.border}></View> */}
      <View style={styles.log}>
        <Text style={styles.logtxt}>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 40,
    marginTop:10,
    // height:'100%',
    flex:1
  },
  search: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    borderBottomColor:'gray',
    borderBottomWidth:1
  },
  textinput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "70%",
    padding: 10,
  },
  log:{
    flex:5,
    marginTop:25
  }
  ,
  logtxt:{
    fontSize:25
  }
});
