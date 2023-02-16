import axios from "axios"

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export const addFavorite = function(character){
    return async (dispatch) => {
        let { data } = await axios.post(`http://localhost:3001/rickandmorty/fav`, character);

         dispatch({type: ADD_FAVORITE, payload: data})
    }
}

export const deleteFavorite = function(id){
    return async (dispatch) => {
        let { data } = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        dispatch({type: DELETE_FAVORITE, payload: data.id})
    }
}

export const filterCards = function(gender){
    return{type: FILTER, payload: gender}
}

export const orderCards = function(sort){
    return{type: ORDER, payload: sort}
}