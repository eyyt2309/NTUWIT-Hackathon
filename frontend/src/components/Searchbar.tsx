import { FaSearch } from "react-icons/fa";
import "../css/SearchBar.css";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const location = useLocation(); // Get current URL path

  const pageDetails: Record<string, { title: string; subtitle: string }> = {
    "/dashboard": { title: "Dashboard", subtitle: "Overview of your account" },
    "/projects": {
      title: "Projects For You!",
      subtitle: "Start Working on Projects Now",
    },
    "/community-upload": {
      title: "Community Upload",
      subtitle: "Upload your own projects",
    },
    "/profile": { title: "Profile", subtitle: "View and edit your profile" },
    "/settings": { title: "Settings", subtitle: "Customize your experience" },
  };

  const { title, subtitle } = pageDetails[location.pathname] || {
    title: "Welcome",
    subtitle: "Explore our platform",
  };

  return (
    <div className="heading-container">
      <div className="heading-title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {/* <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="profile">
        <span className="status-indicator"></span>
        <img src="/profile.jpg" alt="User" className="profile-pic" />
        <span className="dropdown-icon">▼</span>
      </div> */}
    </div>
  );
}

export default SearchBar;
