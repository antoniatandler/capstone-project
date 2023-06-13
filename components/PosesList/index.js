import styled from "styled-components";
import Link from "next/link";
import { poses } from "@/public/lib/poses";
import { useState } from "react";

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #59311f;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-right: 15px;
`;

export const StyledInput = styled.input`
  padding-left: 5px;
`;

export default function PosesList() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  const filteredPoses = poses.filter(
    ({ english_name, sanskrit_name }) =>
      english_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sanskrit_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <PosesHeading>ALL POSES</PosesHeading>
      <SearchBarContainer>
        <StyledInput
          type="text"
          placeholder="search for poses ..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </SearchBarContainer>
      <PoseList>
        {filteredPoses.map(({ id, english_name, sanskrit_name, url_png }) => (
          <StyledLink href={`/poses/${id}`} key={id}>
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
          </StyledLink>
        ))}
      </PoseList>
    </main>
  );
}
