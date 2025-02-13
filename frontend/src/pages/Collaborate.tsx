function Collaborate() {
  const groups = [
    {
      title: "SC3000 SCSB",
      description: "Learning the Foundations of Machine Learning"
    }
    {
      title: "SC3010 SCSB",
      description: "Importance of Security"
    }
  ]
  return <div className="project-team">
    <h1>Groups</h1>
    <button className="joinGroup">Join Group</button>
    <div className="projects-grid">
      {groups.map((group, index) => (
        <div key={index} className={`project-card ${project.status}`}>
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
          <span className={`status ${project.status}`}>{project.status}</span>
        </div>
      ))}
    </div>

    <div className="team-container">

    </div>
  </div>;
}
export default Collaborate;
