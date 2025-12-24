from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

# Temporary in-memory storage
tasks_db = [
    {"title": "Learn React", "status": "Pending"},
    {"title": "Build Task Manager", "status": "In Progress"},
    {"title": "Prepare Interview", "status": "Completed"},
]

class TaskCreate(BaseModel):
    title: str
    status: str = "Pending"

@router.get("/tasks")
def get_tasks():
    return tasks_db

@router.post("/tasks")
def create_task(task: TaskCreate):
    new_task = {
        "title": task.title,
        "status": task.status
    }
    tasks_db.append(new_task)
    return new_task
