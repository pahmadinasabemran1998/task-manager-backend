# Task Manager Backend

A secure **Node.js + Express + MongoDB** RESTful API for managing user tasks. Provides endpoints for user authentication and task CRUD operations, including filtering by status or category. JWT-based authentication ensures tasks are user-specific and secure.

## Features

- **User Authentication**: Register, login, and logout with JWT tokens.
- **Task Management**: Create, read, update, and delete tasks with title, category, deadline, and status.
- **Filtering**: Retrieve tasks by status (`In Progress`, `Completed`, `Overdue`) or category (`Work`, `Personal`, `Study`, `Other`).
- **Automatic Overdue Detection**: Tasks automatically update to `Overdue` if the deadline passes.
- **Secure Endpoints**: JWT-based authorization ensures users only access their tasks.
- **Persistent Storage**: Data stored in MongoDB.

## Tech Stack

- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Validation & Security**: express-validator, bcryptjs, CORS
- **Environment Management**: dotenv

## Setup & Running

1. Clone the repository:

```bash
git clone https://github.com/pahmadinasabemran1998/task-manager-backend.git
```
2. Navigate to the project folder:
```bash
cd task-manager-backend
```
3. Install dependencies:
```bash
npm install
```
4. Create a .env file with your configuration:
```bash
PORT=5000
MONGODB_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```
5. Start the development server:
```bash
npm run dev
```
6. The API will be available at: http://localhost:5000/api

## Frontend Reference
1. This backend is designed to work with the Task Manager Frontend: [Task Manager Frontend](https://github.com/pahmadinasabemran1998/task-manager-frontend).
2. Make sure the frontend is configured to use the backend URL in .env (VITE_API_URL=http://localhost:5000/api) for proper communication.