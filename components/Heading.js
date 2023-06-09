import styled from "styled-components";
import { useState } from "react";
import { GrYoga } from "react-icons/gr";
import { BiHomeHeart } from "react-icons/bi";
import { FeatureButton } from "./FeatureButton";

const HeadingContainer = styled.div`
  position: fixed;
  display: flexbox;
  justify-content: space-between;
  top: 15px;
  right: 0;
  left: 15px;
`;

const HamburgerModel = styled.nav`
  display: flex;
  flex-direction: column;
  width: 25px;
  height: 20px;
  cursor: pointer;
  justify-content: flex-start;
  margin-top: 10px;
`;

const Line = styled.p`
  width: 98%;
  height: 2px;
  background-color: #000;
  margin: 2px;
`;

const Antonyoga = styled.h1`
  display: flex;
  font-size: 35px;
  color: #dac9b6;
  letter-spacing: 8px;
  padding: 15px;
  margin-top: -20px;
  padding-right: 10px;
`;

const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin-left: -50px;
  position: absolute;
  top: 30px;
  z-index: +1;
`;

const MenuItem = styled.li`
  list-style: none;
  margin-top: 30px;
`;

export default function Heading() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeadingContainer>
        <HamburgerModel onClick={toggleMenu}>
          <Line />
          <Line />
          <Line />
        </HamburgerModel>
        <Antonyoga>ANTONYOGA</Antonyoga>
      </HeadingContainer>
      <DropdownMenu isOpen={isOpen}>
        <MenuItem>
          <FeatureButton variant="secondary" href="/">
            <BiHomeHeart />
          </FeatureButton>
        </MenuItem>
        <MenuItem>
          <FeatureButton variant="secondary" href="/poses">
            <GrYoga />
          </FeatureButton>
        </MenuItem>
      </DropdownMenu>
    </>
  );
}
