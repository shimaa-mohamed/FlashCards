import { addCardToDeck, getDecks, saveDeckTitle } from "../utils/api";
export const RECIEVE_DECKS = "RECIEVE_DECKS";
export const ADD_NEW_DECK = "ADD_NEW_DECK";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";

export function receiveDecks(decks) {
  return {
    type: RECIEVE_DECKS,
    decks,
  };
}
export const handleReceiveDecks = () => (dispatch) =>
  getDecks().then((allDesks) => {
    dispatch(receiveDecks(allDesks));
  });
export function addDeckTitle(title) {
  return {
    type: ADD_NEW_DECK,
    title,
  };
}
export const handleAddNewDeck = (title) => (dispatch) =>
  saveDeckTitle(title).then(() => {
    dispatch(addDeckTitle(title));
  });
export function addNewCard(title, card) {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card,
  };
}
export function handleAddNewCard(title, card) {
  return (dispatch) => {
    return addCardToDeck(title, card).then(() => {
      dispatch(addNewCard(title, card));
    });
  };
}
