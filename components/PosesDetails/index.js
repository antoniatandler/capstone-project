import Link from "next/link";
import styled from "styled-components";
import { poses } from "@/public/lib/poses";
import {
  PoseContainer,
  PosesHeading,
  PoseList,
  PoseImage,
  SubHeading,
} from "../PosesList";
import FavoriteHeart from "../FavoriteHeart";
import { useState, useEffect } from "react";

export const PoseDescription = styled.p`
  margin: 15px;
  background-color: rgba(219, 243, 225, 0.5);
  border-radius: 15px;
  padding: 15px;
`;

export const PoseBenefits = styled.p`
  margin: 15px;
  background-color: rgba(219, 243, 225, 0.5);
  border-radius: 15px;
  padding: 15px;
`;

export const BackButton = styled.button`
  width: 30%;
  position: relative;
  margin-left: 35%;
  background-color: rgba(219, 243, 225);
  border: 2px bold #59311f;
  color: #59311f;
  box-shadow: 17px 17px 23px -8px rgba(89, 49, 31, 0.52);
  border-radius: 5px;
`;

export const DetailsHeading = styled.h4`
  text-decoration: underline;
`;

export default function PosesDetails({ id, _id }) {
  function getPoseById(id) {
    return poses.find((pose) => pose.id == id);
  }

  const pose = getPoseById(id);

  // const [favorites, setFavorites] = useState([]);

  // function toggleFavorite(_id) {
  //   if (favorites.includes(_id)) {
  //     setFavorites(favorites.filter((favoriteId) => favoriteId !== _id));
  //   } else {
  //     setFavorites([...favorites, _id]);
  //   }
  // }

  // useEffect(() => {
  //   // Speichern der Favoriten im localStorage
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

  // useEffect(() => {
  //   // Laden der Favoriten aus dem localStorage beim Laden der Seite
  //   localStorage.getItem("favorites");
  // }, []);

  if (!pose) {
    return "...is Loading";
  }
  return (
    <main>
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
          <FavoriteHeart
          // isFavorite={favorites.includes(_id)}
          // toggleFavorite={() => toggleFavorite(_id)}
          />
        </PoseContainer>
      </PoseList>
      <Link href="../poses">
        <BackButton>back to all ◀︎</BackButton>
      </Link>
    </main>
  );
}
