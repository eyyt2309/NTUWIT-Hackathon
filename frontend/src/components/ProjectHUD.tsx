import "../css/ProjectHUD.css";
import RecentProjects from "./RecentProjects";

function ProjectHUD() {
  return (
    <>
      <div className="projecthud-container">
        <div className="a">
          <RecentProjects />
        </div>
        <div className="b flexrow">
          <div className=" flexcol">
            <div className="projectsdone">
              <h1 className="title-projectsdone">12</h1>
              <p className="subscript">Projects Completed</p>
            </div>
            <div className="projectaverage">
              <p className="percentage-number">80%</p>
              <p className="average-text">Overall Average</p>
            </div>
          </div>
          <div className="projectsinfo-container">
            <ul className="projectsinfo-list">
              <li className="list-item">
                <p className="big-script">12</p>
                <p className="small-script">Projects Attempted</p>
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
      </div>
    </>
  );
}

export default ProjectHUD;
