import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DeckContent from "./DeckContent";
class DecksList extends Component {

  render() {
    const decks = [1, 2, 3, 4, 5, 6, 7];
    return (
      <ScrollView style={styles.container}>
        {Object.values(decks).map((deck) => {
          return (
              <View key={deck}><DeckContent deckKey={deck}/></View>
          );
        })}
        <View style={{ marginBottom: 30 }} />
      </ScrollView>
    );
  }
}

export default DecksList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: "#aaa",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 16,
    color: "#26AA91",
  },
});
