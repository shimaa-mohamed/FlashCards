import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
class Cards extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation.state.params.deckTitle);
    return {
        title: navigation.state.params.deckTitle
    }
}
  pressAddHandler = (deckTitle) => {
    // this.props.navigation.goBack();
    this.props.navigation.push("AddCard",{
      deckTitle: deckTitle,
    });
  };

  pressQuizHandler = (deckTitle,deckCard,numCards) => {
    // this.props.navigation.goBack();
    this.props.navigation.push("Quiz",{
      deckTitle,
      deckCard,
      numCards
    });
  };

  render() {
    
    const numCards=this.props.navigation.getParam("numCards");
    const deckTitle=this.props.navigation.getParam("deckTitle");
    const deckCard=this.props.navigation.getParam("deckCard");
    // this.setTitle(deckTitle);
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>
            {this.props.navigation.getParam("deckTitle")}
          </Text>
          <Text style={styles.numCards}>{`${numCards} cards`}</Text>
          {/* <Button title='back to home screen' onPress={this.pressHandler} /> */}
          <TouchableOpacity style={styles.addCard} onPress={()=>this.pressAddHandler(deckTitle)}>
            <Text style={styles.textAddCard}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addCard} onPress={()=>this.pressQuizHandler(deckTitle,deckCard,numCards)}>
            <Text style={styles.textAddCard}>Start Quiz</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.delete}>
            <View style={styles.margin}>
              <AntDesign
                name="delete"
                textAlign="center"
                size={40}
                color="#fff"
              />
              <Text style={styles.deleteText}>Delete Deck</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  }
}

export default Cards;
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
    marginTop: 40,
    textAlign: "center",
    marginBottom: 16,
    color: "#000",
  },
  numCards: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
    color: "#000",
  },
  addCard: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "#032449",
    marginTop: 40,
  },
  textAddCard: {
    color: "#F79200",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  delete: {
    marginLeft: 120,
    marginRight: 120,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    // alignContent:"center",
    height: 80,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "#920102",
    marginTop: 40,
  },
  deleteText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
  },
  margin: {
    textAlign: "center",
    alignItems: "center",
  },
});
