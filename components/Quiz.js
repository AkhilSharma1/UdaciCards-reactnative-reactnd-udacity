import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { green, white, red, purple } from "../utils/colors";
import TextButton from "./TextButton";
import Modal from "react-native-modal";

class Quiz extends Component {
  static navigationOptions = {
    title: "Quiz"
  };

  state = {
    cardIndex: 0,
    correctAnswers: 0,
    showQuestion: true,
    showModal: false
  };

  onOptionChosen = isCorrectOptionChosen => {
    const { cardIndex, correctAnswers } = this.state;
    const showModal =
      cardIndex + 1 >=
      this.props.navigation.getParam("deck", {}).questions.length;

    this.setState(() => {
      return {
        cardIndex: cardIndex + 1,
        correctAnswers:
          isCorrectOptionChosen === true ? correctAnswers + 1 : correctAnswers,
        showQuestion: true,
        showModal: showModal
      };
    });
  };

  render() {
    const { title, questions } = this.props.navigation.getParam("deck", {});
    const { cardIndex, showModal, correctAnswers, showQuestion } = this.state;

    if (showModal === true) {
      return (
        <Modal isVisible={true}>
          <View style = {{backgroundColor:white}}>
            <Text>
              You got {correctAnswers}/{questions.length} correct!
            </Text>
            <Text>Click OK to go back.</Text>

            <TextButton
              onPress={()=>this.props.navigation.goBack()}
              style={{ color: purple }}
            >
              OK
            </TextButton>
          </View>
        </Modal>
      );
    }
    const card = questions[cardIndex];
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text>
            {cardIndex + 1}/{questions.length}
          </Text>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text style={{ alignSelf: "flex-end" }}>Deck : {title}</Text>
          </View>
        </View>
        <View style={{ marginTop: 80 }}>
          <Text style={{ fontSize: 40, alignSelf: "center" }}>
            {showQuestion === true ? card.question : card.answer}
          </Text>
          <TextButton
            onPress={() =>
              this.setState({
                showQuestion: !showQuestion
              })
            }
            style={{
              color: red
            }}
          >
            Answer
          </TextButton>
        </View>
        <View style={{ marginTop: 100 }}>
          <TextButton
            onPress={() => this.onOptionChosen(true)}
            style={{
              backgroundColor: green,
              color: white
            }}
          >
            Correct
          </TextButton>
          <TextButton
            onPress={() => this.onOptionChosen(false)}
            style={{
              backgroundColor: red,
              color: white,
              marginTop: 20
            }}
          >
            Incorrect
          </TextButton>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBar: {
    flexDirection: "row",
    padding: 15
  }
});

export default Quiz;
