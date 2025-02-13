import { Link } from "react-router-dom";
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
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

      {/* Sidebar Navigation Links */}
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            <i className="lni lni-dashboard-square-1"></i>
            <span>DashBoard</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/projects" className="sidebar-link">
            <i className="lni lni-user-4"></i>
            <span>Projects</span>
          </Link>
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

        <Link to="/login" className="sidebar-link">
          <i className="lni lni-exit"></i>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
