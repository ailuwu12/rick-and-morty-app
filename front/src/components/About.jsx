import styled from "styled-components"

const CardBox = styled.div`
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

const Title = styled.h1`
color: teal;
font-size: 40px;
letter-spacing: 0.05rem;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
margin-bottom: 0px;
`

const Info = styled.p`
padding: 30px;
margin: 20px 20px 40px 20px;
border-style: dashed;
border-color: teal;
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
background-color: white;
`

const Elements = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
const Me = styled.img`
width: 20%;
height: 20%;
margin: 118px 60px;
align-self: center;
border-radius: 100%;
border-style: dashed;
border-color: beige;
padding: 20px;
`

const About = () => {
    return(
        <Elements>
        <CardBox>
            <Title>Hola, soy Ailín ♥</Title>
            <Info>Tengo 22 años, soy de Argentina. Actualmente estoy cursando la carrera "Full Stack" de Soy Henry. Me encuentro cursando el Módulo 2 y en esta ocasión estoy diseñando una web con React utilizando la API de Rick & Morty 💕</Info>
        </CardBox>
        <Me src="https://i.imgur.com/h5q4R1j.jpeg"/>
        </Elements>
    )
}

export default About