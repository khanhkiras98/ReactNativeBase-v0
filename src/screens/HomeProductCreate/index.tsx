import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View, TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './index.style';
import Header from '../../components/Header';
import IconMedlink from '../../components/IconMedlink';
import HeaderTitle from '../../components/HeaderTitle';
import { addProductToInvoice } from '../../redux/actions/invoice';
import { Product } from '../../model/invoice';
import { ScrollView } from 'react-native-gesture-handler';
import { addProductFromApiListener } from '../../redux/actions/product';


const App = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [number, setNumber] = useState('')
  const [unit, setUnit] = useState('')
  //-------------------------------------------------------------------
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.rightHeader}>Hoàn thành</Text>
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
  const _renderButtonSubmit = () => (
    <TouchableOpacity style={styles.buttonSubmit}
      onPress={() => {}}>
      <Text>TẠO</Text>
    </TouchableOpacity>
  )
  //------------------------------------------------------------
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(addProductFromApiListener(''))
    return () => {}
  }, [])
  
  //------------------------------------------------------------
  return (
    <SafeAreaView>
      {_renderHeader()}
      <View >
        {_renderButtonSubmit()}
      </View>
    </SafeAreaView>
  );
}

export default App;
