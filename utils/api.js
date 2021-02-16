import { AsyncStorage } from "react-native";
import { DECKS_KEY } from "./helpers";

const initialData = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

export function setLocalStorage ()  {
  return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(initialData));
};

export function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY).then((data) => {
    return JSON.parse(data);
  });
}

export function getDeck(id) {
  return getDecks().then((decks) => JSON.parse(decks)[id]);
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECKS_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    })
  );
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_KEY).then((res) => {
    const decks = JSON.parse(res);
    const newDeck = {
      ...decks,
      [title]: {
        title,
        questions: [...decks[title].questions, card],
      },
    };
    AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(newDeck));
  });
}
