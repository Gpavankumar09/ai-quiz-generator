# backend/main.py

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from backend.database import SessionLocal, engine, Base
from backend import models, schemas, llm_quiz_generator

# Create tables in the database
Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Quiz Generator Backend")

# ✅ Allow frontend to access backend
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
from fastapi import FastAPI
from backend.llm_quiz_generator import generate_quiz

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root():
    return {"message": "AI Quiz Generator Backend is running 🚀"}

# ✅ Generate quiz using Gemini API
@app.post("/generate_quiz/")
async def generate_quiz(prompt: str, db: Session = Depends(get_db)):
    try:
        quiz_data = await llm_quiz_generator.generate_quiz(prompt)
        db_quiz = models.Quiz(title=prompt, questions=quiz_data)
        db.add(db_quiz)
        db.commit()
        db.refresh(db_quiz)
        return {"quiz": db_quiz}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
