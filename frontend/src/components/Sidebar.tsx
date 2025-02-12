import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "lineicons/dist/lineicons.css";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="d-flex">
        <button className="toggle-btn" type="button">
          <img
            src="src/assets/logo_white.png"
            alt="whiteLogo"
            className="menu-icon"
          />
        </button>
        <div className="sidebar-logo">
          <a href="#">! Hard Coders </a>
        </div>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a href="dashboard.html" className="sidebar-link">
            <i className="lni lni-dashboard-square-1"></i>
            <span>DashBoard</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="courses.html" className="sidebar-link">
            <i className="lni lni-pen-to-square"></i>
            <span>Courses</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a
            href="#"
            className="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            data-bs-target="#courses1"
            aria-expanded="false"
            aria-controls="courses1"
          >
            <i className="lni lni-books-2"></i>
            <span>Projects</span>
          </a>
          <ul
            id="courses1"
            className="sidebar-dropdown list-unstyled collapse"
            data-bs-parent="#sidebar"
          >
            <li className="sidebar-item">
              <a href="projects.html" className="sidebar-link">
                Base
              </a>
            </li>
            <li className="sidebar-item">
              <a href="projects.html" className="sidebar-link">
                Community
              </a>
            </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a href="profile.html" className="sidebar-link">
            <i className="lni lni-user-4"></i>
            <span>Profile</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="community-upload.html" className="sidebar-link">
            <i className="lni lni-upload-1"></i>
            <span>Community Upload</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="collaborate.html" className="sidebar-link">
            <i className="lni lni-user-multiple-4"></i>
            <span>Collaborate</span>
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <a href="settings.html" className="sidebar-link">
          <i className="lni lni-gear-1"></i>
          <span>Settings</span>
        </a>
      </div>
      <div className="sidebar-footer">
        <a href="index.html" className="sidebar-link">
          <i className="lni lni-exit"></i> <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}
export default Sidebar;
