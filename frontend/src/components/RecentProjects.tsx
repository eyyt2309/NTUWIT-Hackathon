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
  const [projectId, setProjectid] = useState(null);
  const [userId, setUserId] = useState<string | null>(null);
  const fetchProjects = async (userId: string) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/getRecentProjects", {
        method: "POST", // Using POST to send body as JSON
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
        }),
      });

      console.log("Response status:", response.status);
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        console.log("Fetch projects successful");
        setProjectid(result.projectid1);
        setPercentage(result.percentage1);

        // Fetch project info using the new projectId
        if (result.projectid1) {
          fetchProjectInfo(result.projectid1);
        }
      }
    } catch (error) {
      console.error(error);
      setError("Error: Failed to fetch projects");
    }
  };

  // Fetch project info
  const fetchProjectInfo = async (projectId: string) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/projectinfo", {
        method: "POST", // Again, using POST to send JSON data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId: projectId,
        }),
      });

      const result = await response.json();
      console.log("Project info:", result);
    } catch (error) {
      console.error(error);
      setError("Error: Failed to fetch project info");
    }
  };

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("userId");
    setUserId(storedUserId);

<<<<<<< HEAD
    if (storedUserId) {
      fetchProjects(storedUserId);
    }
  }, []);
=======
          const response = await fetch("http://127.0.0.1:5000/projectinfo", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              projectid: projectid1,
            }),
          });
        }
      } catch (error) {
        setError("Error: Failed to fetch projects");
      }
    };
  });
>>>>>>> 99385ac22a5f845dde2f590153146ec86a434cdd
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
          <h1 className="project-title">{}</h1>
          <h1 className="project-subscript">
            {} <p className="percentage-point">{}%</p>
          </h1>
        </button>
        <button className="recentprojects-button">
          <img
            className="image-button"
            src={image2}
            alt="Stock picture of course"
          ></img>
          <h1 className="project-title">{}</h1>
          <h1 className="project-subscript">
            {} <p className="percentage-point">{}%</p>
          </h1>
        </button>
      </div>
    </div>
  );
}
export default RecentProjects;
