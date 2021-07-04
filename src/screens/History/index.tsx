import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity, Image
} from 'react-native';

import styles from './index.style';
import Header from '../../components/Header';
import HeaderTextInput from '../../components/HeaderTextInput'

const App = () => {
  const _renderHeaderLeft = () => {
    return (
      <Image style={styles.leftHeader}
      source={require('../../assets/icon/iconHeader/icon-search.png')}/>
    )
  }
  const _renderHeaderCenter = () => {
    return (
      <HeaderTextInput placeholder='Tìm kiếm đơn hàng' />
    )
  }
  const _renderHeaderRight = () => {
    return (
      <TouchableOpacity>
        <Image style={styles.rightHeader}
        source={require('../../assets/icon/iconHeader/icon-add.png')} />
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView >
      <Header
        elementLeft={_renderHeaderLeft()}
        elementCenter={_renderHeaderCenter()}
        elementRight={_renderHeaderRight()}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.sectionTitle}>Invoice</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
