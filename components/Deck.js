import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { black, white } from "../utils/colors";
import TextButton from "./TextButton";

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("deck", {}).title
    };
  };

  render() {
    const deck = this.props.navigation.getParam("deck", {})
    const { title, questions } = deck
    return (
      // FIXME:make the deck name center of the screen 
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 40, }}>{title}</Text>
          <Text style={{ alignSelf: "center" }}>
            {questions.length} card
            {questions.length !== 1 ? "s" : ""}
          </Text>
        </View>
        <View style={{ marginTop: 100 }}>
          <TextButton
            onPress={() =>  this.props.navigation.navigate("AddCard", { title:title })}
            style={{
              borderWidth: 1
            }}
          >
            Add Card
          </TextButton>
          <TextButton
            onPress={() => this.props.navigation.navigate("Quiz", { deck:deck })}
            style={{
              backgroundColor: black,
              color: white,
              marginTop: 20
            }}
          >
            Start Quiz
          </TextButton>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  }
});

export default Deck;
