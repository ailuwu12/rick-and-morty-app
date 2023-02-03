import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav"
import { useState, useEffect } from 'react'
import{ Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from "./components/About"
import Detail from "./components/Detail"
import Error from "./components/Error.jsx"
import Form from "./components/Form/Form.jsx"
import Favorites from './components/Favorites/Favorites'

function App () {
 const [characters, setCharacters] = useState([
//   {
//     name: 'Morty Smith',
//     species: 'Human',
//     gender: 'Male',
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//  }
]);

const [access, setAccess] = useState(false);

const navigate = useNavigate();

const username = "ailingalanterosso@gmail.com";

const password = "contra123"

const location = useLocation();

const login = (userData) => {
  if (userData.password === password && userData.username === username) {
    setAccess(true);
    navigate('/home');
 }
};

useEffect(() => {
  !access && navigate('/');
}, [access]);
 
const onSearch = (character) => {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
};

 const onClose = (id) => {
  setCharacters(
    characters.filter(character => character.id !== id)
  )
 };


  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch = {onSearch}/>}
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/> 
        <Route path="/:error" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
