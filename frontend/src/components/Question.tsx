import "../css/Question.css";

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

const Question: React.FC<{ projectData: ProjectData | null }> = ({
  projectData,
}) => {
  if (!projectData) {
    return <div>Loading question...</div>;
  }

  return (
    <div className="question-container">
      <h1 className="question-header">{projectData.problem_statement}</h1>
    </div>
  );
};

export default Question;
