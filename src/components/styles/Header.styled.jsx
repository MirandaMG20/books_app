import styled from "styled-components";


export const StyledHeader = styled.div`
font-family: Poppins, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
padding: 0;
margin: 0 0 40px 0;
width: 100%;
background: #ffff;
box-shadow: 5px 5px 15px #939393;
display: flex;
align-items: center;
justify-content: space-evenly;

@media (max-width: 900px) {
  flex-direction: column;
}

`

export const StyledTitle = styled.h1`
color: #939393;
font-size: 150px;
letter-spacing: 0.3em;
padding: 0 15px 0 15px;
box-shadow:  5px 5px 20px #939393, 5px 5px 5px #c7c7c7;
`
// box-sizing: border-box;
// justify-content: space-between;
// background-color: #808080;
// background-color: #ebfbff;
// background: #adadad;
// font-weight: 900;
// font-weight: bold;
// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,100;1,300&display=swap');