import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { FeatureButton } from "@/pages";
import { GrYoga } from "react-icons/gr";
import { BiHomeHeart } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";

const HeadingContainer = styled.div`
  position: fixed;
  display: flexbox;
  justify-content: space-between;
  top: 15px;
  right: 0;
  left: 15px;
`;

const HamburgerModel = styled.div`
  display: flex;
  flex-direction: column;
  width: 25px;
  height: 20px;
  cursor: pointer;
  justify-content: flex-start;
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
  margin-top: -25px;
`;

const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 130px;
  margin-left: -50px;
  position: absolute;
  top: 30px;
  z-index: +1;
`;

const MenuItem = styled.li`
  list-style: none;
`;

const BurgerLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const MenuButton = styled.button`
  background-color: #dac9b6;
  border: 5px bold #dbb290;
  height: 40px;
  width: 45%;
  padding: 5px;
  margin: 5px;
  gap: 10px;
  color: #dbf3e1;
  border-radius: 20px;
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
          <MenuButton>
            <BurgerLink href="/">
              <BiHomeHeart />
            </BurgerLink>
          </MenuButton>
        </MenuItem>
        <MenuItem>
          <MenuButton>
            <BurgerLink href="/poses">
              <GrYoga />
            </BurgerLink>
          </MenuButton>
        </MenuItem>
        {/* <MenuItem>
          <MenuButton>
            <BurgerLink href="/contact">
              <SlEnvolopeLetter />
            </BurgerLink>
          </MenuButton>
        </MenuItem> */}
      </DropdownMenu>
    </>
  );
}
