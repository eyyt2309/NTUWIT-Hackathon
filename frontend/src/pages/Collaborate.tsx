import "../css/Collaborate.css";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";

function Collaborate() {
  const groups = [
    {
      title: "SC3000 TG20",
      status: "Current",
    },
    {
      title: "SC3010 TG01",
      status: "Past",
    },
  ];

  return (
    <>
      <Sidebar />
      <Searchbar />
      <div className="collaborate-page">
        <div className="header-container">
          <header>Groups</header>
          <button className="join-group-btn">Join Group</button>
        </div>
        <div className="groups-grid">
          {groups.map((group, index) => (
            <div key={index} className={`group-card ${group.status}`}>
              <h3>{group.title}</h3>
              <span className={`status ${group.status}`}>{group.status}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Collaborate;
