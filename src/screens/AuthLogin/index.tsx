import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions/auth';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './index.style';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import config from "../../configs"
import auth from '../../api/auth';


const App = () => {
  const [isSavePassword, setIsSavePassword] = useState(false)
  const navigation = useNavigation();

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  //-----------------------------------------------------------------------------------//
  const loginRequest1 = () => {
    auth.login({ login_id: userName, password: password })
  }
  //-----------------------------------------------------------------------------------//
  const [info, setInfo] = useState('')
  const [token, setToken] = useState('')
  const dispatch = useDispatch();
  const addToRedux = () => {
    dispatch(loginSuccess(token))
  }
  const submitForm = () => {
    loginRequest()
  }
  const loginRequest = async () => {
    const article = {
      login_id: userName,
      password: password
    }
    const baseURL = config.axiosConfig().baseURL
    try {
      const response = await axios.post(`${baseURL}/auth/signin`, article)
      setInfo(response.data)
      console.log('Login: ', response.data)
      setToken(response.data.access_token)
      console.log('Login: ', response.data.access_token)
      dispatch(loginSuccess(response.data.access_token))
      gotoMain()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleAxiosError(error);
      } else {
        handleUnexpectedError(error);
      }
    }
  }
  const gotoMain = () => {
    navigation.navigate('Main')
  }
  const handleAxiosError = (error: object) => {
    console.log(error)
    alert('Thông tin đăng nhập không đúng')
  }
  const handleUnexpectedError = (error: object) => {
    console.log(error)
  }
  //---------------------------------------------------------------------------------------//

  const _renderLogo = () => (
    <View style={styles.containerIconMedlink}>
      <Image style={styles.iconMedlink}
        source={require('../../assets/icon/iconMedlink/icon-medlink.png')} />
      <Text style={styles.textMedlink}>MEDLINK</Text>
    </View>
  )
  const _renderInput = () => (
    <View>
      <AuthInput
        textValidate='Vui lòng nhập đúng email hoặc số điện thoại'
        icon='../../assets/icon/iconAuth/iconUser.png'
        placeholder='Email / Số điện thoại'
        onChangeText={(text) => setUserName(text)} />
      <AuthInput
        textValidate='Mật khẩu phải lớn hơn 6 ký tự'
        icon='../../assets/icon/iconAuth/iconPass.png'
        placeholder='Mật khẩu'
        onChangeText={(text) => setPassword(text)} />
      <View style={styles.checkBox}>
        <CheckBox
          disabled={false}
          value={isSavePassword}
          onValueChange={(newValue) => setIsSavePassword(newValue)}
        />
        <Text style={styles.checkBoxText}>Lưu mật khẩu</Text>
      </View>
      <AuthButton textButton='Đăng nhập'
        onPress={() => submitForm()}
      />
      <TouchableOpacity
        style={styles.buttonForgot}
        onPress={() => navigation.navigate('AuthForgotPassword')}
      >
        <Text style={styles.buttonForgotText}>Quên mật khẩu?</Text>
      </TouchableOpacity>
    </View>
  )
  const _renderFooter = () => (
    <View style={styles.register}>
      <Text style={styles.registerText}>Bạn chưa có tài khoản? </Text>
      <TouchableOpacity
        style={styles.buttonForgot}
        onPress={() => navigation.navigate('AuthRegistration')}  >
        <Text style={styles.buttonRegisterText}>Đăng ký tại đây</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.allContainer}>
      <View style={styles.container}>
        {_renderLogo()}
        {_renderInput()}
        {_renderFooter()}
      </View>
    </SafeAreaView>
  );
};

export default App;

