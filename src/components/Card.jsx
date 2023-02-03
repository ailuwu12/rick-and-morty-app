import styled from "styled-components"
import { NavLink } from "react-router-dom"
import styleNav from "./Card.module.css"
import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from "../redux/actions";
import { useEffect } from "react";
import reducer from "../redux/reducer";


const CardBox = styled.div`
width:18%;
background-color: white;
border-radius: 2%;
display: flex;
flex-direction: column;
align-items: center;
margin: 20px 12px;

&:hover{
   box-shadow: 0 0 25px green;
}

`

const CloseButton = styled.button`
background-color: red;
color: white;
border-radius: 15%;
font-weight: bold;
margin: 5px 5px 0 0;
align-self: flex-end;
position: absolute;
width: 30px;
border-color: brown;

&:hover{
   box-shadow: 0 0 10px green;
}

&:active{
   background-color:brown;
}
`

const FavButton = styled.button`
background: none;
font-weight: bold;
margin: 0;
align-self: flex-start;
position: absolute;
width: 30px;
font-size: 20px;
border: none;
}
`

const CharacterImage = styled.img`
width: 100%;
margin-top: 30px;
`
const CharacterName = styled.h2`
  background: teal;
  color: white;
  align-self: start;
  font-size: 12px;
  letter-spacing: 0.05rem;
  padding: 8px;
  width: 93%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  justify-self: center;

  &:hover{
   background-color: brown;
  }
`

const Tags = styled.div`
display: flex;
flex-direction: column;
`

const Tag = styled.div`
display: flex;
flex-direction: row;
margin-top: 5px;
align-self: center;
margin-bottom: 5px;
`
const CharacterTag = styled.h2`
font-size: 11px;
margin: 5px;
padding: 8px;
width: 84px;
background-color: teal;
color: white;
border-radius: 10%;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
letter-spacing: 0.05rem;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

export function Card({id, name, species, gender, image, onClose, addFavorite, deleteFavorite, myFavorites}) {
   const[isFav, setIsFav] = React.useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         deleteFavorite(id)
      }else{
         setIsFav(true)
         addFavorite({id, name, species, gender, image, onClose})
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <CardBox>
         {isFav ? (<FavButton onClick={handleFavorite}>❤️</FavButton>) : (<FavButton onClick={handleFavorite}>🤍</FavButton>)}
         <CloseButton onClick={onClose}>X</CloseButton>
         <CharacterImage  src={image} alt={name} />
         <Tags>
         <NavLink to={`/detail/${id}`} className={styleNav.estilolink}><CharacterName>{name}</CharacterName></NavLink>
         <Tag>
         <CharacterTag>{species}</CharacterTag>
         <CharacterTag>{gender}</CharacterTag>
         </Tag>
         </Tags>
      </CardBox>
   );
}

export function mapDispatchToProps(dispatch) {
   return{
      addFavorite: (character) =>{
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);