import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import TextButton from "./TextButton";
import { black, white } from "../utils/colors";
import { handleAddDeck, ADD_DECK } from "../actions/index";
import { connect } from "react-redux";
import { handleReceiveDecks } from "../actions/index";

class NewDeck extends Component {
  state = {
    text: ""
  };

  onSubmit = () => {
    this.props.dispatch(handleAddDeck(this.state.text));
    this.setState({
      text: ""
    });
  };

  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 30 }}>
            What is the title of your new deck?
          </Text>
          <TextInput
            style={styles.txtInput}
            onChangeText={text => this.setState({ text })}
            placeholder="Deck title"
            value={this.state.text}
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


function mapStateToProps (state) {
   return {}
  }
function mapDispatchToProps(dispatch) {
  return {
    addNewDeck: title =>
    //  dispatch(handleReceiveDecks())
    console.log(dispatch)
  };
}

export default connect()(NewDeck);