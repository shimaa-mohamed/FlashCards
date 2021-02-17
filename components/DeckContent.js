import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

class DeckContent extends Component {
  render() {
    const deck = this.props.deckCard;
    const numCards = deck.questions.length;
    const deckTitle = this.props.deckTitle;
    return (
      <TouchableOpacity onPress={()=>this.props.press(deckTitle,deck)}>
        <View style={styles.container}>
          <View>
            <Text style={styles.deckText}>{deckTitle}</Text>
          </View>
          <View>
            <Text style={styles.cardText}>{`${numCards} Cards`}</Text>
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
