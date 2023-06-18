// import styled from "styled-components";
// import { useState, useEffect } from "react";
// import useLocalStorageState from "use-local-storage-state";

// export const HeartIcon = styled.button`
//   position: absolute;
//   right: 30px;
//   top: -15px;
//   color: #dbf3e1;
//   background-color: transparent;
//   border: 0;
//   font-size: 30px;
//   margin: 0;
//   padding: 0;
//   cursor: crosshair;
// `;

// export default function FavoriteHeart() {
//   const [favoritePose, setFavoritePose] = useState({
//     isClicked: false,
//   });

//   function handleButtonClick() {
//     setFavoritePose({
//       ...favoritePose,
//       isClicked: !favoritePose.isClicked,
//     });
//   }

//   return (
//     <>
//       <HeartIcon onClick={handleButtonClick}>
//         {favoritePose.isClicked ? "♥" : "♡"}
//       </HeartIcon>
//     </>
//   );
// }

import styled from "styled-components";

const HeartIcon = styled.button`
  position: absolute;
  right: 30px;
  top: -15px;
  color: ${(props) => (props.isFavorite ? "#2b180f" : "#dbf3e1")};
  background-color: transparent;
  border: 0;
  font-size: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export default function FavoriteHeart({ isFavorite, toggleFavorite }) {
  return (
    <HeartIcon onClick={toggleFavorite}>{isFavorite ? "♥" : "♡"}</HeartIcon>
  );
}
