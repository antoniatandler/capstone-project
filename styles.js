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

  h2 {
    text-align: center;
    margin: auto;
    text-decoration: underline;
    width: 100%;
    left: 0;
    right: 0;
    margin-bottom: -10px;
    color: #dbf3e1;
    font-weight: bold;
    font-style: inherit;
    letter-spacing: 1px;
  }

  h3 {
    padding-top: 20px;
  }

  .welcome {
    position: absolute;
    top: 50%;
    left: 50%;
    padding-top: 15px;
    border: dotted;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #dbf3e1;
    color: #dbb290;
    border-radius: 100%;
    letter-spacing: 5px;
    font-size: 32px;
    transform: translate(-50%, -50%);
    width: 60%;
    text-align: center;
    align-items: center;
    border-radius: 50px;
  }

  .poses {
  align-content: center;
   text-align: center;
   font-size: 20px;
  }

  #onlyplace {
    font-weight: bold;
    text-decoration: underline;

  }

 li {
    list-style: none;
    text-align: center;
    background-color: #dbb290;
    border-radius: 15px;
    padding-bottom: 20px;
    height: fit-content;
    box-shadow: 17px 17px 23px -8px rgba(89,49,31,0.52);

  img {
    height: 200px;
    width: 200px;
    margin: auto;
  }


`;

// #00a0a0 darker petrol
