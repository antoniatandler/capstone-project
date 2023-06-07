import Heading from "@/components/Heading";
import WelcomeMessage from "@/components/WelcomeMessage/index.js";
import styled from "styled-components";
import Link from "next/link";

export const Features = styled.div`
  position: absolute;
  display: flexbox;
  justify-content: center;
  bottom: 15px;
  width: 95%;
  margin: auto;
`;

export const FeatureButton = styled.button`
  background-color: #dbb290;
  border: 5px bold #dbb290;
  height: 40px;
  // width: 45%;
  padding: 5px;
  margin: 5px;
  color: #dbf3e1;
  border-radius: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #dbf3e1;
`;

export default function HomePage() {
  return (
    <>
      <Heading />
      <WelcomeMessage />
      <Features>
        <StyledLink href="/poses">
          <FeatureButton>all yoga poses</FeatureButton>
        </StyledLink>
        {/* <FeatureButton>Feature 2</FeatureButton>
        <FeatureButton>Feature 3</FeatureButton>
        <FeatureButton>Feature 4</FeatureButton> */}
      </Features>
    </>
  );
}
