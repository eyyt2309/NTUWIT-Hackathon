import { useState } from "react";
import "../css/CommunityUpload.css";
import CodeEditor from "../components/CodeEditor";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";

function CommunityUpload() {
  const [isPrivate, setIsPrivate] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    problemStatement: "",
    sampleInput: "",
    sampleOutput: "",
    explanation: "",
    code: "",
    isPrivate: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCodeChange = (newCode: string) => {
    setFormData((prevData) => ({
      ...prevData,
      code: newCode,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );
      console.log("Upload successful:", response.data);
      alert("Problem uploaded successfully!");
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Error uploading the problem!");
    }
  };
  return (
    <>
      <Sidebar />
      <Searchbar />
      <div className="upload-container">
        <div className="form-container">
          <form>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" placeholder="Enter Title:" />
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
          </form>
        </div>
      </div>

      <div className="codeEditor-container">
        <CodeEditor />
      </div>
    </>
  );
}

export default CommunityUpload;
