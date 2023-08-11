import styled from "styled-components";


export const Container = styled.div`
background-color: #242424;
justify-content: center;
overflow: hidden;
`

export const StyledBookCard = styled.div`
font-family: Poppins, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
display: flex;
align-items: center;
place-items: center;
flex-direction: column;
background-color: #ffff;
box-shadow: 0 0 5px #ffff;
width: 325px;
margin: 25px;
padding: 5px;

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
`

export const Img = styled.img`
width: 120px;
height: 150px;
padding: 10px;
align-items: center;
`

export const Details = styled.div`
display: flex;
place-items: center;
flex-direction: column;
text-align: center;
line-height: 1.3;
`

// export const BookTitles =styled.h5`
// text-align: center;
// `

export const PlusBtn = styled.button`
font: inherit;
color: #0d0d0d;
border: none;
cursor: pointer;
font-weight: 800;
margin: 15px 0 5px;
padding: 5px 13px;
Border-radius: 50%;
background-color: #ffff;
box-shadow: 0 0 8px ;

&:hover {
  opacity: 5;
  transform: scale(0.90);
  box-shadow: 0 0 8px #df0c0c;

  i:hover {
    color: #df0c0c;
    -webkit-text-stroke-width: 4px; 
    
    &::after {
    content: ❤
    // font-weight: bolder;
    color: #df0c0c;
  }  
}
`

export const Span = styled.span`
color: #0d0d0d;
font-size: 15px;
`

export const Overlay = styled.div`
z-index: 100;
display: flex;
position: fixed;
align-items: center;
// justify-content: center;
margin: 20px 300px;
padding: 15px;
width: auto !important; 
height: auto !important;
background: #939393;
opacity: 95%;
box-shadow: 0 0 10px #ffff;
`

export const Info = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const Summary = styled.p`
color: black;
font-weight: 500;
text-align: center;
`

export const OverlayBtn = styled.button`
font: inherit;
color: #0d0d0d;
border: none;
cursor: pointer;
font-size: 15px;
font-weight: 800;
padding: 5px 5px;
background-color: #ffff;
box-shadow: 0 0 8px ;
z-index: 5;

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