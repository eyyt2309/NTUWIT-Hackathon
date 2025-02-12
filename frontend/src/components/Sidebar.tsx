import { Link } from "react-router-dom";
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="d-flex">
        <button className="toggle-btn" type="button">
          <img
            src="/src/assets/logo_white.png"
            alt="whiteLogo"
            className="menu-icon"
          />
        </button>
        <div className="sidebar-logo">
          <Link to="/">! Hard Coders</Link>
        </div>
      </div>

      {/* Sidebar Navigation Links */}
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <i className="lni lni-dashboard-square-1"></i>
            <span>DashBoard</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/courses" className="sidebar-link">
            <i className="lni lni-pen-to-square"></i>
            <span>Courses</span>
          </Link>
        </li>

        {/* Projects Dropdown */}
        <li className="sidebar-item">
          <a
            href="#"
            className="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            data-bs-target="#projectsDropdown"
            aria-expanded="false"
            aria-controls="projectsDropdown"
          >
            <i className="lni lni-books-2"></i>
            <span>Projects</span>
          </a>
          <ul
            id="projectsDropdown"
            className="sidebar-dropdown list-unstyled collapse"
            data-bs-parent="#sidebar"
          >
            <li className="sidebar-item">
              <Link to="/projects/base" className="sidebar-link">
                Base
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/projects/community" className="sidebar-link">
                Community
              </Link>
            </li>
          </ul>
        </li>

        <li className="sidebar-item">
          <Link to="/profile" className="sidebar-link">
            <i className="lni lni-user-4"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/community-upload" className="sidebar-link">
            <i className="lni lni-upload-1"></i>
            <span>Community Upload</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/collaborate" className="sidebar-link">
            <i className="lni lni-user-multiple-4"></i>
            <span>Collaborate</span>
          </Link>
        </li>
      </ul>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <Link to="/settings" className="sidebar-link">
          <i className="lni lni-gear-1"></i>
          <span>Settings</span>
        </Link>
      </div>
      <div className="sidebar-footer">
        <Link to="/" className="sidebar-link">
          <i className="lni lni-exit"></i>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
