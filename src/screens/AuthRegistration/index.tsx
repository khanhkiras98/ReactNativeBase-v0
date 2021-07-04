import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './index.style';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';

const App = ({}) => {
  const [isCheck1, setIsCheck1] = useState(false)
  const [isCheck2, setIsCheck2] = useState(false)

  const _renderTitle = () => (
    <Text style={styles.forgotPassword}>Đăng ký tài khoản</Text>
  )
  const _renderInput = () => (
    <View style={styles.authInputContainer}>
      <AuthInput
        textValidate='Tên nhà thuốc phải có ít nhất 4 ký tự'
        icon='../../assets/icon/iconAuth/iconUser.png'
        placeholder='Tên nhà thuốc *' />

      <AuthInput
        textValidate='Số điện thoại không hợp lệ'
        icon='../../assets/icon/iconAuth/iconUser.png'
        placeholder='Số điện thoại *' />

      <AuthInput
        textValidate='Mật khẩu phải lớn hơn 6 ký tự'
        icon='../../assets/icon/iconAuth/iconUser.png'
        placeholder='Mật khẩu *' />
      <AuthInput
        textValidate='Xác nhận mật khẩu không chính xác'
        icon='../../assets/icon/iconAuth/iconUser.png'
        placeholder='Xác nhận mật khẩu *' />

      {_renderCheckBox()}

      <AuthButton textButton='Đăng ký' />

      <View style={styles.viewInfo}>
        <Text style={styles.textInfo}>Hotline hỗ trợ </Text>
        <Text style={styles.textHotline}>0969 191 355</Text>
      </View>

    </View>
  )
  const _renderCheckBox = () => (
    <View>
      <View style={styles.checkBox}>
        <CheckBox
          style={styles.box}
          disabled={false}
          value={isCheck1}
          onValueChange={(newValue) => setIsCheck1(newValue)}
        />
        <Text style={styles.checkBoxText}>Tôi đồng ý với điều khoản và chính sách bảo mật của Medlink</Text>
      </View>
      <View style={styles.checkBox}>
        <CheckBox
          style={styles.box}
          disabled={false}
          value={isCheck2}
          onValueChange={(newValue) => setIsCheck2(newValue)}
        />
        <Text style={styles.checkBoxText}>Tôi chấp nhận và cho phép chia sẻ các thông tin
          cần thiết để sử dụng dịch vụ của Medlink</Text>
      </View>
    </View>

  )

  return (

  < SafeAreaView style={styles.container} >

    {_renderTitle()}
    {_renderInput()}
    <View></View>

  </SafeAreaView >
  );
};


export default App;
