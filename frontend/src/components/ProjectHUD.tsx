import "../css/ProjectHUD.css";

function ProjectHUD() {
  return (
    <div className="projecthud-container">
      <div className="projectsdone-average-container">
        <div className="projectsdone">
          <p className="title-projectsdone">12</p>
          <p className="subscript">Projects Done</p>
        </div>
        <div className="projectaverage">
          <p className="percentage-number">%80</p>
          <p className="average-text">Overall average</p>
        </div>
      </div>
      <div className="projectsinfo-container">
        <ul className="projectsinfo-list">
          <li className="list-item">
            <p className="big-script">12</p>
            <p className="small-script">No of Projects</p>
          </li>
          <li className="list-item">
            <p className="big-script">9</p>
            <p className="small-script">Passed</p>
          </li>
          <li className="list-item">
            <p className="big-script">2</p>
            <p className="small-script">Incomplete</p>
          </li>
          <li className="list-item">
            <p className="big-script">1</p>
            <p className="small-script">Processing</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectHUD;
