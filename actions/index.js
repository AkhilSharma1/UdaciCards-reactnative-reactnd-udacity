export const ADD_CARD = "ADD_CARD";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";

import { saveDeckTitle,addCardToDeck, getDecks } from "../utils/api";

function receiveDecks(decks) {
  console.log('HI')

  console.log(decks)
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function handleReceiveDecks(){
  return dispatch => {
    return getDecks().then(decks => dispatch(receiveDecks(decks)))
  }
}

export function handleAddDeck(title) {
  return dispatch => {
    return saveDeckTitle(title).then(() => dispatch(addDeck(title)));
  };
}

function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}

export function handleAddCard(title, card) {
  return dispatch => {
    return addCardToDeck(title, card).then(() =>
      dispatch(addCard(title, card))
    );
  };
}

function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card
  };
}
