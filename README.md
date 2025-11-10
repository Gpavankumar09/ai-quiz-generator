# ai-quiz-generator

🧠 AI Quiz Generator

An intelligent quiz creation platform that uses Google Gemini AI to automatically generate topic-based quizzes, built using FastAPI, React (Vite), and SQLite.

🚀 Tech Stack
Layer	Technology Used

Frontend	React (Vite), Tailwind CSS, Axios

Backend	FastAPI, LangChain, Google Gemini API

Database	SQLite (via SQLAlchemy ORM)

AI Model	Gemini 1.5 / Gemini 1.5 Pro

Environment	Python 3.10+ 

📸 Screenshots

Page	Description
🧩 Tab 1 - Quiz Generation Page	Enter a topic (e.g., "Artificial Intelligence", "Python") and generate a quiz with 10–15 AI-generated questions.

📚 Tab 2 - History View	View previously generated quizzes from the SQLite database.
🪄 Details Modal	See detailed questions, answers, and options in a popup view.




⚙️ Backend Setup (FastAPI + Gemini + SQLite)

1. Create Virtual Environment
cd backend

python -m venv venv

venv\Scripts\activate   # On Windows

# or source venv/bin/activate (Linux/macOS)

2. Install Dependencies

pip install -r requirements.txt

3 Create .env file in backend/
   
GEMINI_API_KEY=your_google_gemini_api_key

DATABASE_URL=sqlite:///./quiz.db

4. Run Backend Server
 
uvicorn main:app --reload


➡️ Server runs at: http://127.0.0.1:8000



🧩 Frontend Setup (React + Vite + Tailwind)

1. Install Dependencies
   
cd frontend/my-app

npm install

2. Run Frontend
 
npm run dev


➡️ App runs at: http://127.0.0.1:5173


🔗 Frontend–Backend Integration


Your App.jsx already integrates with FastAPI using Axios:

const generateQuiz = async () => {
  const response = await axios.post(`http://127.0.0.1:8000/generate_quiz/?topic=${topic}`);
  setQuiz(response.data);
};


Ensure FastAPI has CORS enabled:

from fastapi.middleware.cors import CORSMiddleware


app.add_middleware(

    CORSMiddleware,
    
    allow_origins=["*"],  # or specify ["http://127.0.0.1:5173"]
    
    allow_credentials=True,
    
    allow_methods=["*"],
    
    allow_headers=["*"],
    
)

📡 API Endpoints

Method	Endpoint	Description

POST	/generate_quiz/?topic=AI	Generates a quiz using Gemini AI

GET	/quizzes	Returns all saved quizzes from SQLite

GET	/quiz/{id}	Returns details for a specific quiz

🧠 LangChain Prompt Templates

You are a helpful assistant that converts a Wikipedia article into an educational quiz.
Article text:
{article_text}

Produce a JSON object with these keys:
- title: string
- summary: short 2-4 sentence summary
- questions: list of questions (id, type, question, options (list) if MCQ, correct_answer, explanation)
- key_entities: list of key named entities (3-10)
- topics: list of related topics (3-6)

Produce exactly VALID JSON, no commentary.

Example question item:
{{"id":1,"type":"multiple_choice","question":"...","options":["A","B","C","D"],"correct_answer":"A","explanation":"..."}}
"""

🧾 Example API Response
{
  "topic": "Artificial Intelligence",
  
  "questions": [
  
    {
      "question": "Who is known as the father of AI?",
      "options": {
        "A": "Alan Turing",
        "B": "John McCarthy",
        "C": "Marvin Minsky",
        "D": "Geoffrey Hinton"
      },
      "answer": "B"
    }
  ]
  
}

🗃️ Sample Data Folder
File	Description
example_topics.txt	Topics tested (e.g., Python, AI, Space)


wikipedia_links.txt	URLs used for knowledge base

sample_output.json	Example JSON response from Gemini API

🧑‍💻 Testing Locally

Start backend:


uvicorn main:app --reload


Start frontend:

npm run dev


Open http://127.0.0.1:5173


Enter a topic → click Generate Quiz → Wait for Gemini response → View generated quiz 🎯


