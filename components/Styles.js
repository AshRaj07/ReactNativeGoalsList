import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 30,
    marginTop: 10,
    // height:'100%',
    flex: 1,
    // flexDirection: "column-reverse",
  },
  search: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderTopColor: "gray",
    // borderTopWidth: 1,
    backgroundColor: "#222831",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "70%",
    padding: 10,
    color: "white",
    
  },
  log: {
    flex: 5,
    marginVertical: 25,
  },
  logtxt: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  goal: {
    backgroundColor: "gray",
    // fontSize: 30,
    // padding: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
  goaltxt: {
    padding: 10,
    fontSize: 30,
    borderRadius: 5,
    color: "white",
  },
  modalbtn: {
    marginBottom: 20,
  },
  modalbutton: {
    width: "50%",
    height: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  img: {
    resizeMode: "center",
    width: 300,
    height: 300,
  },
});

export default styles;
