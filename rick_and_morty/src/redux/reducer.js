import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, action) {
  //action tiene {type:"",payload:""}
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      const updatedFavorites = state.allCharacters.filter(
        (character) => character.id !== action.payload
      );
      return {
        ...state,
        myFavorites: updatedFavorites,
        allCharacters: updatedFavorites,
      };
    case FILTER:
      const copia = state.allCharacters.filter(
        (element) => element.gender === action.payload
      );
      return {
        ...state,
        myFavorites: copia,
      };
    case ORDER:
      const newOrder = state.allCharacters.sort((a, b) => {
        if(a.id>b.id){
          return "Ascendente" === action.payload ? 1 : -1 
        }
        if(a.id<b.id){
          return "Descendente" === action.payload ? 1 : -1 
        }
        return 0;
      });
      return { ...state, myFavorites: newOrder };
    default:
      return state;
  }
}

//export default reducer;
