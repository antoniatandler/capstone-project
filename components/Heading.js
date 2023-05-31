import React from "react";
import styled from "styled-components";

const MainHeading = styled.h1`
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
`;

export default function Heading() {
  return <h1>ANTONYOGA</h1>;
}
