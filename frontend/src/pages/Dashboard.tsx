import ProjectHUD from "../components/ProjectHUD";
import RecentProjects from "../components/RecentProjects";
import "../css/Dashboard.css";
import { useEffect, useState } from "react";

function Dashboard() {
  return (
    <div className="dashboard_container">
      <RecentProjects />
      <ProjectHUD />
    </div>
  );
}

export default Dashboard;
