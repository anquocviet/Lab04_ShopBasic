import { Image, StyleSheet, View, Text } from 'react-native';
import { Button, IconButton } from 'react-native-paper';

export default function GUI_BuyProduct() {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
               <Image style={{ width: 104, height: 127 }} source={require('../assets/book.png')} />
               <View style={{ paddingLeft: 25 }}>
                  <Text style={styles.textSmall}>Nguyên hàm tích phân và ứng dụng</Text>
                  <Text style={[styles.textSmall, { marginTop: 14 }]}>Cung cấp bởi Tiki Trading</Text>
                  <Text style={[styles.textMedium, { color: '#EE0D0D', marginTop: 12, marginBottom: 12 }]}>
                     141.800 đ
                  </Text>
                  <Text
                     style={[
                        styles.textSmall,
                        { color: '#808080', textDecorationLine: 'line-through', marginBottom: 12 },
                     ]}
                  >
                     151.800 đ
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                     <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <IconButton
                           mode="contained"
                           style={{ borderRadius: 0 }}
                           icon="minus"
                           size={10}
                           containerColor="#c4c4c4"
                           iconColor="#808080"
                        />
                        <Text style={{ fontWeight: '700', fontSize: 15 }}>1</Text>
                        <IconButton
                           mode="contained"
                           style={{ borderRadius: 0 }}
                           icon="plus"
                           size={10}
                           containerColor="#c4c4c4"
                           iconColor="#808080"
                        />
                     </View>
                     <Text style={{ fontSize: 12, fontWeight: '700', color: '#134FEC' }}>Mua sau</Text>
                  </View>
               </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
               <Text style={styles.textSmall}>Mã giảm giá đã lưu</Text>
               <Text style={[styles.textSmall, { color: '#134FEC', marginLeft: 16 }]}>Xem tại đây</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 35, marginBottom: 27 }}>
               <View style={styles.voucherContainer}>
                  <View style={{ width: 32, height: 16, backgroundColor: '#F2DD1B' }} />
                  <Text style={[styles.textMedium, { marginLeft: 9 }]}>Mã giảm giá</Text>
               </View>
               <Button
                  mode="contained"
                  buttonColor="#0A5EB7"
                  textColor="#fff"
                  style={{ borderRadius: 2, marginLeft: 24 }}
                  labelStyle={[styles.textLarge, { lineHeight: 28 }]}
               >
                  Áp dụng
               </Button>
            </View>
         </View>
         <View
            style={{
               flexDirection: 'row',
               backgroundColor: '#fff',
               width: '100%',
               height: 51,
               marginTop: 14,
               alignItems: 'center',
            }}
         >
            <Text style={[styles.textSmall, { marginLeft: 12 }]}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <Text style={[styles.textSmall, { color: '#134FEC', marginLeft: 5 }]}>Nhập tại đây?</Text>
         </View>
         <View style={styles.temporaryMoneyContainer}>
            <Text style={styles.textMedium}>Tạm tính</Text>
            <Text style={[styles.textMedium, { color: '#EE0D0D', marginLeft: 160 }]}>141.800 đ</Text>
         </View>
         <View
            style={{
               alignItems: 'center',
               backgroundColor: '#fff',
               width: '100%',
               height: 120,
               marginTop: 109,
            }}
         >
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 14, marginBottom: 20 }}>
               <Text style={[styles.textMedium, { color: '#808080' }]}>Thành tiền</Text>
               <Text style={[styles.textLarge, { color: '#EE0D0D', marginLeft: 160 }]}>141.800 đ</Text>
            </View>
            <Button
               textColor="#fff"
               buttonColor="#E53935"
               contentStyle={{ width: 331, height: 51 }}
               labelStyle={{ fontSize: 20, fontWeight: '700', lineHeight: 28 }}
               style={{ borderRadius: 2 }}
            >
               TIẾN HÀNH ĐẶT HÀNG
            </Button>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#C4C4C4',
   },
   header: {
      backgroundColor: '#fff',
      width: '100%',
      paddingLeft: 12,
      paddingTop: 14,
   },
   voucherContainer: {
      flexDirection: 'row',
      width: 208,
      height: 45,
      borderWidth: 1,
      borderColor: '#808080',
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
   },
   temporaryMoneyContainer: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      width: '100%',
      marginTop: 12,
      justifyContent: 'center',
      paddingLeft: 12,
      paddingTop: 10,
      paddingRight: 32,
      paddingBottom: 20,
   },
   textTitle: {
      fontSize: 12,
      fontWeight: '700',
   },
   textSmall: {
      fontSize: 12,
      fontWeight: '700',
   },
   textMedium: {
      fontSize: 18,
      fontWeight: '700',
   },
   textLarge: {
      fontSize: 20,
      fontWeight: '700',
   },
});
