import React from "react";
import "./ProjectPage.css";

const projects = [
    { title: "SQL Database Project", tech: "MySQL", status: "Uncompleted" },
    { title: "Object-Oriented Programming", tech: "Java", status: "Uncompleted" },
    { title: "Building 2FA", tech: "Python, Flask, Twilio API", status: "Uncompleted" },
    { title: "Filtering and Censoring Toxic Words", tech: "Python, NLP, AI", status: "Uncompleted" },
    { title: "Privacy-Focused Browser Extension", tech: "JavaScript, Manifest V3", status: "Uncompleted" },
    { title: "Introduction to C", tech: "C Programming", status: "Uncompleted" },
];

const ProjectPage: React.FC = () => {
    return (
        <div className="project-page">
            <h1>Projects For You!</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className={`project-card ${project.status}`}>
                        <h3>{project.title}</h3>
                        <p>{project.tech}</p>
                        <span className={`status ${project.status}`}>{project.status.replace("-", " ").toUpperCase()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;