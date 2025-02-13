import ProjectHUD from "../components/ProjectHUD";
import RecentProjects from "../components/RecentProjects";
import "../css/Dashboard.css";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import { useEffect, useState } from "react";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <Searchbar />
      <div className="dashboard_container">
        <RecentProjects />
        <ProjectHUD />
      </div>
    </>
  );
}

export default Dashboard;
