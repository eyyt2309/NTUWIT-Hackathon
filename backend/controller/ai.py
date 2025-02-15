import requests
import json

# Perplexity AI API Configuration
API_KEY = ""  # 🔹 Replace with your real API key
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
            {"role": "system", "content": "Provide a single-line improvement summary for the given code unless the code is longer than 5 lines. The improvement not be unnecessarily long. The improvements can be for variable naming, security purposes and even syntactical suggestions and fixes. The suggestion should not contain sophisticated jargon or hard to understand terms, it should be something a beginner should be able to understand. I do not want you to reply with here is a single improvement.Simply reply with the suggestion as succinctly and do not try to do markup and format the output, just output a string that is a maxium of 20 words. "},
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
                print(suggestion)
                return suggestion.strip()  # ✅ Short and clean output
            else:
                return "⚠️ No valid AI response received."
        else:
            return f"⚠️ API Error: {response.status_code} - {response.text}"
    
    except Exception as e:
        return f"⚠️ Request Failed: {str(e)}"

# def test_api():
#     """ Tests if the API is working correctly. """
#     test_payload = {
#         "model": AI_SETTINGS["model"],
#         "messages": [
#             {"role": "system", "content": "You are a helpful assistant."},
#             {"role": "user", "content": "Hello! How are you?"}
#         ],
#         "max_tokens": AI_SETTINGS["max_tokens"],
#         "temperature": AI_SETTINGS["temperature"]
#     }

#     headers = {
#         "Authorization": f"Bearer {API_KEY}",
#         "Content-Type": "application/json"
#     }

#     try:
#         response = requests.post(PERPLEXITY_URL, json=test_payload, headers=headers)
#         print("🔹 Status Code:", response.status_code)
#         print("🔹 Response:", response.json())
#     except Exception as e:
#         print("⚠️ Error:", str(e))

# Run Test
if __name__ == "__main__":
    # print("🔄 Running API Test...")
    # test_api()
    
    print("\n💡 AI Suggestion for Code:")
<<<<<<< HEAD:aipart/ai.py
    sample_code = "#include <stdio.h>"
    print(get_ai_suggestions(sample_code))
=======
    # sample_code = "def add(a, b): return a+b"
    # print(get_ai_suggestions(sample_code))
>>>>>>> main:backend/controller/ai.py
