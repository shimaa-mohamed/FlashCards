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
class Quiz extends Component {
  state = {
    cardNum: 0,
    ask: true,
    correctAns: 0,
    incorrectAns: 0,
    stop: false,
  };
  handleAnswers = (e) => {
    const numCards = this.props.navigation.getParam("numCards");
    const cardNum = this.state.cardNum;
    if (!(cardNum + 1 >= numCards)) {
      this.setState({ cardNum: this.state.cardNum + 1 });
      console.log("d5lt");
    }

    if (e === "corr") {
      if (this.state.correctAns + 1 > numCards - 1) {
        this.setState({ stop: true });
      }
      if (!this.state.stop) {
        this.setState({ correctAns: this.state.correctAns + 1 });
      }
    } else {
      if (this.state.incorrectAns + 1 > numCards - 1) {
        this.setState({ stop: true });
      }
      if (!this.state.stop) {
        this.setState({ incorrectAns: this.state.incorrectAns + 1 });
      }
    }
    if (cardNum + 1 >= numCards) {
      this.props.navigation.push("Result",{numCorrect:this.state.correctAns,numCards:numCards});
    }
  };
  handleToggle = () => {
    this.setState({ ask: !this.state.ask });
  };
  render() {
    const deckTitle = this.props.navigation.getParam("deckTitle");
    const deckCard = this.props.navigation.getParam("deckCard");
    const numCards = this.props.navigation.getParam("numCards");
    const { cardNum, ask } = this.state;
    const toggleBut = ask ? "Question" : "Answer";
    console.log(this.state);
    let cardContent = ask
      ? deckCard["questions"][cardNum].question
      : deckCard["questions"][cardNum].answer;

    return (
      <View style={styles.container}>
        <Text style={styles.cardNumber}>{`${cardNum + 1}/${numCards}`}</Text>
        <View style={styles.cardContainer}>
          <Text style={styles.deckText}>{cardContent}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.handleToggle}>
            <Text style={styles.toggle}>{toggleBut}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.butView}>
          <TouchableOpacity
            style={styles.correct}
            onPress={() => this.handleAnswers("corr")}
          >
            <AntDesign name="check" size={24} color="#fff" />
            <Text style={styles.textCorrect}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.incorrect}
            onPress={() => this.handleAnswers("incorr")}
          >
            <AntDesign name="close" size={24} color="#fff" />
            <Text style={styles.textCorrect}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Quiz;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: "#aaa",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 150,
    borderColor: "#aaa",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#360772",
    borderWidth: 3,
    marginBottom: 10,
    padding: 30,
  },
  deckText: {
    fontSize: 28,
  },
  cardText: {
    fontSize: 18,
    color: "#aaa",
  },
  cardNumber: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  butView: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  incorrect: {
    width: 90,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "#920102",
    marginTop: 40,
  },
  correct: {
    width: 90,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "#217521",
    marginTop: 40,
  },
  textCorrect: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
  },
  toggle: {
    color: "#BE0815",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    textShadowColor: "#fff",
  },
});
