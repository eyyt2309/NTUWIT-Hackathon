from flask import Flask, jsonify
import redis

app = Flask(__name__)

# Connect to Redis with authentication
redis_cache = redis.Redis(host='localhost', port=6379, decode_responses=True)


@app.route('/set/<string:key>/<string:value>', methods=['POST'])
def set_key(key, value):
    if not redis_cache.exists(key):
        redis_cache.set(key, value)
        return jsonify({"message": "Key set successfully"}), 201  # 201 Created
    return jsonify({"message": "Key already exists"}), 409  # 409 Conflict

@app.route('/get/<string:key>', methods=['GET'])
def get_key(key):
    value = redis_cache.get(key)
    if value is not None:
        return jsonify({"key": key, "value": value}), 200  # 200 OK
    return jsonify({"error": f"Key '{key}' does not exist"}), 404  # 404 Not Found

if __name__ == '__main__':
    app.run(debug=True)
