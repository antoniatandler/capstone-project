import Heading from "../Heading";
import Link from "next/link";
import styled from "styled-components";
import { poses } from "@/public/lib/poses";

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

export const SubHeading = styled.h3`
  padding-top: 20px;
`;

export const PoseDescription = styled.p`
  margin: 30px;
`;

export const PoseBenefits = styled.p`
  margin: 30px;
`;

export const BackButton = styled.button`
  width: 30%;
  position: relative;
  margin-left: 35%;
`;

export const DetailsHeading = styled.h4`
  text-decoration: underline;
`;

export default function PosesDetails({ id }) {
  function getPoseById(id) {
    return poses.find((pose) => pose.id == id);
  }

  const pose = getPoseById(id);

  if (!pose) {
    return "...is Loading";
  }
  return (
    <main>
      <Heading />
      <PosesHeading>POSE</PosesHeading>
      <PoseList>
        <PoseContainer key={id}>
          <SubHeading>
            {pose.sanskrit_name}
            <br />({pose.english_name})
          </SubHeading>
          <PoseImage
            src={pose.url_png}
            alt={pose.english_name}
            height={200}
            width={200}
          />
          <DetailsHeading>how to do it:</DetailsHeading>
          <PoseDescription>{pose.pose_description}</PoseDescription>
          <DetailsHeading>how it blesses you:</DetailsHeading>
          <PoseBenefits>{pose.pose_benefits}</PoseBenefits>
        </PoseContainer>
      </PoseList>
      <Link href="../poses">
        <BackButton>back to all ◀︎</BackButton>
      </Link>
    </main>
  );
}
