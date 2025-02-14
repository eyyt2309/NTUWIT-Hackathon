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
  onCodeChange: (code: string) => void; // ✅ Pass the updated code to parent
  onFetchAISuggestions: () => void; // ✅ Trigger AI fetch manually
}

const CodeEditor: React.FC<CodeEditorProps> = ({ projectData, onCodeChange, onFetchAISuggestions }) => {
  if (!projectData) {
    return <div>Loading code...</div>;
  }

  const [code, setCode] = useState("// Write your code here...");

  useEffect(() => {
    onCodeChange(code); // ✅ Send code updates to parent when code changes
  }, [code, onCodeChange]);

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

      {/* ✅ Click button to fetch AI suggestions */}
      <button className="analyze-btn" onClick={onFetchAISuggestions}>
        Get AI Suggestion
      </button>
    </div>
  );
};

export default CodeEditor;
