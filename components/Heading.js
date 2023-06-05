import styled from "styled-components";
import Link from "next/link";

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

export default function Heading() {
  return (
    <>
      <HeadingContainer>
        <Link href="/">
          <HamburgerModel>
            <Line />
            <Line />
            <Line />
          </HamburgerModel>
          <Antonyoga>ANTONYOGA</Antonyoga>
        </Link>
      </HeadingContainer>
    </>
  );
}
