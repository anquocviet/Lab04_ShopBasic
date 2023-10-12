import { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function GUI_GenPass() {
   const [lCaseCheck, setLCaseCheck] = useState(true);
   const [uCaseCheck, setUCaseCheck] = useState(false);
   const [nCheck, setNCheck] = useState(true);
   const [sCheck, setSCheck] = useState(false);

   return (
      <View style={styles.container}>
         <View style={styles.content}>
            <Text style={styles.header}>PASSWORD{'\n'}GENERATOR</Text>
            <TextInput style={styles.inputGenPass} />
            <View style={{ rowGap: 34, marginTop: 40, width: '100%' }}>
               <View style={styles.textContainer}>
                  <Text style={styles.label}>Password length</Text>
                  <TextInput style={{ width: 118, height: 33, backgroundColor: '#fff' }} />
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.label}>Include lower case letters</Text>
                  <Checkbox
                     color="#fff"
                     status={lCaseCheck ? 'checked' : 'unchecked'}
                     onPress={() => {
                        setLCaseCheck(!lCaseCheck);
                     }}
                  />
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.label}>Include upcase letters</Text>
                  <Checkbox
                     color="#fff"
                     status={uCaseCheck ? 'checked' : 'unchecked'}
                     onPress={() => {
                        setUCaseCheck(!uCaseCheck);
                     }}
                  />
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.label}>Include number</Text>
                  <Checkbox
                     color="#fff"
                     status={nCheck ? 'checked' : 'unchecked'}
                     onPress={() => {
                        setNCheck(!nCheck);
                     }}
                  />
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.label}>Include special symbol</Text>
                  <Checkbox
                     color="#fff"
                     status={sCheck ? 'checked' : 'unchecked'}
                     onPress={() => {
                        setSCheck(!sCheck);
                     }}
                  />
               </View>
            </View>
            <TouchableOpacity style={styles.btn}>
               <Text style={{ fontSize: 18, color: '#fff', fontWeight: '700' }}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0.00) 87.36%)',
   },
   content: {
      backgroundColor: '#23235B',
      alignItems: 'center',
      width: 322,
      borderRadius: 15,
      boxShadow: '0 4 4 0 rgba(0, 0, 0, 0.25)',
   },
   header: {
      color: '#fff',
      fontSize: 25,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 40,
   },
   inputGenPass: {
      width: 297,
      height: 55,
      backgroundColor: '#151537',
      marginTop: 33,
   },
   label: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '700',
   },
   textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 12,
   },
   btn: {
      width: 269,
      height: 55,
      backgroundColor: '#3B3B98',
      marginTop: 27,
      marginBottom: 25,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
