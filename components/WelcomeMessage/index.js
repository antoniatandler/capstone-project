import Heading from "../Heading";

export default function WelcomeMessage() {
  return (
    <>
      <Heading />
      <div className="welcome">
        <p>YOGA TAKES YOU INTO THE PRESENT MOMENT.</p>
        <p>
          THE <span id="onlyplace">ONLY PLACE</span> WHERE LIFE EXISTS.
        </p>
      </div>
    </>
  );
}
