import styled from "styled-components";


export const StyledHeader = styled.div`
font-family: Poppins, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
padding: 30px;
margin: 0 0 40px 0;
width: 100%;
height: auto;
background: #ffff;
display: flex;
box-sizing: border-box;
align-items: center;
justify-content: space-evenly;
box-shadow: 5px 5px 15px #939393;

@media (max-width: 900px) {
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
place-items: center;
flex-direction: column;
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
text-align: center;  
`

export const SearchBtn = styled.button`
font: inherit;
color: #0d0d0d;
border: none;
cursor: pointer;
font-weight: 800;
margin: 10px;
padding: 5px 13px;
Border-radius: 50%;
background-color: #ffff;
box-shadow: 0 0 8px ;

i {
  font-size: 15px;
}

&:hover {
  opacity: 0.9;
  transform: scale(0.90);
  background-color: #939393;
}
`

export const BookIcon = styled.span`
font-size: 40px;
color: #939393
`

export const Quote = styled.div`
font-style: italic;
line-height: 1.5;
display: flex;
place-items: center;
flex-direction: column;

// Making the animation move back and forth
h2 {
  animation-duration: 5s;
  animation-name: slidein;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes slidein {
  from {
    margin-right: -80%;
    width: 100%;
  }
  to {
    margin-right: 30%;
    width: 100%;
  }
}
`

export const FavBtn = styled.button`
color: #939393;
border: none;
cursor: pointer;
font-weight: 500;
margin-top: 8px;
padding: 5px 13px;
Border-radius: 50%;
background-color: #ffff;
box-shadow: 0 0 8px;
display: flex;
place-items: center;
flex-direction: column;

&:hover {
  // opacity: 5;
  transform: scale(0.90);
  box-shadow: 0 0 8px #df0c0c;
}

i:hover {
  color: #df0c0c;
  -webkit-text-stroke-width: 4px; 
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