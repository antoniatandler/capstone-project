import Heading from "@/components/Heading";
import PosesDetails from "@/components/PosesDetails/index.js";
import { useRouter } from "next/router";

export default function DetailsOfYogaPoses() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Heading />
      <PosesDetails id={id} />
    </>
  );
}
