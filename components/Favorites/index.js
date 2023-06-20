import React from "react";
import useLocalStorageState from "use-local-storage-state";
import { poses } from "@/public/lib/poses";
import {
  PosesHeading,
  PoseContainer,
  PoseImage,
  SubHeading,
  PoseList,
} from "../PosesList";
import FavoriteHeart from "../FavoriteHeart";

export default function FavoritePosesList() {
  const [favorites, setFavorites] = useLocalStorageState("favoritePoses", {
    defaultValue: [],
  });
  const favoritePoses = poses.filter((pose) =>
    favorites.includes(pose.english_name)
  );
  function toggleFavorite(favorites, english_name) {
    if (favorites.includes(english_name)) {
      setFavorites(favorites.filter((favorite) => favorite !== english_name));
    } else {
      setFavorites([...favorites, english_name]);
    }
  }

  return (
    <>
      <main>
        <PosesHeading>YOUR FAVORITE POSES</PosesHeading>
        <PoseList>
          {favoritePoses.map(({ id, english_name, sanskrit_name, url_png }) => (
            <PoseContainer key={id}>
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
              <FavoriteHeart
                key={english_name}
                isFavorite={favorites && favorites.includes(english_name)}
                toggleFavorite={() => toggleFavorite(favorites, english_name)}
              />
            </PoseContainer>
          ))}
        </PoseList>
      </main>
    </>
  );
}
