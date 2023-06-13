import styled from "styled-components";
import Image from "next/image";

export const WelcomeParagraph = styled.p`
  position: relative;
  top: 40%;
  left: 50%;
  padding: 15px;
  border: dotted;
  background-color: #dbf3e1;
  color: #dbb290;
  letter-spacing: 5px;
  font-size: 20px;
  transform: translate(-50%, -40%);
  width: 150%;
  text-align: center;
  border-radius: 50px;
`;

export const StyledImage = styled(Image)`
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
`;

export const StyledSpan = styled.span`
  text-decoration: underline;
  letter-spacing: 10px;
`;

export const StyledDiv = styled.div`
  zindex: -1;
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  // width: 95%;
  height: 50%;
`;

export default function WelcomeMessage() {
  return (
    <>
      <StyledDiv>
        <StyledImage
          src="/pictures/succulente.jpeg"
          alt="picture of a succulent"
          width={400}
          height={400}
        />
        <WelcomeParagraph>
          YOGA TAKES YOU INTO THE PRESENT MOMENT. THE
          <br />
          <StyledSpan>ONLY PLACE</StyledSpan>
          <br />
          WHERE LIFE EXISTS.
        </WelcomeParagraph>
      </StyledDiv>
    </>
  );
}
