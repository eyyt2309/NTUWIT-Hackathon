import "../css/RecentProjects.css";
import image1 from "../assets/istockphoto-1047259374-612x612.jpg";
import image2 from "../assets/istockphoto-1220974008-612x612.jpg";
import { useEffect, useState } from "react";

function RecentProjects() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [languages, setLanguages] = useState("");
  const [percentage, setPercentage] = useState("");
  const [projectid, setProjectid] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.example.com/projects"); // Replace with actual API
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="recentprojects-container">
      <div className="recentprojects-header">
        <h1 className="title-header">Recent Projects</h1>
      </div>
      <div className="button-container">
        <button className="recentprojects-button">
          <img
            className="image-button"
            src={image1}
            alt="Stock picture of course"
          ></img>
          <h1 className="project-title">{title}</h1>
          <h1 className="project-subscript">
            {languages} <p className="percentage-point">{percentage}%</p>
          </h1>
        </button>
        <button className="recentprojects-button">
          <img
            className="image-button"
            src={image2}
            alt="Stock picture of course"
          ></img>
          <h1 className="project-title">{title}</h1>
          <h1 className="project-subscript">
            {languages} <p className="percentage-point">{percentage}%</p>
          </h1>
        </button>
      </div>
    </div>
  );
}
export default RecentProjects;
