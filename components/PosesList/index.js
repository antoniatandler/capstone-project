import Heading from "../Heading";
import { getAllPoses } from "@/public/lib/poses";

export default function PosesList() {
  const poses = getAllPoses();
  console.log("all poses:", poses);

  return (
    <main>
      <Heading />
      <h2>ALL POSES</h2>
      <li className="poses">
        {poses.map(({ id, english_name, sanskrit_name, url_png }) => (
          <li key={id}>
            <h3>
              {english_name}, {sanskrit_name}
            </h3>
            <img src={url_png} alt={english_name} />
          </li>
        ))}
      </li>
    </main>
  );
}
