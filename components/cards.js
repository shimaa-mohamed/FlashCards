import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
class Cards extends Component {
  pressHandler = () => {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>question</Text>
        <Text>Ans</Text>
        <Button title='back to home screen' onPress={this.pressHandler} />
      </View>
    );
  }
}

export default Cards;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 130,
    borderColor: "#aaa",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#360772",
    borderWidth: 3,
    marginBottom: 10,
  },
  deckText: {
    fontSize: 28,
  },
  cardText: {
    fontSize: 18,
    color: "#aaa",
  },
});

