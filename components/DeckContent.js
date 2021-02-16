import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

class DeckContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.press}>
        <View style={styles.container} key={this.props.deckKey}>
          <View>
            <Text style={styles.deckText}>quiz1</Text>
          </View>
          <View>
            <Text style={styles.cardText}>num of cards</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default DeckContent;

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
