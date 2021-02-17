import { View, StyleSheet, StatusBar } from "react-native";
import React, { Component } from "react";
import Navigator from "./components/router";
import { setLocalStorage } from "./utils/api";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index"
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const store = createStore(reducer, applyMiddleware(thunk));
class App extends Component {
  componentDidMount() {
    setLocalStorage();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#0F1116" barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
