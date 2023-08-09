import styled from "styled-components";


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