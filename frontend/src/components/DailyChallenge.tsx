import "../css/DailyChallenge.css";
import image1 from "../assets/calendar-symbol.svg";

function DailyChallenge() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-GB", options);

  return (
    <div className="dailychallenge-container">
      <h1 className="dailychallenge-header">Daily Challenge</h1>
      <img
        className="calendar-image"
        src={image1}
        alt="picture of calendar"
      ></img>
      <h1 className="date">{formattedDate}</h1>
      <button className="dailychallenge-button">Start Now</button>
    </div>
  );
}
export default DailyChallenge;
