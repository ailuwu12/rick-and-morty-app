import "./Form.css"
import styled from "styled-components"
import React from "react"
import './Form.modules.css'
import validate from "./validation"

const Input = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin: 10px;
`

const Elements = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`

const RickAndMorty = styled.img`
width: 25%;
height: 25%;
margin: 60px 70px;
margin-left: 0;
align-self: center;
border-style: dashed;
border-color: beige;
padding: 20px;
`

export default function Form({ login }){
    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = React.useState({ 
        username: '', 
        password: '' 
    });

    const handleInputChange = (event) =>{
        setUserData({
          ...userData,
          [event.target.name]: event.target.value,
        });

        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value,
          }));
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    const handleClick = () =>{
        alert("email: ailingalanterosso@gmail.com // contraseña: contra123")
    }

    return(
        <Elements>
        <div className="formCard">
        <button onClick={handleClick} className="dataButton">Datos</button>
            <form className="formMargin" onSubmit={handleSubmit}>
                <Input><label className="labelText" htmlFor='username'>Username:</label>
                <input className={errors.username && "warning"} name="username" type="text" value={userData.username} onChange={handleInputChange}></input></Input>
                <p className='danger'>{errors.username}</p>
                <Input><label className="labelText" htmlFor="password">Password:</label>
                <input className={errors.password && "warning"} name="password" type="password" value={userData.password} onChange={handleInputChange}></input></Input>
                <p className='danger'>{errors.password}</p>
                <button className="button" type="submit">LOGIN</button>
            </form>
        </div>
        <RickAndMorty src="https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"/>
        </Elements>
    )
}