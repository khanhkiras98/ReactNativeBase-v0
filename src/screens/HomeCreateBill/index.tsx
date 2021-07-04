import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  TouchableOpacity, Image,
  ScrollView,
  FlatList, Button
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import styles from './index.style';
import Header from '../../components/Header';
import IconMedlink from '../../components/IconMedlink';
import HeaderTitle from '../../components/HeaderTitle';
import ItemProduct from '../../components/ItemProduct';
//-------------------------------------------------------------------
import axios from "axios";
import config from "../../configs"

const App = () => {
  const navigation = useNavigation()
  const _renderHeaderLeft = () => {
    return (
      <IconMedlink />
    )
  }
  const _renderHeaderCenter = () => {
    return (
      <HeaderTitle title='Tạo đơn' />
    )
  }
  const _renderHeaderRight = () => {
    return (
      <TouchableOpacity>
        <Image style={styles.rightHeader}
          source={require('../../assets/icon/iconHeader/icon-scan-2.png')} />
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
  const _renderButtonAdd = () => (
    <TouchableOpacity style={styles.buttonAdd}
      onPress={() => navigation.navigate('HomeProductCreate')}
    >
      <Image style={styles.iconAdd}
        source={require('../../assets/icon/iconHome/icon-cart-2.jpg')} />
      <Text style={styles.textAdd}>Đơn hàng của bạn chưa có</Text>
      <Text style={styles.textAdd}>sản phẩm nào</Text>
    </TouchableOpacity>
  )
/////////////////////////////////////////////////////////////////////////////
  const products = useSelector((state) => state.product)
  console.log('///////////////////////////////////////////////////////////////////////////////\n', products)
  const [product, setProduct] = useState(products)
  useEffect(() => {
    setProduct(products);
  }, [products]);


  type Product = {
    name: string,
    unit: string,
    price: string,
    number: string,
  }
  const _renderItem = (item: Product) => (
    <ItemProduct
      nameProduct={item.name} unitProduct={item.unit} priceProduct={item.price} numberProduct={item.number}
    />
  )
  const _renderListProduct = () => (
    // <FlatList
    //   data={product}
    //   // ItemSeparatorComponent={ItemSeparatorView}
    //   renderItem={({ item }) => _renderItem(item)}
    //   keyExtractor={(item) => item.id}
    // />
    <View></View>
  )
  //----------------------------------------------------------------------------------------
  const [amount, setAmount] = useState('')
  const [amountPaid, setAmountPaid] = useState('0')
  const [amountVat, setAmountVat] = useState('')
  const [note, setNote] = useState('')
  const [currentPaid, setCurrentPaid] = useState('')
  const _renderBillDate = () => (
    <View style={styles.billDateContainer}>
      <View style={styles.lineContainer}>
        <Text>Ngày bán</Text>
        <View style={styles.lineLeftContainer}>
          <TextInput style={styles.input}
            placeholder='2021-07-03'
            placeholderTextColor='black' />
        </View>
      </View>
      <View style={styles.lineContainer}>
        <Text>Tổng tiền</Text>
        <Text>0 đ</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text>VAT</Text>
        <View style={styles.lineLeftContainer}>
          <View></View>
          <TextInput style={styles.input} placeholder='10%' placeholderTextColor='black' />
        </View>
      </View>
      <View style={styles.lineContainer}>
        <Text>Giảm giá</Text>
        <View style={styles.lineLeftContainer}>
          <TextInput style={styles.input} placeholder='0' placeholderTextColor='black' />
          <TextInput style={styles.input} placeholder='VNĐ' placeholderTextColor='black' />
        </View>
      </View>
    </View>
  )
  //----------------------------------------------------------------------------------------
  const token = useSelector((state) => state.auth.token);
  console.log('BillToken: ', token)
  const submit = () => {
    console.log('Sending....')
    createInvoice()
  }
  const createInvoice = async () => {
    console.log('create....')
    const invoice = {
      
      'amount_debt': 0, 'currency': "VNĐ", 'customer_code': "", 'customer_id': 0, 'customer_name': "", 'customer_phone_no': "", 'discount_amount': 0,
      'discount_amount_inv': 0, 'discount_type': "%", 'ecoin_minus': 0, 'ecoin_plus': 0, 'img_url': "", 'invoice_type': 0, 'is_debit': false,
      'issue_datetime': "2021-07-03T09:10:29+07:00", 'pay_method': "CS", 'pay_reference': "\"\"", 'status': 2, 'vat': 10,
      //--------------------
      'amount': 6200000,
      'amount_paid': 6820000,
      'amount_vat': 620000,
      'current_pay': 7000000,
      'note': note,
    }
    const products = product
    const body = {
      'invoice': invoice,
      'products': [
        {"inv_id":0,"drug_id":0,"drg_drug_cd":"","lot":"","drg_drug_name":"THUOC2","quantity":"120","base_quantity":1,"price":50000,"dosage":"","discount":0,"drug_unit_id":0,"unit_id":0,"unit_name":"VI","promotion_flg":0,"import_price":60000,"discount_type":"VNĐ","discount_unit":0},
        {"inv_id":0,"drug_id":0,"drg_drug_cd":"","lot":"","drg_drug_name":"THUOC1","quantity":"10","base_quantity":1,"price":20000,"dosage":"","discount":0,"drug_unit_id":0,"unit_id":0,"unit_name":"DONVI1","promotion_flg":0,"import_price":23000,"discount_type":"VNĐ","discount_unit":0}]
    }
    const header = {
      headers: {
        'Authorization': token
      }
    }
    const baseURL = config.axiosConfig().baseURL
    try {
      const response = await axios.post(`${baseURL}/invoice`, body, header)
      // const totalDashboard = response.data
      // console.log('Data: ', response.data)
      // console.log('total: ', response.data.today_total_revenue)
      console.log(response)
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleAxiosError(error);
      } else {
        handleUnexpectedError(error);
      }
    }
  }
  const handleAxiosError = (error: object) => {
    console.log(error)
  }
  const handleUnexpectedError = (error: object) => {
    console.log(error)
  }
  //----------------------------------------------------------------------------------------
  const _renderCustomerInfo = () => (
    <View style={styles.customerContainer}>
      <Text>Khách hàng: Vãng lai</Text>
      <TouchableOpacity style={styles.buttonAddCustomer}>
        <Image
          source={require('../../assets/icon/iconHome/icon-customer.png')} />
        <Text style={{ color: 'blue' }}>  Thêm khách hàng</Text>
      </TouchableOpacity>
      <View style={styles.inputCustomerContainer}>
        <Text>Khách trả:</Text>
        <TextInput style={styles.inputCustomer}
          placeholder='0' placeholderTextColor='black'
          keyboardType='numeric'
          onChangeText={(text) => setCurrentPaid(text)}
        ></TextInput>
      </View>
    </View>
  )
  const _renderNote = () => (
    <View style={styles.noteContainer} >
      <View style={styles.noteTitleContainer}>
        <Image
          source={require('../../assets/icon/iconHome/icon-customer.png')} />
        <Text style={{ color: 'blue' }}>  Ghi chú</Text>
      </View>
      <TextInput style={styles.inputCustomer} onChangeText={(text) => setNote(text)}/>
    </View>
  )
  return (
    <SafeAreaView >
      {_renderHeader()}
      <ScrollView>
        {_renderButtonAdd()}
        {_renderListProduct()}
        {_renderBillDate()}
        {_renderCustomerInfo()}
        {_renderNote()}
        <Button onPress={() => submit()} title='SEND'></Button>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
