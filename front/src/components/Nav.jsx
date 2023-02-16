import SearchBar from "./SearchBar";
import styled from "styled-components";
import { NavLink } from "react-router-dom"
import styleNav from "./Card.module.css"

const NavBox = styled.nav`
position: fixed; 
top: 0; 
left: 0; 
z-index: 9999; 
width: 100%; 
height: 60px; 
background-color: teal;
float: left;
overflow: hidden;
margin: auto;
box-shadow: 0 -5px 10px 2px white;
margin-bottom: 70px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Search = styled.div`
justify-self: end;
margin-top: 10px;
margin-right: 10px;
`

const Linkis = styled.div`
justify-self: start;
margin-left: 10px;
display: flex;
flex-direction: row; 
justify-content: space-between;
text-transform: uppercase;
`

export default function Nav({onSearch}) {
    return (
       <NavBox> 
         <Linkis>
         <NavLink to="/home" className={({ isActive }) => isActive ? styleNav.linknavactive: styleNav.linknav}>Home</NavLink>
         <NavLink to="/about" className={({ isActive }) => isActive ? styleNav.linknavactive: styleNav.linknav}>About</NavLink>
         <NavLink to="/favorites" className={({ isActive }) => isActive ? styleNav.linknavactive: styleNav.linknav}>Favorites</NavLink>
         <NavLink to="/" className={styleNav.linknav}>Logout</NavLink>
         </Linkis>
          <Search><SearchBar onSearch={onSearch}/></Search>
       </NavBox>
    );
 }
 