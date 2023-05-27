import Heading from "@/components/Heading";
import WelcomeMessage from "@/components/WelcomeMessage/index.js";
import styled from "styled-components";
import Link from "next/link";

export const Features = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: auto;
`;

export const FeatureButton = styled.button`
  background-color: #dbb290;
  border: 5px bold #dbb290;
  height: 40px;
  width: 45%;
  padding: 5px;
  margin: 5px;
  gap: 10px;
  color: #dbf3e1;
  border-radius: 20px;
`;

export default function HomePage() {
  return (
    <>
      <Heading />
      <WelcomeMessage />
      <Features>
        <Link
          href="../../poses/"
          style={{
            textDecoration: "none",
            color: "#dbf3e1",
          }}
        >
          <FeatureButton>all yoga poses</FeatureButton>
        </Link>

        <FeatureButton>Feature 2</FeatureButton>
        <FeatureButton>Feature 3</FeatureButton>
        <FeatureButton>Feature 4</FeatureButton>
        <FeatureButton>Feature 5</FeatureButton>
        <FeatureButton>Feature 6</FeatureButton>
      </Features>
    </>
  );
}
