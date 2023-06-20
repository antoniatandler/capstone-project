import Heading from "@/components/Heading";
import WelcomeMessage from "@/components/WelcomeMessage/index.js";
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
        <br />
        <FeatureButton variant="primary" href="/poses/bookmarks">
          your fav yoga poses
        </FeatureButton>
      </Features>
    </>
  );
}
