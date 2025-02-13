import "../css/RecentProjects.css";
import image1 from "../assets/istockphoto-1047259374-612x612.jpg";
import image2 from "../assets/istockphoto-1220974008-612x612.jpg";

function RecentProjects() {
  return (
    <div className="recentprojects-container">
      <div className="recentprojects-header">
        <h1 className="title-header">Recent Projects</h1>
      </div>
      <div className="button-container">
        <button className="recentprojects-button">
          <img
            className="image-button"
            src={image1}
            alt="Stock picture of course"
          ></img>
          <h1 className="project-title">Web Dev Project</h1>
          <h1 className="project-subscript">HTML CSS</h1>
        </button>
        <button className="recentprojects-button">
          <img
            className="image-button"
            src={image2}
            alt="Stock picture of course"
          ></img>
          <h1 className="project-title">Database Project</h1>
          <h1 className="project-subscript">SQL Java</h1>
        </button>
      </div>
    </div>
  );
}
export default RecentProjects;
