import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Info = styled.div`
width:60%;
height: 100%;
background-color: beige;
border-radius: 2%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 140px;
margin-left: 70px;
box-shadow: 0 0 25px white;
`

const Elements = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
const Imageuwu = styled.img`
width: 20%;
height: 20%;
margin: 190px 60px;
align-self: center;
border-radius: 100%;
border-style: dashed;
border-color: beige;
padding: 20px;
`

const Title = styled.h1`
color: teal;
font-size: 40px;
letter-spacing: 0.05rem;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
margin-bottom: 0px;
`

const Details = styled.p`
padding: 10px;
margin: 10px 20px 10px 20px;
border-style: dashed;
border-color: teal;
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
background-color: white;
font-size: 24px;
width: 80%;
display: flex;
flex-direction: row;
margin: 10px;
`

const Tag = styled.span`
text-transform: uppercase;
font-weight: bold;
color: teal;
justify-self: start;
margin-right: 20px;
`

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({

    });

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <Elements>
            <Info>
                <Title>{character?.name}</Title>
                <Details>
                    <Tag>Status:</Tag> {character?.status}
                </Details>
                <Details>
                    <Tag>Specie:</Tag> {character?.species}
                </Details>
                <Details>
                    <Tag>Gender:</Tag> {character?.gender}
                </Details>
                <Details>
                    <Tag>Origin:</Tag> {character?.origin?.name}
                </Details>
                <br/>
                <br/>
            </Info>
            <Imageuwu src={character?.image} alt={character?.name}/>
        </Elements>
    )
}

export default Detail