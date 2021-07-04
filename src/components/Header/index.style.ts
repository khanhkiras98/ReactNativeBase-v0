
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "center",
    backgroundColor:"#61A02C",
  },
  leftContainer: {
    height: '50%',
    marginLeft: 10,
    marginRight: 5,
    justifyContent: "center",
  },
  centerContainer: {
    // height: '50%',
    flex: 6,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
  },
  rightContainer: {
    height: '50%',
    marginLeft: 5,
    marginRight: 20,
    flex: 2,
    justifyContent: "center",
    alignItems: 'flex-end'
  }

});

export default styles;