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
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [aiSuggestion, setAiSuggestion] = useState<string>(""); // ✅ Stores AI suggestion
  const [code, setCode] = useState<string>(""); // ✅ Stores the user's code input

  const location = useLocation();
  const projectId = location.state?.projectId;
  console.log("Received projectId:", projectId);

  useEffect(() => {
    if (projectId) {
      fetchProjectInfo(projectId);
    }

    // ✅ Poll AI suggestions every 30 seconds
    const interval = setInterval(() => {
      if (code.trim()) {
        fetchAISuggestions();
      }
    }, 30000); // Runs every 30 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [projectId, code]); // Runs when projectId or code changes

  const fetchProjectInfo = async (projectId: string) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/projectinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId }),
      });

      const result = await response.json();
      console.log("Project info:", result);
      setProjectData(result);
    } catch (error) {
      console.error(error);
      setError("Error: Failed to fetch project info");
    }
  };

  const fetchAISuggestions = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/ai-suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const result = await response.json();
      console.log("AI Suggestion:", result);
      setAiSuggestion(result.suggestion);
    } catch (error) {
      console.error(error);
      setError("Error fetching AI suggestion");
    }
  };

  return (
    <>
      <Sidebar />
      <Searchbar />
      
      {/* ✅ Passes `onFetchAISuggestions` to `CodeEditor` for manual fetch */}
      <CodeEditor projectData={projectData} onCodeChange={setCode} onFetchAISuggestions={fetchAISuggestions} />

      {/* ✅ Button for manual AI fetch */}
      <button onClick={fetchAISuggestions} className="analyze-btn">
        Get AI Suggestion
      </button>

      {/* ✅ Displays AI suggestions */}
      <AISuggestion suggestion={aiSuggestion} />

      <Question projectData={projectData} />
    </>
  );
}

export default CodeEditingPage;
