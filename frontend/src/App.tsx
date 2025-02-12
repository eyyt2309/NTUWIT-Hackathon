import "./css/standard.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
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
          <Searchbar />
          <div className="container-fluid p-4">
            <Routes>
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/projects" element={<Projects />} />
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
