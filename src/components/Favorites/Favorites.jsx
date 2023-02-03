import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styleNav from "../Card.module.css"
import { filterCards, orderCards } from "../../redux/actions";
import "./Favorites.modules.css"

const CardRow= styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
margin: 70px 30px;
`

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

const CharacterImage = styled.img`
width: 100%;
border-top-left-radius: 2%;
border-top-right-radius: 2%;
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

export function Favorites({ myFavorites }){
    const dispatch = useDispatch();

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <>
        <div className="optionBox">
            <select className="selector" onChange={handleOrder}>
                <option value="order">Order By:</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select className="selector" onChange={handleFilter}>
                <option value="filter">Filter By:</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    <CardRow>
        {myFavorites.map((character) => {
            return(<CardBox>
            <CharacterImage  src={character.image} alt={character.name} />
            <Tags>
            <NavLink to={`/detail/${character.id}`} className={styleNav.estilolink}><CharacterName>{character.name}</CharacterName></NavLink>
            <Tag>
            <CharacterTag>{character.species}</CharacterTag>
            <CharacterTag>{character.gender}</CharacterTag>
            </Tag>
            </Tags>
         </CardBox>)
        })}
    </CardRow>
    </>)
}

export function mapStateToProps(state) {
    return{
        myFavorites: state.myFavorites 
    }
 }
 
 export default connect(mapStateToProps, null)(Favorites);