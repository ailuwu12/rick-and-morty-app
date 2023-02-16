import styled from "styled-components"

const No = styled.div`
margin-top: 200px;
font-size: 100px;
color: white;
font-weight: bold;
text-shadow: 0 0 25px green;
`
const Error = () => {
    return(
        <No>ERROR 404 NOT FOUND</No>
    )
}

export default Error