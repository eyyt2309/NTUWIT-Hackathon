import RecentProjects from "../components/RecentProjects";
import "../css/Dashboard.css";
import { useEffect, useState } from "react";

function Dashboard() {
  return (
    <div className="dashboard_container">
      <div className="recent+leader-container">
        <RecentProjects />
        <div className="leaderboard-container"></div>
      </div>
      <div className="dailychallenge"></div>
      <div className="project-container"></div>
    </div>
  );
}

export default Dashboard;
