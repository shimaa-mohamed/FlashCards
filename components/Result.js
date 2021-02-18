import { Entypo } from "@expo/vector-icons";
import React, { Component } from "react";
import {
  ScrollView,


  StyleSheet, Text,

  TouchableOpacity, View
} from "react-native";
class Result extends Component {
  handleRestartQuiz=()=>{
    const press = this.props.navigation.getParam("press");
    press();
    this.props.navigation.goBack();
  }
  handleBacktoDeck=()=>{
    const press = this.props.navigation.getParam("press");
    press();
    this.props.navigation.pop(2);
  }
  render() {
    const numCards = this.props.navigation.getParam("numCards");
    const numCorrect = this.props.navigation.getParam("numCorrect");
    
    const percentage = ((numCorrect / numCards) * 100).toFixed(1);
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.icon}>
          <Entypo name="bell" size={55} color="#032449" />
        </View>
        <View>
          <Text
            style={styles.ResText}
          >{`Your Result Is : ${numCorrect}/${numCards} `}</Text>
          <Text
            style={styles.ResText}
          >{`Your Result In Percentage :${percentage} % `}</Text>
          <TouchableOpacity style={styles.addCard} onPress={this.handleRestartQuiz}>
            <Text style={styles.textAddCard}>Restart Quiz </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addCard} onPress={this.handleBacktoDeck}>
            <Text style={styles.textAddCard}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Result;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: "#aaa",
    textAlign: "center",
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
  icon: {
    marginLeft: 120,
    marginRight: 120,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  ResText: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 40,
  },
  margin: {
    textAlign: "center",
    alignItems: "center",
  },
});
