import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native'

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('deck', {}).title,
        };
      };

    render(){
        const {title, questions} = this.props.navigation.getParam('deck',{});
        return (
            <View>
                <Text>{title}</Text>
            </View>
        )
    }
}



export default Deck;
