
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rightHeader: {
    width: 25,
    height: 25
  },
  container: {
    marginBottom: 61
  },
  billButtonContainer: {
    flexDirection: "row",
    height: 120,
  },
  billButton: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 8,
    margin: 3,
    borderRadius: 5,
  },
  billButtonIcon: {
    width: 50,
    height: 50
  },
  billButtonText: {
  },
  todayInfoContainer: {
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    margin: 3,
    borderRadius: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
  todayText: {
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 23,
    paddingLeft: 23,
  },
  statisticContainer: {
    height:300,
    backgroundColor: 'white',
    margin: 3,
  },

});

export default styles;