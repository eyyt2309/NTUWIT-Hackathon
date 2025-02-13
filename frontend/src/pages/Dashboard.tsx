import ProjectHUD from "../components/ProjectHUD";
import RecentProjects from "../components/RecentProjects";
import "../css/Dashboard.css";
import { useEffect, useState } from "react";

function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    setUserId(sessionStorage.getItem("userId"));
  }, []); // Added missing dependency array
  console.log(userId);
  return (
    <div className="dashboard_container">
      <ProjectHUD />
      <RecentProjects />
    </div>
  );
}

export default Dashboard;
