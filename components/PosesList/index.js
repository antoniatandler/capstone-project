import Heading from "../Heading";
import { getAllPoses } from "@/public/lib/poses";
import styled from "styled-components";

export const PoseContainer = styled.li`
  list-style: none;
  text-align: center;
  background-color: #dbb290;
  border-radius: 15px;
  padding-bottom: 20px;
  height: fit-content;
  box-shadow: 17px 17px 23px -8px rgba(89, 49, 31, 0.52);
`;

export const PoseImage = styled.img`
  margin: auto;
  padding: auto;
`;

export const PoseList = styled.ul`
  margin-left: -40px;
  align-content: center;
  text-align: center;
  font-size: 20px;
`;

export const PosesHeading = styled.h2`
  text-align: center;
  margin: auto;
  text-decoration: underline;
  width: 100%;
  left: 0;
  right: 0;
  margin-bottom: -10px;
  color: #dbf3e1;
  font-weight: bold;
  font-style: inherit;
  letter-spacing: 1px;
`;

export const PoseHeading = styled.h3`
  padding-top: 20px;
`;

export default function PosesList() {
  const poses = getAllPoses();

  return (
    <main>
      <Heading />
      <PosesHeading>ALL POSES</PosesHeading>
      <PoseList>
        {poses.map(({ id, english_name, sanskrit_name, url_png }) => (
          <PoseContainer key={id}>
            <PoseHeading>
              {sanskrit_name} ({english_name})
            </PoseHeading>
            <PoseImage
              src={url_png}
              alt={english_name}
              height={200}
              width={200}
            />
          </PoseContainer>
        ))}
      </PoseList>
    </main>
  );
}
