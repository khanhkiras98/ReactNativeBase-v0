
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  rightHeader: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
  container: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  containerInput: {
    backgroundColor: 'white',
    borderRadius: 1,
    width: '70%',
    margin: '15%',
  },
  input: {
    borderWidth: 1,
    margin: 3,
  },
  buttonSubmit: {
    backgroundColor: 'green',
    height: 40,
    width: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default styles;