import { View, StyleSheet, StatusBar } from "react-native";
import React, { Component } from "react";
import Navigator from "./components/router";
import {setLocalStorage} from "./utils/api"
class App extends Component {
componentDidMount(){
  setLocalStorage()
}
  render() { 
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}
 
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
