import React, { Component } from "react";
import {ScrollView,View,Text,StyleSheet,TouchableOpacity} from "react-native";
import DeckContent from "../components/DeckContent";
import { handleReceiveDecks } from "../actions/index";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
  }
  pressHandler = (deckTitle, deckCard) => {
    this.props.navigation.push("MyCard", {
      deckTitle: deckTitle,
      deckCard: deckCard,
      numCards: deckCard.questions.length,
    });
  };

  render() {
    const keys = Object.keys(this.props.decks);
    const decksTitles = keys;
    const decks = this.props.decks;

    if (decksTitles.length === 0) {
      return (
        <View>
          <Text> loading</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        {decksTitles.map((deckTitle, i) => {
          return (
            <View key={i}>
              <DeckContent
                deckTitle={deckTitle}
                deckCard={decks[deckTitle]}
                press={this.pressHandler}
              />
            </View>
          );
        })}
        <View style={{ marginBottom: 30 }} />
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return {
    decks: state,
  };
}
export default connect(mapStateToProps)(Home);
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
