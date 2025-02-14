from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Perplexity AI API Configuration
API_KEY = REMOVED" | Set-Content replace.txt"  # 🔹 Replace with your real API key
PERPLEXITY_URL = "https://api.perplexity.ai/chat/completions"

AI_SETTINGS = {
    "model": "sonar",
    "max_tokens": 50,
    "temperature": 0.2
}

def get_ai_suggestions(code_snippet):
    """ Sends the given code to Perplexity API and returns AI feedback. """
    
    payload = {
        "model": AI_SETTINGS["model"],
        "messages": [
            {"role": "system", "content": "Provide a single-line improvement summary for the given code. The improvement should at max be 15 words. The improvements can be for variable naming, security purposes and even syntactical suggestions and fixes. The suggestion should not contain sophisticated jargon or hard to understand terms, it should be something a beginner should be able to understand"},
            {"role": "user", "content": f"Code:\n{code_snippet}\n\nWhat can be improved?"}
        ],
        "max_tokens": AI_SETTINGS["max_tokens"],
        "temperature": AI_SETTINGS["temperature"]
    }

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    try:
        response = requests.post(PERPLEXITY_URL, json=payload, headers=headers)
        if response.status_code == 200:
            ai_response = response.json()
            if "choices" in ai_response and len(ai_response["choices"]) > 0:
                suggestion = ai_response["choices"][0]["message"]["content"]
                return suggestion.strip()
            else:
                return "⚠️ No valid AI response received."
        else:
            return f"⚠️ API Error: {response.status_code} - {response.text}"
    except Exception as e:
        return f"⚠️ Request Failed: {str(e)}"

@app.route("/ai-suggestions", methods=["POST"])
def ai_suggestions():
    """ API endpoint for AI code suggestions """
    data = request.json
    code_snippet = data.get("code", "")

    if not code_snippet:
        return jsonify({"error": "No code provided"}), 400

    suggestion = get_ai_suggestions(code_snippet)
    return jsonify({"suggestion": suggestion})

if __name__ == "__main__":
    app.run(debug=True)
