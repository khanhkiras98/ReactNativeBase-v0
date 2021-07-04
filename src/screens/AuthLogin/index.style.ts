
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  allContainer: {
    backgroundColor: '#61A02C',
    flex: 1,
  },
  containerIconMedlink: {
    backgroundColor: "#61A02C",
    alignItems: 'center',
    marginBottom: 15,
  },
  iconMedlink: {
    height: 120,
    width: 120,
  },
  textMedlink: {
    fontWeight: 'bold',
    color: 'white'
  },
  container: {
    flex: 1,
    marginTop: '35%',
    width: '64%',
    marginLeft:'18%',
    marginRight: '18%',
    justifyContent: 'space-between'
  },
  inputText: {
    paddingLeft: 5,
  },
  checkBox: {
    flexDirection: 'row',
    marginLeft: -8,
    marginTop: 15,
  },
  checkBoxText: {
    paddingTop: 5,
    color: 'white'
  },
  buttonAuth: {
    marginTop: 30,
    backgroundColor: 'white',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonAuthText: {
    color: '#61A02C',
    fontWeight: 'bold',
  },
  buttonForgot: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonForgotText: {
    fontWeight: 'bold',
    color: 'white'
  },
  buttonRegister: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  register: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
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