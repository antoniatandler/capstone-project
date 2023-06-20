import FavoritePosesList from "@/components/Favorites";
import Heading from "@/components/Heading";
import { BackButton } from "@/components/PosesDetails";
import Link from "next/link";

export default function Bookmarks() {
  return (
    <>
      <Heading />
      <FavoritePosesList />
      <Link href="../poses">
        <BackButton>back to all ◀︎</BackButton>
      </Link>
    </>
  );
}
