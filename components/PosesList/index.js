import styled from "styled-components";
import Link from "next/link";
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
  color: #dbf3e1;
  font-weight: bold;
  font-style: inherit;
  letter-spacing: 1px;
  margin-top: 40px;
`;

export const SubHeading = styled.h3`
  padding-top: 20px;
`;

export default function PosesList() {
  return (
    <main>
      <PosesHeading>ALL POSES</PosesHeading>
      <PoseList>
        {poses.map(({ id, english_name, sanskrit_name, url_png }) => (
          <Link
            href={`/poses/${id}`}
            key={id}
            style={{ textDecoration: "none", color: "#59311f" }}
          >
            <PoseContainer>
              <SubHeading>
                {sanskrit_name}
                <br />({english_name})
              </SubHeading>
              <PoseImage
                src={url_png}
                alt={english_name}
                height={200}
                width={200}
              />
            </PoseContainer>
          </Link>
        ))}
      </PoseList>
    </main>
  );
}
