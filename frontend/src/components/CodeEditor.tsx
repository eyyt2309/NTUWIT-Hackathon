import { useState } from "react";
import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Controlled as CodeMirror } from "@uiw/react-codemirror";
import "../css/CodeEditor.css"; // Ensure you create this CSS file

function CodeEditor() {
  const [code, setCode] = useState("// Write your code here...");

  return (
    <div className="code-container">
      <label className="code-label">Input Model Answer:</label>
      <div className="editor-wrapper">
        <CodeMirror
          value={code}
          height="300px"
          theme="dark"
          extensions={[javascript()]}
          onChange={(value) => setCode(value)}
        />
      </div>

      <button className="analyze-btn">Analyze</button>
    </div>
  );
}

export default CodeEditor;
