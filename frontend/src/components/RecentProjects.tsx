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
  const [projectid1, setProjectid] = useState(null);
  const [userid, setUserid] = useState(1);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/getRecentProjects",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userid: userid,
            }),
          }
        );
        console.log("Response status:", response.status);
        const result = await response.json();
        console.log(response);
        if (response.ok) {
          console.log("Fetch projects successful");
          setProjectid(result.projectid1);

          const response = await fetch("http://127.0.0.1:5000/projectinfo", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              projectid: projectid,
            }),
          });
        }
      } catch (error) {
        setError("Error: Failed to fetch projects");
      }
    };
  });
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
            {languages} <p className="percentage-point">{}%</p>
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
