import "./css/standard.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import CommunityUpload from "./pages/CommunityUpload";
import Collaborate from "./pages/Collaborate";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CodeEditingPage from "./pages/CodeEditingPage";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex">
          <div className="container-fluid p-4">
            <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/community-upload" element={<CommunityUpload />} />
              <Route path="/collaborate" element={<Collaborate />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/code" element={<CodeEditingPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
