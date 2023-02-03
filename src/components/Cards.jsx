import Card from './Card';
import styled from "styled-components";

const CardRow= styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
margin: 70px 30px;
`

export default function Cards({characters, onClose}) {
   return <CardRow>
      {
         characters.map(({name, species, gender, image, id}) => {
            return <Card 
            name={name} 
            species={species} 
            gender={gender}
            image={image}
            key={id}
            id={id}
            onClose={() => onClose(id)}/>
         })
      }
   </CardRow>;
}
