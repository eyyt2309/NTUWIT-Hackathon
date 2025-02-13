import { useState } from "react";
import "../css/Profile.css";

function Profile() {
  const [skills, setSkills] = useState([
    { name: "Java", level: "Beginner" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
    { name: "Python", level: "Beginner" },
    { name: "C", level: "Advanced" },
  ]);

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const handleSkillChange = (index, newLevel) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, level: newLevel } : skill
    );
    setSkills(updatedSkills);
  };

  return (
    <div className="profile-page">
      <div className="profile-content">
        <div className="skill-section">
          <h2>Set Skill Levels:</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <span>{skill.name}</span>
                <select
                  value={skill.level}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </li>
            ))}
          </ul>
        </div>
        <div className="upload-section">
          <h2>Upload any certifications to be verified</h2>
          <input type="file" accept=".pdf" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
