import Heading from "../Heading";
import styled from "styled-components";
import Image from "next/image";

export const Welcome = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  padding-top: 15px;
  border: dotted;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #dbf3e1;
  color: #dbb290;
  border-radius: 100%;
  letter-spacing: 5px;
  font-size: 20px;
  transform: translate(-50%, -35%);
  width: 70%;
  text-align: center;
  border-radius: 50px;
`;

export const StyledImage = styled.img`
  height: 350px;
  width: 400px;
`;

export const StyledSpan = styled.span`
  text-decoration: underline;
`;

export const StyledDiv = styled.div`
  zindex: -1;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
`;

export default function WelcomeMessage() {
  return (
    <>
      <Heading />
      <StyledDiv>
        <div>
          <StyledImage
            src="/pictures/succulente.jpeg"
            alt="picture of a succulent"
          />
        </div>
        <Welcome>
          YOGA TAKES YOU INTO THE PRESENT MOMENT. THE{" "}
          <StyledSpan>ONLY PLACE</StyledSpan> WHERE LIFE EXISTS.
        </Welcome>
      </StyledDiv>
    </>
  );
}
