TASK MANAGEMENT APPLICATION

A full-stack Task Management application built using React (Vite) for the frontend and FastAPI for the backend.
This application allows users to view tasks, add new tasks, and manage task status with a clean UI.

FEATURES

FRONTEND:

Built with React (Vite) and TypeScript

Dashboard with full-screen background image

Add new tasks

View task list

Status shown as Pending / In Progress / Completed

Logout button on top-right corner

Responsive and clean UI

BACKEND:

Built with FastAPI

REST API architecture

GET tasks endpoint

POST tasks endpoint

CORS enabled

Swagger UI available

TECH STACK

Frontend:

React (Vite)

TypeScript

Ant Design

Axios

CSS

Backend:

FastAPI

Python

Uvicorn

Pydantic

PROJECT STRUCTURE

taskManagement/

backend/

app/

main.py

routes/

auth.py

tasks.py

models.py

database.py

requirements.txt

venv/

frontend/

src/

api/

api.ts

assets/

bgimages.jpg

components/

TaskForm.tsx

TaskList.tsx

pages/

Login.tsx

Dashboard.tsx

App.tsx

main.tsx

package.json

BACKEND SETUP

Go to backend folder

Create virtual environment

Install dependencies

Run server

Commands:

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload

Backend URL:
http://127.0.0.1:8000

Swagger UI:
http://127.0.0.1:8000/docs

FRONTEND SETUP

Go to frontend folder

Install npm packages

Start development server

Commands:

cd frontend
npm install
npm run dev

Frontend URL:
http://localhost:5173

API ENDPOINTS

GET /tasks

Fetch all tasks

POST /tasks

Create a new task

Example task JSON:

{
"title": "Learn React",
"status": "Pending"
}

KEY LEARNINGS

React and FastAPI integration

REST API usage

Axios for API calls

Component-based UI

Full-screen background image handling

CORS configuration

FUTURE ENHANCEMENTS

JWT authentication

Edit task status

Delete tasks

Database integration

Dark mode