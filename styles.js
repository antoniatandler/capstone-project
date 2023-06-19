import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: fantasy;
    background-color: #00a693;
    margin-top: 40px;
    padding: 15px;
    color: rgb(43, 24, 15);
    
  }
`;
