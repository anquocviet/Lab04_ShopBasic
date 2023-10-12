import { StyleSheet } from 'react-native';
import GUI_Login from './components/GUI_Login';
import GUI_Review from './components/GUI_Review';
import GUI_GenPass from './components/GUI_GenPass';
import GUI_BuyProduct from './components/GUI_BuyProduct';

export default function App() {
   return <GUI_BuyProduct />;
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   header: {
      fontSize: 30,
      fontWeight: '700',
      marginTop: 75,
      alignSelf: 'flex-start',
   },
});
