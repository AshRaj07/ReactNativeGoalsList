import { ToastAndroid } from "react-native";
const showToast = (txt) => {
    ToastAndroid.showWithGravity(txt, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  };
  export default showToast