import styled from "styled-components";

export const StyledBookCard = styled.div`
display: flex;
font-family: Poppins, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
align-items: center;
background-color: #ffff;
box-shadow: 0 0 10px #ffff;
width: 350px;
margin: 40px;
padding: 10px;

// border-radius: 15px;
// align-items: center;
// justify-content: space-evenly;
// flex-direction: column;
// flex-direction: row;

img {
    width: 100px;
    height: 150px;
    padding: 10px;
    align-items: center;
}

//   & > div {
//     flex: 1;
//   }

@media (max-width: 750) {
    // flex-direction: column;
}
`;