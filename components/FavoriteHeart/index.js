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
    <HeartIcon isFavorite={isFavorite} onClick={toggleFavorite}>
      {isFavorite ? "♥" : "♡"}
    </HeartIcon>
  );
}
