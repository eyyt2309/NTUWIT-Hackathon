import { useEffect } from "react";
import "../css/Projects.css";
import "../css/standard.css";


function Projects() {
  useEffect(() => {
    console.log("ProjectsBase mounted!"); // Debugging Log
  }, []);

  const projects = [
    {
      title: "Building 2FA",
      tech: "Python, Flask, Twilio API",
      status: "Uncompleted",
    },
    {
      title: "Filtering and Censoring Toxic Words",
      tech: "Python, NLP, AI",
      status: "Uncompleted",
    },
    {
      title: "Privacy-Focused Browser Extension",
      tech: "JavaScript, Manifest V3",
      status: "Upcoming",
    },
    { title: "Introduction to C", tech: "C Programming", status: "Upcoming" },
    { title: "SQL Database Project", tech: "MySQL", status: "Upcoming" },
    { title: "Object-Oriented Programming", tech: "Java", status: "Upcoming" },
  ];

  return (
    <div className="project-page">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.status}`}>
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
            <span className={`status ${project.status}`}>{project.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
