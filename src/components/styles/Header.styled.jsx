import styled from "styled-components";


export const StyledHeader = styled.div`
font-family: Poppins, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
padding: 0;
margin: 0 0 40px 0;
width: 100%;
height: 250px;
background: #ffff;
box-shadow: 5px 5px 15px #939393;
display: flex;
box-sizing: border-box;
align-items: center;
justify-content: space-evenly;

@media (max-width: 750px) {
  flex-direction: column;
}
`

export const StyledTitle = styled.h1`
color: #939393;
font-size: 130px;
letter-spacing: 0.1em;
padding-left: 15px;
box-shadow:  5px 5px 20px #939393, 5px 5px 5px #c7c7c7;
`

export const FormStyles = styled.form`
font-family: Poppins, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
display: flex;
flex-direction: column;
place-items: center;
margin: 0;
padding: 10px;
`

export const Span = styled.span`
font-weight: 800;
padding: 5px;
place-items: center;
`

export const Input = styled.input`
font: inherit;
width: 150px;
padding: 10px;
border: none;
box-shadow: 0 0 8px ;
`

export const Button = styled.button`
font: inherit;
color: #0d0d0d;
border: none;
cursor: pointer;
font-size: 15px;
font-weight: 800;
margin: 10px;
padding: 5px 10px;
background-color: #ffff;
box-shadow: 0 0 8px ;

  &:hover {
    opacity: 0.9;
    transform: scale(0.90);
    background-color: #939393;
  }
`

// align-items: center;
// box-sizing: border-box;
// justify-content: space-between;
// background-color: #808080;
// background-color: #ebfbff;
// background: #adadad;
// font-weight: 900;
// font-weight: bold;
// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,100;1,300&display=swap');