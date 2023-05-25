import Heading from "../Heading";
import styled from "styled-components";
import Image from "next/image";

export const Welcome = styled.text`
  position: absolute;
  top: 50%;
  left: 50%;
  tranform: translate(-50%, -50%);
  padding-top: 15px;
  border: dotted;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #dbf3e1;
  color: #dbb290;
  border-radius: 100%;
  letter-spacing: 5px;
  font-size: 20px;
  transform: translate(-50%, -50%);
  width: 70%;
  text-align: center;
  align-items: center;
  border-radius: 50px;
`;
export const Features = styled.div`
  position: absolute;
  bottom: 30px;
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

export default function WelcomeMessage() {
  return (
    <>
      <Heading />
      <div>
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/pictures/succulente.jpeg"
            alt="picture of a succulent"
            height={350}
            width={400}
          />
        </div>
        <Welcome>
          <p>YOGA TAKES YOU INTO THE PRESENT MOMENT.</p>
          <p>
            THE <span id="onlyplace">ONLY PLACE</span> WHERE LIFE EXISTS.
          </p>
        </Welcome>
      </div>

      <Features>
        <FeatureButton>All Yoga Poses</FeatureButton>
        <FeatureButton>Feature 2</FeatureButton>
        <FeatureButton>Feature 3</FeatureButton>
        <FeatureButton>Feature 4</FeatureButton>
        <FeatureButton>Feature 5</FeatureButton>
        <FeatureButton>Feature 6</FeatureButton>
      </Features>
    </>
  );
}
