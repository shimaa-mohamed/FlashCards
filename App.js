import React, { Component } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Navigator from "./components/router";
import reducer from "./reducers/index";
import { setLocalNotification } from "./utils/helpers";

const store = createStore(reducer, applyMiddleware(thunk));
class App extends Component {
  componentDidMount() {
    // setLocalStorage();
    // this.props.dispatch(handleReceiveDecks());
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

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
