import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import reducer from "./reducers/index";
import {Provider} from 'react-redux';
import middleware from "./middleware/index";


export default class App extends React.Component {
  componentDidMount() {


  }
  render() {
    const store = createStore(reducer, middleware);

    return (
      <Provider store = {store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
