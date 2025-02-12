import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Courses from "./pages/Courses";
import ProjectsBase from "./pages/ProjectsBase";
import ProjectsCommunity from "./pages/ProjectsCommunity";
import Profile from "./pages/Profile";
import CommunityUpload from "./pages/CommunityUpload";
import Collaborate from "./pages/Collaborate";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex">
          <Sidebar />
          <div className="container-fluid p-4">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/projects/base" element={<ProjectsBase />} />
              <Route
                path="/projects/community"
                element={<ProjectsCommunity />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/community-upload" element={<CommunityUpload />} />
              <Route path="/collaborate" element={<Collaborate />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
