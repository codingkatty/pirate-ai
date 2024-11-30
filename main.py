import os
from flask import Flask, jsonify, request
import google.generativeai as genai

app = Flask(__name__)

apiKey = os.getenv("API_KEY")
if not apiKey:
    raise RuntimeError("API_KEY environment variable is missing.")
genai.configure(api_key=apiKey)
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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)