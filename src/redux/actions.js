export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorite = function(character){
    return{type: ADD_FAVORITE, payload: character}
}

export const deleteFavorite = function(id){
    return{type: DELETE_FAVORITE, payload: id}
}

export const filterCards = function(gender){
    return{type: FILTER, payload: gender}
}

export const orderCards = function(sort){
    return{type: ORDER, payload: sort}
}