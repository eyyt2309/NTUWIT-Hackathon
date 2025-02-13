import { useState } from "react";
import "../css/CommunityUpload.css";
import CodeEditor from "../components/CodeEditor";

function CommunityUpload() {
  const [isPrivate, setIsPrivate] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    problemStatement: "",
    constraints: "",
    timeLimit: "",
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
      <div className="upload-container">
        <div className="form-container">
          <form>
            <div className="form-group">
              <label>Input Title:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Input Problem Statement:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Constraints:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Time Limit:</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Explanation:</label>
              <input type="text" />
            </div>

            {/* Toggle Switch */}
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

      <div className="testing-container">

        <div className="testing">
          <label>Sample Input:</label>
          <input type="text" />
        </div>

        <div className="output-box"> Sample Output:</div>
      </div>

    </>
  );
}
export default CommunityUpload;
