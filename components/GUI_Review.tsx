import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function GUI_Review() {
   return (
      <View style={styles.container}>
         <View style={{ flexDirection: 'row', marginTop: 12 }}>
            <Image
               style={{ width: 70, height: 70, marginLeft: 16, marginRight: 10 }}
               source={require('../assets/usb.png')}
            />
            <Text style={{ fontSize: 16, fontWeight: '700' }}>
               USB Bluetooth Music Receiver {'\n'} HJX-001- Biến loa thường thành loa bluetooth
            </Text>
         </View>
         <View style={{ alignItems: 'center', marginTop: 48 }}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>Cực kỳ hài lòng</Text>
            <View style={{ marginTop: 18, flexDirection: 'row', gap: 14 }}>
               <Image style={styles.star} source={require('../assets/Star.png')} />
               <Image style={styles.star} source={require('../assets/Star.png')} />
               <Image style={styles.star} source={require('../assets/Star.png')} />
               <Image style={styles.star} source={require('../assets/Star.png')} />
               <Image style={styles.star} source={require('../assets/Star.png')} />
            </View>
            <View style={styles.btnAddImage}>
               <Image style={{ width: 39, height: 32 }} source={require('../assets/camera.png')} />
               <Text>Thêm hình ảnh</Text>
            </View>
            <TextInput
               style={styles.input}
               placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
               placeholderTextColor={'#c4c4c4'}
            />
         </View>
         <View>
            <TouchableOpacity style={styles.btn}>
               <Text style={styles.btnText}>Gửi</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   header: {},
   star: {
      width: 39,
      height: 39,
   },
   btnAddImage: {
      marginTop: 30,
      marginBottom: 15,
      width: 293,
      height: 68,
      borderWidth: 1,
      borderColor: '#1511EB',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
   },
   input: {
      width: 293,
      height: 222,
      fontSize: 18,
      fontWeight: '700',
      borderWidth: 1,
      borderColor: '#c4c4c4',
      borderRadius: 5,
   },
   btn: {
      width: 289,
      height: 41,
      marginTop: 25,
      backgroundColor: '#0D5DB6',
      borderColor: '#1511EB',
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
   },
   btnText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '700',
   },
});
