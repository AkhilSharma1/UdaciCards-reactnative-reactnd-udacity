import { AsyncStorage } from "react-native";
const UDACICARDS_STORAGE_KEY = "UdaciCards:cards";

export function getDecks() {
  return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
    .then(addDummyDataIfEmpty)
}

export function getDeck(id) {
  return getDecks().then(result => result[id]);
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    UDACICARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  );
}

export function addCardToDeck(title, card) {
  return getDeck(title).then(data => {

    data['questions'].push(card);

     AsyncStorage.mergeItem(
        UDACICARDS_STORAGE_KEY,
        JSON.stringify({
          [title]: data
        })
      );
  });
}

function addDummyDataIfEmpty(result) {
  if (result !== null) return JSON.parse(result);

  const dummyData = {
    React: {
      title: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces"
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event"
        }
      ]
    },
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  };

  AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(dummyData));

  return dummyData;
}

// export function clearData(){
//     return AsyncStorage.removeItem(UDACICARDS_STORAGE_KEY)
// }
