import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: []
};

export default function rootReducer (state = initialState, action) { //action tiene {type:"",payload:""}
    switch (action.type) {
      case ADD_FAV:
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload]
        };
      case REMOVE_FAV:
        const updatedFavorites = state.myFavorites.filter(
          (character) => character.id !== action.payload
        );
        return {
          ...state,
          myFavorites: updatedFavorites
        };
      default:
        return state;
    }
};

//export default reducer;