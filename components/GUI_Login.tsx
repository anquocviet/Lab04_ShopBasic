import { useState } from "react";
import {
   Image,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   View,
} from "react-native";

export default function GUI_Login() {
   const login = [
      {
         username: "anquocviet",
         password: "12345",
      },
      {
         username: "vietiuh",
         password: "1234567",
      },
   ];
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   return (
      <View style={styles.container}>
         <Text style={styles.header}>LOGIN</Text>
         <View style={styles.inputContainer}>
            <Image
               style={styles.iconInputLeft}
               source={require("../assets/avatar_user.png")}
            />
            <TextInput
               value={username}
               style={styles.input}
               placeholder="Name"
               onBlur={() => setUsername(this.value)}
            />
         </View>
         <View style={styles.inputContainer}>
            <Image
               style={styles.iconInputLeft}
               source={require("../assets/lock.png")}
            />
            <TextInput
               value={password}
               style={styles.input}
               placeholder="Password"
            />
            <Image
               style={styles.iconInputRight}
               source={require("../assets/eye.png")}
            />
         </View>
         <TouchableOpacity onPress={checklogin} style={styles.btn}>
            <Text style={styles.btnText}>LOGIN</Text>
         </TouchableOpacity>
         <Text style={styles.forgotText}>Forgot Password</Text>
      </View>
   );
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
      alignSelf: "flex-start",
      marginTop: 75,
      marginBottom: 82,
   },
   inputContainer: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: "#f2f2f2",
      width: 330,
      height: 54,
      flexDirection: "row",
      alignItems: "center",
   },
   iconInputLeft: {
      width: 32,
      height: 32,
      marginLeft: 8,
   },
   input: {
      flex: 1,
      height: "100%",
      outlineWidth: 0,
      paddingLeft: 20,
   },
   iconInputRight: {
      width: 32,
      height: 32,
      marginRight: 8,
   },
   btn: {
      width: 330,
      height: 45,
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "center",
   },
   btnText: {
      fontSize: 20,
      fontWeight: "700",
      color: "#fff",
   },
   forgotText: {
      fontSize: 20,
      fontWeight: "700",
      marginTop: 45,
   },
});

const checklogin = () => {};
