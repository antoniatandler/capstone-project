import Heading from "@/components/Heading/Heading";
import WelcomeMessage from "@/components/WelcomeMessage/index.js";
import styled from "styled-components";
import Link from "next/link";
import { Features } from "@/components/Features";
import { FeatureButton } from "@/components/FeatureButton";

export default function HomePage() {
  return (
    <>
      <Heading />
      <WelcomeMessage />
      <Features>
        <FeatureButton variant="primary" href="/poses">
          all yoga poses
        </FeatureButton>
      </Features>
    </>
  );
}
