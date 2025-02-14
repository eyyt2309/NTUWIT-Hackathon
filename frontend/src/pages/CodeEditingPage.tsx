import "../css/CodeEditingPage.css";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import CodeEditor from "../components/CodeEditor";
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
  const [code, setCode] = useState<string>(""); // Store latest code snippet
  const [aiSuggestion, setAISuggestion] = useState<string | null>(null); // Store AI response

  const location = useLocation();
  const projectId = location.state?.projectId;
  console.log("Received projectId:", projectId);

  useEffect(() => {
    if (projectId) {
      fetchProjectInfo(projectId);
    }
  }, [projectId]);

  const fetchProjectInfo = async (projectId: string) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/projectinfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: projectId }),
      });

      const result = await response.json();
      console.log("Project info:", result);
      setProjectData(result);
    } catch (error) {
      console.error(error);
      setError("Error: Failed to fetch project info");
    }
  };

  // Poll AI API every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (code.trim() !== "") {
        fetchAISuggestions(code);
      }
    }, 30000); // 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [code]); // Runs whenever `code` updates

  // Fetch AI suggestions from Flask API
  const fetchAISuggestions = async (codeSnippet: string) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/ai-suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code_snippet: codeSnippet }),
      });

      const result = await response.json();
      console.log("AI Suggestion:", result.suggestion);
      setAISuggestion(result.suggestion);
    } catch (error) {
      console.error("AI API Error:", error);
      setAISuggestion("Error fetching AI suggestions.");
    }
  };

  return (
    <>
      <Sidebar />
      <Searchbar />

      <div className="container">
        <Question projectData={projectData} />
        <CodeEditor projectData={projectData} onCodeChange={setCode} />

        <div className="AIcontainer">
          <div className="aiHeader">
            <h1 className="question-header">Suggestion Box</h1>
            <p>Let our AI guide you! </p>
          </div>
          <div className="ai-response-box">
            {aiSuggestion ? (
              <p>{aiSuggestion}</p>
            ) : (
              <p>No AI suggestions yet...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeEditingPage;
