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
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions/auth';

const App = () => {
  const _renderHeaderLeft = () => {
    return (
      <IconMedlink />
    )
  }
  const _renderHeaderCenter = () => {
    return (
      <HeaderTitle title='Khánh Medlink' />
    )
  }
  const _renderHeaderRight = () => {
    return (
      <TouchableOpacity onPress={() => {logOut()}}>
        <Text style={styles.rightHeader}>Đăng xuất</Text>
      </TouchableOpacity>
    )
  }
  /////////////////////////////////////////////////////////////
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const logOut = () => {
    const token = ''
    dispatch(loginSuccess(token))
    navigation.navigate('AuthLogin')
  }
  return (
    <SafeAreaView >
      <Header
        elementLeft={_renderHeaderLeft()}
        elementCenter={_renderHeaderCenter()}
        elementRight={_renderHeaderRight()}
      />
    </SafeAreaView>
  );
};


export default App;
