# backend/models.py
from sqlalchemy import Column, Integer, String, Text
from backend.database import Base

class Quiz(Base):
    __tablename__ = "quizzes"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    questions = Column(Text)  # store quiz as JSON string
