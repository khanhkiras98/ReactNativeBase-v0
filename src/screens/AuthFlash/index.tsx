import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Image
} from 'react-native';
import styles from './index.style';

const App = () => {
  const navigation = useNavigation()
  const token = useSelector((state) => state.auth.token);
  console.log('Home: ', token, '\n')
  if(token =='') navigation.navigate('AuthLogin')
  else navigation.navigate('Main')

  return (
    <SafeAreaView >
      <Image style={styles.flatImage}
      source={require('../../assets/icon/iconAuth/flat-screen.jpg')}/>
    </SafeAreaView>
  );
};


export default App;
