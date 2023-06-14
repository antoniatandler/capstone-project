import styled from "styled-components";
import { useState } from "react";

export const HeartIcon = styled.button`
  position: absolute;
  right: 30px;
  top: -15px;
  color: #dbf3e1;
  background-color: transparent;
  border: 0;
  font-size: 30px;
  margin: 0;
  padding: 0;
  cursor: crosshair;
`;

export default function FavoriteHeart() {
  const [FavoritePose, setFavoritePose] = useState({
    isClicked: false,
  });

  function handleButtonClick() {
    setFavoritePose({
      ...FavoritePose,
      isClicked: !FavoritePose.isClicked,
    });
  }

  return (
    <>
      <HeartIcon onClick={handleButtonClick}>
        {FavoritePose.isClicked ? "♥" : "♡"}
      </HeartIcon>
    </>
  );
}
