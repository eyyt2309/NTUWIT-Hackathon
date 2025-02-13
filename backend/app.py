from flask import Flask, jsonify, request
import redis
import controller.projectController
import controller.userController


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

