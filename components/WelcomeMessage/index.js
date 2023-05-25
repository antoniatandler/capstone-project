import Heading from "../Heading";
import styled from "styled-components";

export const Welcome = styled.text`
  position: absolute;
  top: 50%;
  left: 50%;
  padding-top: 15px;
  border: dotted;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #dbf3e1;
  color: #dbb290;
  border-radius: 100%;
  letter-spacing: 5px;
  font-size: 32px;
  transform: translate(-50%, -50%);
  width: 60%;
  text-align: center;
  align-items: center;
  border-radius: 50px;
`;

export default function WelcomeMessage() {
  return (
    <>
      <Heading />
      <div>
        <Welcome>
          <p>YOGA TAKES YOU INTO THE PRESENT MOMENT.</p>
          <p>
            THE <span id="onlyplace">ONLY PLACE</span> WHERE LIFE EXISTS.
          </p>
        </Welcome>
      </div>
    </>
  );
}
