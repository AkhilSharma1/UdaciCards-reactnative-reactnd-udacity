import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { createStore } from "redux";
import reducer from "./reducers/index";
import { Provider } from "react-redux";
import middleware from "./middleware/index";
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import { purple } from "./utils/colors";
import { Constants } from "expo";
import NewDeck from "./components/NewDeck";

function StatusBarWrapper({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {


  render() {
    const store = createStore(reducer, middleware);

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBarWrapper backgroundColor={purple} barStyle="light-content" />
          {/* <DeckList/> */}
          {/* <Deck title='React'/> */}
          <NewDeck />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  }
});
