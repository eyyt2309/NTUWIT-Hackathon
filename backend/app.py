from flask import Flask, jsonify, request
import redis
import controller.projectController
import controller.userController
import controller.dashboardController


app = Flask(__name__)

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
        if auth:  # `auth == True` is redundant, just use `if auth`
            return jsonify({'success': 'Authentication successful'}), 200
        else:
            return jsonify({'failed': 'Invalid credentials'}), 401

    except Exception as e:
        return jsonify({'error': 'Internal server error', 'details': str(e)}), 500
    
@app.route('/projectinfo', methods=['GET'])
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
            "LANG_NAME": result[8]
        }
        print(project_dict)
        if data:  # `auth == True` is redundant, just use `if auth`
            return project_dict, 200
        else:
            return jsonify({'NIL': 'no data found'}), 401

    except Exception as e:
        return jsonify({'error': 'Internal server error', 'details': str(e)}), 500
    

@app.route('/getRecentProjects', methods=['GET'])
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
            project_dict["currentCode"+str(i)] = proj[1]
            project_dict["percentage"+str(i)] = proj[2]
            i+=1

        if data:  # `auth == True` is redundant, just use `if auth`
            return project_dict, 200
        else:
            return jsonify({'NIL': 'No data found'}), 401

    except Exception as e:
        return jsonify({'error': 'Internal server error', 'details': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)


# @app.route('/set/<string:key>/<string:value>', methods=['POST'])
# def set_key(key, value):
#     if not redis_cache.exists(key):
#         redis_cache.set(key, value)
#         return jsonify({"message": "Key set successfully"}), 201  # 201 Created
#     return jsonify({"message": "Key already exists"}), 409  # 409 Conflict

# @app.route('/get/<string:key>', methods=['GET'])
# def get_key(key):
#     value = redis_cache.get(key)
#     if value is not None:
#         return jsonify({"key": key, "value": value}), 200  # 200 OK
#     return jsonify({"error": f"Key '{key}' does not exist"}), 404  # 404 Not Found

