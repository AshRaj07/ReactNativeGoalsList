import {StyleSheet} from "react-native"

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
      // fontSize: 30,
      // padding: 5,
      borderRadius: 5,
      marginVertical: 5,
    },
    goaltxt:{
      padding:10,
      fontSize:30,
      borderRadius:5
    }
  });

export default styles  