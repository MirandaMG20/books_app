import styled from "styled-components";

export const StyledBookCard = styled.div`
display: flex;
justify-content: space-evenly;
font-family: Poppins, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
align-items: center;
background-color: #ffff;
box-shadow: 0 0 5px #ffff;
// width: 350px;
// width: 95%;
margin: 40px;
padding: 10px;

img {
    width: 100px;
    height: 150px;
    padding: 10px;
    align-items: center;
}

@media (max-width: 750) {
    // flex-direction: column;
}
`;

export const Span = styled.span`
color: #0d0d0d;
font-size: 13px;

`
export const Details = styled.div`
flex-direction: column;
`


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