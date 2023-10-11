import { StyleSheet } from "react-native";
import GUI_Login from "./components/GUI_Login";
import GUI_Review from "./components/GUI_Review";

export default function App() {
   return GUI_Login();
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
   },
   header: {
      fontSize: 30,
      fontWeight: "700",
      marginTop: 75,
      alignSelf: "flex-start",
   },
});
