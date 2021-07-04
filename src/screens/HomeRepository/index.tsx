import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity, Image
} from 'react-native';

import styles from './index.style';
import Header from '../../components/Header';
import IconMedlink from '../../components/IconMedlink';
import HeaderTitle from '../../components/HeaderTitle';
import HomeRepositoryItem from '../../components/HomeRepositoryItem'
import { useNavigation } from '@react-navigation/core';
const App = () => {
  const navigation = useNavigation()
  const _renderHeaderLeft = () => {
    return (
      <IconMedlink />
    )
  }
  const _renderHeaderCenter = () => {
    return (
      <HeaderTitle title='Sản phẩm trong kho' />
    )
  }
  const _renderHeaderRight = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('HomeProductCreate')}>
        <Text style={styles.rightHeader}>Thêm</Text>
      </TouchableOpacity>
    )
  }
  const _renderHeader = () => (
    <Header
        elementLeft={_renderHeaderLeft()}
        elementCenter={_renderHeaderCenter()}
        elementRight={_renderHeaderRight()}
      />
  )
  const _renderItem = () => (
    <HomeRepositoryItem />
  )
  
  return (
    <SafeAreaView >
      {_renderHeader()}
      {_renderItem()}
    </SafeAreaView>
  );
};


export default App;
