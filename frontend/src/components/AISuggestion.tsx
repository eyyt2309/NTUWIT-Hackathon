interface AISuggestionProps {
  suggestion: string; // ✅ Receive AI suggestion as a prop
}

const AISuggestion: React.FC<AISuggestionProps> = ({ suggestion }) => {
  return (
    <div className="ai-suggestions">
      <h3>AI Suggestions:</h3>
      console.log({suggestion});
      <p>{suggestion || "No suggestions yet. Type code and wait 30s or click 'Get AI Suggestion'!"}</p>
    </div>
  );
};

export default AISuggestion;
