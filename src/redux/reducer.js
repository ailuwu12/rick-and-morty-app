import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
 };

 const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        
            case DELETE_FAVORITE:
                let filteredFavorites = state.myFavorites.filter((character) => character.id !== action.payload);
                return{
                    ...state,
                    myFavorites: filteredFavorites,
                }

            case FILTER:
                let allCharactersFiltered = state.allCharacters.filter((character) => character.gender === action.payload)
                return{
                    ...state,
                    myFavorites: allCharactersFiltered
                }

            case ORDER:
                return{
                    ...state,
                    myFavorites: action.payload === "Ascendente" ? state.allCharacters.sort((a, b) => a.id - b.id) : state.allCharacters.sort((a, b) => b.id - a.id)
                }

        default:
            return{...state}
    }
 };

 export default reducer;