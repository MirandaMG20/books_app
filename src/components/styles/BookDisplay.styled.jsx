import styled from "styled-components";

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
font-size: 13px;

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
width: 70% !important; 
height: 30% !important;
background: #939393;
`

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