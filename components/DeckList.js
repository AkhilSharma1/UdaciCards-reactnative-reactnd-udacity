import React, { Component } from "react";
import { AppLoading } from "expo";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import {
  handleAddDeck,
  handleAddCard,
  handleReceiveDecks
} from "../actions/index";
import {  black, white } from "../utils/colors";

class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => console.log(`${item.title} pressed`)}
      style={styles.item}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text>{item.questions.length} card{item.questions.length!==1?'s':''}</Text>
    </TouchableOpacity>
  );

  render() {
    const { decksArr } = this.props;
    if (decksArr === undefined) {
      return <AppLoading />;
    }

    return (
      <View style={ {flex: 1,}}>
      <View style={{borderTopWidth:1, borderBottomWidth:1 }}>
        <FlatList
          data={decksArr}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },

  item: {
      padding:10,
    alignItems:'center',
    borderTopWidth:1,
    borderColor:black
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

function mapStateToProps(decks) {
  return {
    decksArr: decks && Object.keys(decks).map(key => decks[key])
  };
}

export default connect(mapStateToProps)(DeckList);
