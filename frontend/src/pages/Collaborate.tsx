function Collaborate() {
  const groups = [
    {
      title: "SC3000 SCSB",
      description: "Learning the Foundations of Machine Learning",
      status: "ongoing",
    },
    {
      title: "SC3010 SCSB",
      description: "Importance of Security",
      status: "ongoing",
    },
  ];
  return (
    <div className="collaborate-page">
      <div className="group-grid">
        {groups.map((group, index) => (
          <div key={index} className={`group-card ${group.status}`}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <span className={`status ${group.status}`}>{group.status}</span>
          </div>
        ))}
      </div>
      <h1>Groups</h1>
      <button className="joinGroup">Join Group</button>

      <div className="team-container"></div>
    </div>
  );
}
export default Collaborate;
