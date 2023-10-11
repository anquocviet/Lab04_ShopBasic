import { Image, StyleSheet, View } from "react-native";

export default function GUI_Review() {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={require("../assets/usb.png")} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
   },
   header: {},
});
