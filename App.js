import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { createStore } from "redux";
import reducer from "./reducers/index";
import { Provider } from "react-redux";
import middleware from "./middleware/index";
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import { purple, white } from "./utils/colors";
import { Constants } from "expo";
import NewDeck from "./components/NewDeck";
import AddCard from './components/AddCard';
 
import {createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import Quiz from "./components/Quiz";
import { setLocalNotification } from "./utils/helpers";

function StatusBarWrapper({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount(){
  setLocalNotification()
  }

  render() {
    const store = createStore(reducer, middleware);

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBarWrapper backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const RouteConfigs = {
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "DECKS"
    }
  },
  AddEntry: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: "NEW DECK"
    }
  }
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

const MainNavigator = createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    })
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  }
});
