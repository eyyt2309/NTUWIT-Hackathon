import "../css/CodeEditingPage.css";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import CodeEditor from "../components/CodeEditor";
import AISuggestion from "../components/AISuggestion";
import Question from "../components/Question";

function CodeEditingPage() {
  return (
    <>
      <Sidebar />
      <Searchbar />
      <div className="codeeditor-container">
        <CodeEditor />
      </div>
      <div className="question-container">
        <Question />
      </div>
      <div className="ai-suggestion-container">
        <AISuggestion />
      </div>
    </>
  );
}
export default CodeEditingPage;
