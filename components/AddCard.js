import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import TextButton from "./TextButton";
import { black, white } from "../utils/colors";
import { handleAddDeck, ADD_DECK, handleAddCard } from "../actions/index";
import { connect } from "react-redux";

class AddCard extends Component {
  static navigationOptions = {
    title: "Add Card"
  };

  state = {
    question: "",
    answer: ""
  };

  //TODO: add success notification on submit
  onSubmit = () => {
    const  title  = this.props.navigation.getParam("title",'None' );
    const { question, answer } = this.state;
    this.props.dispatch(handleAddCard(title, { question, answer }));
    this.setState({
      question: "",
      answer: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.txtInput}
            onChangeText={text => this.setState({ question:text })}
            placeholder="Question"
            value={this.state.question}
          />
          <TextInput
            style={styles.txtInput}
            onChangeText={text => this.setState({ answer:text })}
            placeholder="Answer"
            value={this.state.answer}
          />
          <TextButton style={styles.btn} onPress={this.onSubmit}>
            Submit
          </TextButton>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20
  },
  txtInput: {
    height: 40,
    borderColor: "gray",
    margin: 16
  },
  btn: {
    backgroundColor: black,
    color: white
  }
});

export default connect()(AddCard);
