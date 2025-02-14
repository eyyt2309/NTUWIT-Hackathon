import ProjectHUD from "../components/ProjectHUD";
import RecentProjects from "../components/RecentProjects";
import "../css/Dashboard.css";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";

function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    setUserId(sessionStorage.getItem("userId"));
  }, []);
  console.log(userId);
  return (
    <>
      <Sidebar />
      <Searchbar />

      <div className="dashboard_container">
        <ProjectHUD />
      </div>
    </>
  );
}

export default Dashboard;
