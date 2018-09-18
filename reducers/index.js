import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    case ADD_CARD:
      const { title, card } = action;
     
      return {
        ...state,
        [title]: {
            title,
            questions: state[title].questions.concat([card])
          }
      };
  }
}
