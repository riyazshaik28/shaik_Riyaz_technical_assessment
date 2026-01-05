# VectorShift Frontend Technical Assessment

This project is a frontend technical assessment completed as part of the VectorShift internship interview process. The application is a visual, no-code style pipeline builder that allows users to create, connect, and validate AI pipelines.

---

## 🚀 Features

### 1. Node Abstraction
- Implemented a reusable `BaseNode` component to avoid duplicated logic.
- All node types (Input, Output, Text, LLM, API, Condition, Delay, etc.) extend from this base abstraction.
- Adding new nodes requires minimal code changes.

### 2. Modern UI with Tailwind CSS
- Fully styled using Tailwind CSS.
- Clean dashboard-style layout with toolbar, canvas, and action bar.
- Gradient toolbar and card-based UI for a professional look.

### 3. Dynamic Text Node Logic
- Text node auto-resizes as the user types.
- Supports dynamic variables using `{{ variable }}` syntax.
- Each detected variable dynamically creates an input handle on the node.

### 4. Interactive Pipeline Builder
- Drag-and-drop nodes from the toolbar into the canvas.
- Nodes automatically connect in sequence when added.
- Nodes can be deleted using the Backspace or Delete key.
- Real-time tracking of nodes and edges.

### 5. Backend Integration (FastAPI)
- Frontend sends pipeline data (nodes and edges) to the backend.
- Backend calculates:
  - Number of nodes
  - Number of edges
  - Whether the pipeline forms a Directed Acyclic Graph (DAG)
- Results are displayed to the user via an alert.

---

## 🧠 Tech Stack

### Frontend
- React
- React Flow
- Tailwind CSS
- JavaScript

### Backend
- Python
- FastAPI
- Uvicorn

---

## 📁 Project Structure

frontend/
├── src/
│ ├── App.js
│ ├── ui.js
│ ├── toolbar.js
│ ├── submit.js
│ ├── components/
│ │ └── DraggableNode.js
│ └── nodes/
│ ├── BaseNode.js
│ ├── InputNode.js
│ ├── OutputNode.js
│ ├── TextNode.js
│ ├── LLMNode.js
│ ├── APINode.js
│ ├── ConditionNode.js
│ ├── DelayNode.js
│ └── index.js
└── index.css

backend/
└── main.py



---

## ▶️ How to Run the Project

### Frontend
```bash
cd frontend
npm install
npm start


## The frontend will run at:

http://localhost:3000


Author
Shaik Riyaz
Frontend Technical Assessment – VectorShift