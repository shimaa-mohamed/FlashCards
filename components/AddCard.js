import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { handleAddNewCard } from "../actions/index";
class AddDeck extends Component {
  state = {
    question: "",
    answer: "",
  };
  handleAddCardToDeck = () => {
    const cardObj={
      question: this.state.question,
      answer: this.state.answer,
    }
    const title=this.props.navigation.getParam("deckTitle");
    this.props
      .dispatch(handleAddNewCard(title,cardObj))
      .then(() => this.props.navigation.push("Tabs"));
      
  };
  handleInputQuestion = (val) => {
    this.setState({ question: val });
  };
  handleInputAnswer = (val) => {
    this.setState({ answer: val });
  };
  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.viewTitle} ><Text style={styles.title}>Add New Card</Text></View>
      
        <TextInput
          style={styles.input}
          value={this.state.deckTitle}
          onChangeText={this.handleInputQuestion}
          placeholder="Enter Your Question"
          blurOnSubmit={false}
        />
         <TextInput
          style={styles.input}
          value={this.state.deckTitle}
          onChangeText={this.handleInputAnswer}
          placeholder="Enter Your Answer"
          blurOnSubmit={false}
        />
        <TouchableOpacity style={styles.addCard} onPress={this.handleAddCardToDeck}>
          <Text style={styles.textAddCard}>Add Card To Deck</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default connect()(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: "#aaa",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
    marginBottom:50
  },
  textAddCard: {
    color: "#F79200",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    textAlign: "center",
    marginBottom: 40,
    color: "#000",
    flex:2,
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
  viewTitle:{
      flexDirection:"row",
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
      textAlign:"center"
  }
});
