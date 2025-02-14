from flask import Flask, jsonify, request
import controller.communityuploadController
import redis
import controller.projectController
import controller.userController
import controller.dashboardController
import controller.ai
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Connect to Redis (Assuming no password; add `password='your_redis_password'` if needed)
# redis_cache = redis.Redis(host='localhost', port=6379, decode_responses=True)

@app.route('/auth', methods=['POST'])
def authenticate():
    try:
        data = request.get_json()
        # Validate request body
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({'error': 'Missing email or password'}), 400

        # Fetch stored hash from MySQL
        auth = controller.userController.authenticate_user(email, password)
        print(auth)
        if auth:  # `auth == True` is redundant, just use `if auth`
            return jsonify({'userId': auth}), 200
        else:
            return jsonify({'failed': 'Invalid credentials'}), 401

    except Exception as e:
        return jsonify({'error': 'Internal server error', 'details': str(e)}), 500
    
@app.route('/projectinfo', methods=['POST'])
def getprojinfo():
    try:
        data = request.get_json()
        projectId = data.get('projectId')

        if not projectId:
            return jsonify({'error': 'Missing projectId'}), 400
        result = controller.projectController.retrieveprojectInfo(projectId)
        project_dict = {
            "projectId": result[0],
            "userId": result[1],
            "title": result[2],
            "problem_statement": result[3],
            "sample_input": result[4],
            "sample_output": result[5],
            "further_details": result[6],
            "model_answer": result[7],
            "LANG_NAME": result[8],
            "Project_Description": result[9]
        }
        print(project_dict)
        if data:  # `auth == True` is redundant, just use `if auth`
            return project_dict, 200
        else:
            return jsonify({'NIL': 'no data found'}), 401

    except Exception as e:
        return jsonify({'error': 'Internal server error', 'details': str(e)}), 500
    

@app.route('/getRecentProjects', methods=['POST'])
def getinfo():
    try:
        data = request.get_json()
        userId = data.get('userId')

        if not userId:
            return jsonify({'error': 'Missing userid'}), 400
        data = controller.projectController.retrieveSubmittedProject(userId)
        print(data)
        project_dict = {}
        i=1
        for proj in data:
            print("in for loop")
            project_dict["projectId"+str(i)] = proj[0]
            project_dict["percentage"+str(i)] = proj[3]
            project_dict["currentCode"+str(i)] = proj[2]
            i+=1

        if data:  # `auth == True` is redundant, just use `if auth`
            return project_dict, 200
        else:
            return jsonify({'NIL': 'No data found'}), 401

    except Exception as e:
        return jsonify({'error': 'Internal server error', 'details': str(e)}), 500
# @app.route('/registerNewProject', methods=['POST'])
# def getinfo():
#     try:
#         data = request.get_json()
#         userId = data.get('userId')

#         if not userId:
#             return jsonify({'error': 'Missing userid'}), 400
#         data = controller.projectController.retrieveSubmittedProject(userId)
#         print(data)
#         project_dict = {}
#         i=1
#         for proj in data:
#             print("in for loop")
#             project_dict["projectId"+str(i)] = proj[0]
#             project_dict["currentCode"+str(i)] = proj[1]
#             project_dict["percentage"+str(i)] = proj[2]
#             i+=1

#         if data:  # `auth == True` is redundant, just use `if auth`
#             return project_dict, 200
#         else:
#             return jsonify({'NIL': 'No data found'}), 401

#     except Exception as e:
#         return jsonify({'error': 'Internal server error', 'details': str(e)}), 500

# @app.route("/ai-suggestions", methods=["POST"])
# def ai_suggestions():
#     """ API endpoint for AI code suggestions """
#     data = request.get_json()
#     code_snippet = data.get("code", "")

#     if not code_snippet:
#         return jsonify({"error": "No code provided"}), 400

#     suggestion = get_ai_suggestions(code_snippet)
#     return jsonify({"suggestion": suggestion})

# if __name__ == "__main__":
#     app.run(debug=True)

@app.route('/ai-suggestions', methods=['POST'])
def ai_suggestions():
    """ API Route to send a code snippet to Perplexity AI and return AI feedback. """
    try:
        data = request.get_json()
        code_snippet = data.get("code_snippet")

        if not code_snippet:
            return jsonify({"error": "Missing 'code' field in request body"}), 400

        suggestion = controller.ai.get_ai_suggestions(code_snippet)

        return jsonify({"suggestion": suggestion}), 200

    except Exception as e:
        return jsonify({"error": "Internal server error", "details": str(e)}), 500
    
@app.route('/uploadProject', methods=['POST'])
def upload_project():
    try:
        data = request.get_json()
        
        userId = data.get('userId')
        title = data.get('title')
        problem_statement = data.get('problem_statement')
        sample_input = data.get('sample_input')
        sample_output = data.get('sample_output')
        further_details = data.get('further_details')
        model_answer = data.get('model_answer')
        lang_name = data.get('lang_name')
        Project_Description = data.get('Project_Description')

        if not userId or not title or not problem_statement:
            return jsonify({'error': 'Missing required fields'}), 400

        result = controller.communityuploadController.communityUpload(userId, title, problem_statement, sample_input, sample_output, further_details, model_answer, lang_name,Project_Description)

        if result:
            return jsonify({'message': 'Project uploaded successfully'}), 201
        else:
            return jsonify({'error': 'Failed to upload project'}), 500

    except Exception as e:
        return jsonify({'error': 'Internal server error', 'details': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

