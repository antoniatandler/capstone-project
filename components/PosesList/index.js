import Heading from "../Heading";
import { getAllPoses } from "@/public/lib/poses";
import styled from "styled-components";

export const PoseList = styled.li`
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
  heigth: 200px;
  width: 200px;
`;

export const Pose = styled.li`
  list-style: none;
  align-content: center;
  text-align: center;
  font-size: 20px;
`;

export default function PosesList() {
  const poses = getAllPoses();

  return (
    <main>
      <Heading />
      <h2>ALL POSES</h2>
      <Pose>
        {poses.map(({ id, english_name, sanskrit_name, url_png }) => (
          <PoseList key={id}>
            <h3>
              {english_name}, {sanskrit_name}
            </h3>
            <PoseImage
              src={url_png}
              alt={english_name}
              height={200}
              width={200}
            />
          </PoseList>
        ))}
      </Pose>
    </main>
  );
}
