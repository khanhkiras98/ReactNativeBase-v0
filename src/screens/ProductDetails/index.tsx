/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './index.style';
import Header from '../../components/Header';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const _renderLeft = () => {
    return (
      <View style={ styles.leftHeader }>
        <Text>Left</Text>
      </View>
    )
  }
  const _renderCenter = () => {
    return (
      <View style={ styles.centerHeader }>
        <Text>Center</Text>
      </View>
    )
  }
  const _renderRight = () => {
    return (
      <View style={ styles.rightHeader }>
        <Text>Right</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={ backgroundStyle }>
      <StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' } />
      <Header
        elementLeft={ _renderLeft() }
        elementCenter={ _renderCenter() }
        elementRight={ _renderRight() }
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={ backgroundStyle }>
        <View
          style={ {
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          } }>
          <Text style={ styles.sectionTitle }>Verify</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
