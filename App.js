import { View, StyleSheet, StatusBar } from "react-native";
import React, { Component } from "react";
import Navigator from "./components/router";
import { setLocalStorage } from "./utils/api";
import { createStore, applyMiddleware } from "redux";
import { connect } from "react-redux";

import reducer from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { setLocalNotification } from "./utils/helpers";
const store = createStore(reducer, applyMiddleware(thunk));
class App extends Component {
  componentDidMount() {
    setLocalStorage();
    this.props.dispatch(handleReceiveDecks());
    setLocalNotification();
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

export default connect()(App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
