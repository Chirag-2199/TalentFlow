# TalentFlow 🚀 – Freelance Job Platform

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
![Node.js](https://img.shields.io/badge/Node.js-18-blue.svg)  
![React](https://img.shields.io/badge/React-18.2-blue.svg)  
![MongoDB](https://img.shields.io/badge/MongoDB-6.5-green.svg)

**TalentFlow** is a powerful freelance job platform where **freelancers** and **employers** connect. Freelancers can create profiles, browse and apply for jobs, while employers can post job listings and manage applications. Built with **MERN stack**, it features JWT authentication, protected dashboards, and a clean, responsive UI.

---

## 🔥 Features

- 🎯 Post and apply for freelance jobs
- 👤 Role-based dashboards (Freelancer/Employer)
- 🔒 Secure JWT-based authentication
- 🎨 Modern React UI with Tailwind & responsive design
- 🌐 RESTful API with Express.js
- 📦 MongoDB-powered persistent storage

---

## 🛠 Tech Stack

| Category     | Tools Used                              |
|--------------|------------------------------------------|
| Frontend     | React, JavaScript, Tailwind CSS, Material UI |
| Backend      | Node.js, Express.js, JWT                 |
| Database     | MongoDB, Mongoose                        |
| Auth         | JWT, bcrypt                              |
| Dev Tools    | Git, GitHub, dotenv, nodemon             |

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Chirag-2199/TalentFlow.git
cd TalentFlow

cd backend
npm install


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

npm run dev


cd ../frontend
npm install

REACT_APP_API_URL=http://localhost:5000/api

npm start

TalentFlow/
│
├── backend/
│   ├── controllers/        # Business logic (auth, jobs, users)
│   │   ├── authController.js
│   │   ├── jobController.js
│   │   └── userController.js
│   ├── models/             # Mongoose models
│   │   ├── User.js
│   │   └── Job.js
│   ├── routes/             # API endpoints
│   │   ├── authRoutes.js
│   │   ├── jobRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/         # JWT & error handling
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── config/             # DB config
│   │   └── db.js
│   ├── .env
│   └── server.js           # Entry point
│
├── frontend/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── JobCard.jsx
│   │   └── Footer.jsx
│   ├── pages/              # React pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── JobDetails.jsx
│   ├── assets/             # Images, icons, etc.
│   ├── App.js              # Main component
│   ├── index.js            # Entry point
│   └── .env
│
├── .gitignore
├── README.md
└── package.json



