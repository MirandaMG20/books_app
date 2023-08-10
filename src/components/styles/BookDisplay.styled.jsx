import styled from "styled-components";

export const Container = styled.div`
background-color: #242424;
justify-content: center;
`


export const StyledBookCard = styled.div`
display: flex;
font-family: Poppins, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
align-items: center;
background-color: #ffff;
box-shadow: 0 0 5px #ffff;
width: 350px;
margin: 40px;
padding: 10px;

&:hover {
    opacity: 0.9;
    cursor: pointer;
    transform: scale(0.90);
    background-color: #939393;
  }

// img {
//     width: 100px;
//     height: 150px;
//     padding: 10px;
//     align-items: center;
// }
`;

export const Img = styled.img`
width: 100px;
height: 150px;
padding: 10px;
align-items: center;
`

export const Span = styled.span`
color: #0d0d0d;
font-size: 15px;

`
export const Details = styled.div`

`

export const Overlay = styled.div`
z-index: 100;
position: fixed;
align-items: center;
top: 0;
left: 0;
padding: 15px;
margin: 400px 300px;
width: 70% !important; 
// height: 30% !important;
background: #939393;
display: flex;
flex-direction: column;
opacity: 95%;
box-shadow: 0 0 10px #ffff;
`
export const Summary = styled.p`
color: black;
font-weight: 500;
text-align: center;
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

// opacity: 0.9;
// display: flex;
// justify-content: center;
// align-items: center;
// overflow: auto;
// flex-wrap: nowrap
// font-weight: 400;
// place-items: center;
// flex-direction: column;
// flex-direction: row;
// flex-wrap: wrap;
// border-radius: 15px;
// align-items: center;
// justify-content: space-evenly;

//   & > div {
//     flex: 1;
//   }