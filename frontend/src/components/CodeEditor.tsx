import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import "../css/CodeEditor.css";

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

interface CodeEditorProps {
  projectData: ProjectData | null;
  onCodeChange: (code: string) => void; // Prop to send code updates
  fetchAISuggestions: () => void; // Fetch AI suggestion when "Analyze" is clicked
}

const CodeEditor: React.FC<CodeEditorProps> = ({ projectData, onCodeChange, fetchAISuggestions }) => {
  const [code, setCode] = useState("// Write your code here...");

  const handleCodeChange = (value: string) => {
    setCode(value);
    onCodeChange(value); // Send updated code to parent (CodeEditingPage)
  };

  if (!projectData) {
    return <div>Loading code...</div>;
  }

  return (
    <div className="code-container">
      <label className="code-label">Input Answer:</label>
      <div className="editor-wrapper">
        <CodeMirror
          value={code}
          extensions={[javascript()]}
          theme={vscodeDark}
          onChange={handleCodeChange}
        />
      </div>

      {/* ✅ Analyze Button Calls AI Immediately */}
      <button className="analyze-btn" onClick={fetchAISuggestions}>
        Analyze
      </button>
    </div>
  );
};

export default CodeEditor;
