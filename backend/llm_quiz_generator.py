# backend/llm_quiz_generator.py

import os
import json
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("AIzaSyDmeOSO08yY8UAwnlx5vrMNO4y1h_iNg6E"))

async def generate_quiz(topic: str):
    """Generates 10–15 quiz questions using Gemini API."""
    model = genai.GenerativeModel("gemini-1.5-flash")
    prompt = f"Generate 10-15 multiple-choice questions on {topic} with 4 options each and correct answers in JSON format."
    response = model.generate_content(prompt)
    try:
        quiz_data = json.loads(response.text)
    except Exception:
        quiz_data = {"error": "Invalid JSON format returned from Gemini"}
    return json.dumps(quiz_data)
