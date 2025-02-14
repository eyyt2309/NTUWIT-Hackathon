import "../css/CodeEditingPage.css";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import CodeEditor from "../components/CodeEditor";
import AISuggestion from "../components/AISuggestion";
import Question from "../components/Question";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ProjectData {
  LANG_NAME: string;
  Project_Description: string;
  further_details: string;
  model_answer: string;
  problem_statement: string;
  projectId: number;
  sample_input: string | null;
  sample_output: string | null;
  title: string;
  userId: number;
}

function CodeEditingPage() {
  const [error, setError] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<ProjectData | null>(null); // Store project data

  const location = useLocation();
  const projectId = location.state?.projectId;
  console.log("Received projectId:", projectId);

  useEffect(() => {
    if (projectId) {
      fetchProjectInfo(projectId);
    }
  }, [projectId]); // Fetch project info when projectId is available

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
      setProjectData(result);
    } catch (error) {
      console.error(error);
      setError("Error: Failed to fetch project info");
    }
  };

  return (
    <>
      <Sidebar />
      <Searchbar />

      <CodeEditor projectData={projectData} />
      <Question projectData={projectData} />
      <AISuggestion />
    </>
  );
}
export default CodeEditingPage;
