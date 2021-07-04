
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  rightHeader: {
    width: 40,
    height: 40,
  },
  buttonAdd: {
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 5,
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10
  },
  iconAdd: {
    flex: 1,
    height: 80,
    width: 80,
  },
  textAdd: {
    color: 'grey'
  },
  billDateContainer: {
    height: 180,
    backgroundColor: 'white',
    marginTop: 6,
    padding: 15,
    justifyContent: 'space-between',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  lineLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  input: {
    flex: 1,
    borderWidth: 0.8,
    borderColor: 'grey',
    color: 'black',
    textAlign: 'left',
    margin: 1,
    padding: 0,
    paddingLeft: 10,
  },
  customerContainer: {
    height: 100,
    backgroundColor: 'white',
    marginTop: 6,
    padding: 5,
    paddingLeft: 15,
    justifyContent: 'space-between'
  },
  buttonAddCustomer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputCustomerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputCustomer: {
    borderWidth: 0.8,
    height: 25,
    width: '50%',
    padding: 0,
    paddingLeft: 5,
    borderColor: 'grey'
  },
  noteContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 6,
    padding: 5,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  noteTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }


});

export default styles;