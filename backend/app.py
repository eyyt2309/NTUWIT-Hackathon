from flask import Flask, request, jsonify
import requests
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
app = Flask(__name__)
# Flask routing to get latitude and longitude

@app.route('/hello', methods=['GET'])
def index():
    return "hello world"



# @app.route('/getCoords', methods=['GET'])
# def get_coords():
#     postalcode = request.args.get('postalcode')
#     coords = getCoords(postalcode)
#     return jsonify(coords)


# run on port 5000
if __name__ == '__main__':
    app.run(port=5000)
