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
    margin-top: 100px;
    padding: 15px;
    color: #59311f;
  }

  h1 {
    padding-top: 15px;
    text-align: center;
    border: dotted;
    font-size: 40px;
    margin: auto;
    position: fixed;
    top: 10px;
    left: 50%;
    translate: -50%;
    background-color: #dbf3e1;
    width: 95%;
    color: #dbb290;
    border-radius: 15px;
    letter-spacing: 5px;
  }
`;
