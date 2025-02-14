import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import "../css/CodeEditor.css"; // Ensure this CSS file exists

interface ProjectData {
  LANG_NAME: string; // Programming languages used (e.g., "HTML, CSS")
  Project_Description: string; // Detailed description of the project
  further_details: string; // Additional project details
  model_answer: string; // Sample model answer (HTML code)
  problem_statement: string; // Description of the problem statement
  projectId: number; // Unique project ID
  sample_input: string | null; // Sample input (if applicable)
  sample_output: string | null; // Expected output (if applicable)
  title: string; // Project title
  userId: number; // Associated user ID
}

const CodeEditor: React.FC<{ projectData: ProjectData | null }> = ({
  projectData,
}) => {
  if (!projectData) {
    return <div>Loading code...</div>;
  }

  const [code, setCode] = useState("// Write your code here...");

  return (
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

      <button className="analyze-btn">Analyze</button>
    </div>
  );
};

export default CodeEditor;
