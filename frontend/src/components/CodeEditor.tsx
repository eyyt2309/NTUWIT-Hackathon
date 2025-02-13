import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import "../css/CodeEditor.css"; // Ensure this CSS file exists

function CodeEditor() {
  const [code, setCode] = useState("// Write your code here...");

  return (
    <div className="code-container">
      <label className="code-label">Input Model Answer:</label>
      <div className="editor-wrapper">
        <CodeMirror
          value={code}
          extensions={[javascript()]} // Corrected extensions import
          theme={vscodeDark} // Added a theme for better visibility
          height="300px"
          onChange={(value) => setCode(value)}
        />
      </div>

      <button className="analyze-btn">Analyze</button>
    </div>
  );
}

export default CodeEditor;
