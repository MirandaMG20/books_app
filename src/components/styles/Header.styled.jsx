import styled from "styled-components";

export const StyledHeader = styled.div`
display: flex;
width: 9000px;
max-width: 100%;
padding: 0 100px;
margin: 0 auto;
margin-bottom: 40px;
// justify-content: space-between;
// background-color: #808080;
// background-color: #ebfbff;
background: #adadad;
box-shadow: 5px 5px 15px #939393;

  @media (max-width: 900px) {
    flex-direction: column;
 }
`

export const StyledTitle = styled.h1`
color: #0d0d0d;
font-size: 120px;

// font-weight: 900;
// font-weight: bold;

box-shadow:  5px 5px 20px #939393, -5px -5px 5px #c7c7c7;
`