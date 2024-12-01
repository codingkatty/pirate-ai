import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)

CORS(app, origins=["https://codingkatty.github.io"])

api_key = os.getenv("API_KEY")
if not api_key:
    raise RuntimeError("API_KEY environment variable is missing.")
genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-1.5-flash")

@app.route('/generate', methods=['POST'])
def generate_content():
    try:
        user_input = request.json.get('prompt', '')
        if not user_input:
            return jsonify({"error": "Prompt is required"}), 400

        response = model.generate_content(user_input)
        return jsonify({"response": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Service is running"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
