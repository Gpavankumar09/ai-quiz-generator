# backend/schemas.py
from pydantic import BaseModel

class QuizBase(BaseModel):
    title: str
    questions: str

class QuizCreate(QuizBase):
    pass

class Quiz(QuizBase):
    id: int
    class Config:
        orm_mode = True
