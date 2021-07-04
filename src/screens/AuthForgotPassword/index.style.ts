
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#61A02C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleForgotPassword: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
    marginTop: '30%',
  },
  authInputContainer: {
    width: '66%',
    marginLeft:'17%',
    marginRight: '17%',
  },
  textUnderInput: {
    fontStyle: 'italic',
    color: 'white',
  },
  buttonRegister: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  register: {
    marginBottom: 23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRegisterText: {
    textDecorationLine: 'underline',
    color: 'white'
  },
  registerText: {
    color: 'white',
    marginTop: 5.5,
  }
});

export default styles;