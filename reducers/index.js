import {
  ADD_CARD_TO_DECK,
  RECIEVE_DECKS,
  ADD_NEW_DECK,
} from "../actions/actionTypes";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case RECIEVE_DECKS:
      if (action.decks) {
        return {
          ...state,
          ...JSON.parse(action.decks),
        };
      } else return {};
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
        },
      };
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [...state[action.title].questions, action.card],
        },
      };
    default:
      return state;
  }
}
