import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { FeatureButton } from "@/pages";
import { GrYoga } from "react-icons/gr";
import { BiHomeHeart } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";

const HeadingContainer = styled.div`
  position: fixed;
  top: 15px;
  width: 98%;
`;

const HamburgerModel = styled.div`
  position: fixed;
  left: 15px;
  top: 35px;
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 20px;
  cursor: pointer;
`;
const Line = styled.text`
  width: 98%;
  height: 2px;
  background-color: #000;
  margin: 2px 0;
  transition: all 0.3s ease-in-out;
`;

const Antonyoga = styled.h1`
  font-size: 35px;
  top: 0;
  color: #dac9b6;
  position: fixed;
  right: 10px;
  letter-spacing: 8px;
  padding: 0;
`;

const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 40px;
  left: -65px;
  text-align: center;
  width: 35%;
`;

const MenuItem = styled.li`
  list-style: none;
`;

const BurgerLink = styled(Link)`
  color: black;
  text-decoration: none;
  z-index: +1;
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
          <MenuItem>
            <MenuButton>
              <BurgerLink href="/contact">
                <SlEnvolopeLetter />
              </BurgerLink>
            </MenuButton>
          </MenuItem>
        </DropdownMenu>
        <Link href="/">
          <Antonyoga>ANTONYOGA</Antonyoga>
        </Link>
      </HeadingContainer>
    </>
  );
}
