import styled from "styled-components";
import { useState } from "react";
import { TbYoga } from "react-icons/tb";
import { BiHomeHeart } from "react-icons/bi";
import { FeatureButton } from "../FeatureButton";

const HeadingContainer = styled.header`
  position: fixed;
  display: flexbox;
  justify-content: space-between;
  top: 15px;
  margin-top: -15px;
  padding-top: 10px;
  padding-bottom: 10px;
  right: 0;
  left: 15px;
  height: 50px;
  background-color: #00a693;
  box-shadow: 0px 17px 13px -7px #00a693;
  margin-left: -15px;
  z-index: 1;
`;

const HamburgerModel = styled.button`
  display: flex;
  flex-direction: column;
  width: 25px;
  height: 20px;
  cursor: pointer;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 0;
  background: none;
  border: 0;
  margin-left: 15px;
`;

const Line = styled.div`
  width: 98%;
  height: 2px;
  background-color: rgb(43, 24, 15);
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
  margin-left: -45px;
  position: fixed;
  top: 35px;
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
            <BiHomeHeart size={16} />
          </FeatureButton>
        </MenuItem>
        <MenuItem>
          <FeatureButton variant="secondary" href="/poses">
            <TbYoga size={16} />
          </FeatureButton>
        </MenuItem>
      </DropdownMenu>
    </>
  );
}
