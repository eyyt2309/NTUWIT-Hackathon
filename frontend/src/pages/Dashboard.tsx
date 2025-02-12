// import Sidebar from "../components/Sidebar";
import "../css/Dashboard.css";
import RecentProjects from "../components/RecentProjects";

function Dashboard() {
  return (
    <div className="dashboard_container">
      {/* add nav bar */}
      {/* <Sidebar /> */}
      <RecentProjects />
    </div>
  );
}

export default Dashboard;
