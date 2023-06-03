import styled from "styled-components";
import HamburgerMenue from "./HamburgerMenue";

const MainHeading = styled.h1`
  padding-top: 15px;
  text-align: center;
  border: dotted;
  font-size: 30px;
  margin: auto;
  position: fixed;
  top: 30px;
  left: 50%;
  translate: -50%;
  background-color: #dbf3e1;
  width: 70%;
  color: #dbb290;
  border-radius: 15px;
  letter-spacing: 5px;
`;

export default function Heading() {
  return (
    <>
      <HamburgerMenue />
      <MainHeading>ANTONYOGA</MainHeading>
    </>
  );
}
