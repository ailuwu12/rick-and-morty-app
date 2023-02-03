import styled from "styled-components";
import { useState } from "react";

const SearchInput = styled.input`
height: 35px;
border-radius: 5px;
margin-top: 0;
`

const SearchButton = styled.button`
font-size: 13px;
margin: 10px;
padding: 10px;
width: 100px;
background-color: beige;
color: black;
border-radius: 8%;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
letter-spacing: 0.05rem;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
text-transform: uppercase;
font-weight: bold;
margin-top: 0;

&:hover{
   box-shadow: 0 0 25px green;
}

&:active{
   background-color: gray;
}
`

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("");
   const handleChange = (event) => {
      setCharacter(event.target.value);
   };

   return (
      <div>
         <SearchInput type='search' value={character} onChange={handleChange}/>
         <SearchButton onClick={() => onSearch(character)}>Agregar</SearchButton>
      </div>
   );
}
