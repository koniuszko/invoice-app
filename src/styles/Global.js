import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }


  body {
    width: 100%;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.primaryText};
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;
