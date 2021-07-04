import React, { useState } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './index.style';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const App = ({ }) => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')

  const submitForm = () => {
    forgotPasswordRequest()
  }
  const forgotPasswordRequest = () => {
  }
  
  const _renderTitle = () => (
    <Text style={styles.titleForgotPassword}>Quên mật khẩu</Text>
  )
  const _renderInput = () => (
    <View style={styles.authInputContainer}>
      <AuthInput
        textValidate=''
        icon='../../assets/icon/iconAuth/iconUser.png'
        placeholder='Tên truy cập hoặc Email'
        onChangeText={(text) => setEmail(text)} />
      <Text style={styles.textUnderInput}>Nhập địa chỉ Email đã dùng để đăng ký</Text>
      <AuthButton textButton='Gửi yêu cầu' 
      onPress={() => submitForm()}/>
    </View>
  )
  const _renderFooter = () => (
    <View style={styles.register}>
      <Text style={styles.registerText}>Bạn chưa có tài khoản? </Text>
      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={() => navigation.navigate('AuthRegistration')}>
        <Text style={styles.buttonRegisterText}>Đăng ký tại đây</Text>
      </TouchableOpacity>
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
        {_renderTitle()}
        {_renderInput()}
        {_renderFooter()}
    </SafeAreaView>
  );
};


export default App;
