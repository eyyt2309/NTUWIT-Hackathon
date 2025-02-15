import "../css/RecentProjects.css";
import image1 from "../assets/istockphoto-1047259374-612x612.jpg";
import image2 from "../assets/istockphoto-1220974008-612x612.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecentProjects() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [languages, setLanguages] = useState("");
  const [percentage, setPercentage] = useState("");
  const [projectId, setProjectId] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  const fetchProjects = async (userId: string) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/getRecentProjects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const result = await response.json();
      console.log("Fetch projects result:", result);

      if (result.projectId1) {
        setProjectId(result.projectId1);
        setPercentage(result.percentage1);
        fetchProjectInfo(result.projectId1);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Error: Failed to fetch projects");
    }
  };

  const fetchProjectInfo = async (projectId: string) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/projectinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch project info");
      }

      const result = await response.json();
      console.log("Project info:", result);

      setTitle(result.title);
      setLanguages(result.LANG_NAME);
    } catch (error) {
      console.error("Error fetching project info:", error);
      setError("Error: Failed to fetch project info");
    }
  };

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      fetchProjects(storedUserId);
    }
  }, []); // Empty dependency array to run only on mount
  return (
    <div className="recentprojects-container">
      <div className="recentprojects-header">
        <h1 className="title-header">Recent Projects</h1>
      </div>
      <div className="button-container">
        <button className="recentprojects-button">
          {projectId && (
            <Link to="/code" state={{ projectId }} className="code-link">
              <img
                className="image-button"
                src={image1}
                alt="Stock picture of course"
              ></img>
              <h1 className="project-title">{title}</h1>
              <h1 className="project-subscript">{languages}</h1>
              <p className="percentage-point">{percentage}%</p>
            </Link>
          )}
        </button>
        <button className="recentprojects-button">
          {projectId && (
            <Link to="/code" state={{ projectId }} className="code-link">
              <img
                className="image-button"
                src={image2}
                alt="Stock picture of course"
              ></img>
              <h1 className="project-title">{title}</h1>
              <h1 className="project-subscript">{languages}</h1>
              <p className="percentage-point">{percentage}%</p>
            </Link>
          )}
        </button>
      </div>
    </div>
  );
}
export default RecentProjects;
