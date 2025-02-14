import "../css/CommunityUpload.css";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import { useEffect, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import "../css/CodeEditor.css"; // Ensure this CSS file exists

function CommunityUpload() {
  const [userId, setUserId] = useState<string | null>(null);
  const [code, setCode] = useState("// Write your code here...");
  const [isPrivate, setIsPrivate] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setUserId(sessionStorage.getItem("userId"));
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    problemStatement: "",
    sampleInput: "",
    sampleOutput: "",
    explanation: "",
    lang_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId || !formData.title || !formData.problemStatement) {
      setMessage("Error: Missing required fields");
      return;
    }

    const payload = {
      userId,
      title: formData.title,
      problem_statement: formData.problemStatement,
      sample_input: formData.sampleInput,
      sample_output: formData.sampleOutput,
      further_details: formData.explanation,
      model_answer: code,
      lang_name: formData.lang_name,
      Project_Description: formData.explanation,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/uploadProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Project uploaded successfully!");
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setMessage("Error: Unable to connect to the server.");
    }
  };

  return (
    <>
      <Sidebar />
      <Searchbar />
      <div className="upload-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter Title"
                required
              />
            </div>

            <div className="form-group">
              <label>Problem Statement:</label>
              <input
                type="text"
                name="problemStatement"
                className="form-group large-input"
                value={formData.problemStatement}
                onChange={handleChange}
                placeholder="Enter Problem Statement"
                required
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                name="explanation"
                className="form-group large-input"
                value={formData.explanation}
                onChange={handleChange}
                placeholder="Enter Description"
              />
            </div>

            <div className="form-group">
              <label>Sample Input:</label>
              <input
                type="text"
                name="sampleInput"
                value={formData.sampleInput}
                onChange={handleChange}
                placeholder="Enter Sample Input"
              />
            </div>

            <div className="form-group">
              <label>Sample Output:</label>
              <input
                type="text"
                name="sampleOutput"
                value={formData.sampleOutput}
                onChange={handleChange}
                placeholder="Enter Sample Output"
              />
            </div>

            <div className="form-group">
              <label>Languages:</label>
              <input
                type="text"
                name="lang_name"
                value={formData.lang_name}
                onChange={handleChange}
                placeholder="Enter Languages Used"
              />
            </div>

            <div className="form-group toggle-group">
              <label>Set As Private</label>
              <div
                className="toggle-switch"
                onClick={() => setIsPrivate(!isPrivate)}
              >
                <span className={`toggle-slider ${isPrivate ? "on" : "off"}`}>
                  {isPrivate ? "ON" : "OFF"}
                </span>
              </div>
            </div>

            <button className="analyze-btn" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="codeEditor-container">
          <div className="code-container">
            <label className="code-label">Input Answer:</label>
            <div className="editor-wrapper">
              <CodeMirror
                value={code}
                extensions={[javascript()]}
                theme={vscodeDark}
                onChange={(value) => setCode(value)}
              />
            </div>
          </div>
        </div>
      </div>

      {message && <p className="message">{message}</p>}
    </>
  );
}

export default CommunityUpload;
