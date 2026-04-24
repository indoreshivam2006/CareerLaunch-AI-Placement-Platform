# 🚀 CareerLaunch
**An AI-powered placement preparation platform built for the Adivya 2.0 Hackathon at IIT Ropar by team HACKFINITY.**

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Groq](https://img.shields.io/badge/Groq-f55036?style=for-the-badge)](https://groq.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

CareerLaunch is your ultimate companion for acing campus placements. It brings together state-of-the-art AI tools to help students build resumes, practice interviews, simulate group discussions, and match their profiles to job descriptions—all in one place.

---

## ✨ Features

- **🤖 AI Mock Interview**: Practice behavioral and technical interviews with an AI agent that provides real-time feedback.
- **🗣️ GD Simulator**: Simulate group discussions and get insights on your communication, leadership, and analytical skills.
- **📄 Resume Builder**: Generate beautifully formatted, professional resumes with dynamic styling and PDF export.
- **✅ ATS Scorer**: Upload your resume and get an ATS compatibility score along with actionable improvement tips.
- **🎯 JD Matcher**: Match your resume against a specific Job Description to find your fit and identify missing keywords.
- **✉️ Cover Letter Generator**: Automatically generate highly tailored cover letters for specific job roles.
- **🧠 Aptitude Module**: Practice quantitative, logical, and verbal reasoning questions.
- **🏢 Company Tracker**: Keep track of upcoming companies visiting the campus, deadlines, and eligibility criteria.
- **⚖️ Offer Comparison**: Compare multiple job offers based on CTC, base pay, location, and growth potential.
- **💳 Pricing Tiers**: Integrated subscription tiers to unlock advanced AI features.

---

## 🛠️ Tech Stack

**Frontend:**
- [Next.js 14](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [NextAuth](https://next-auth.js.org/) (Authentication)

**Backend:**
- [FastAPI](https://fastapi.tiangolo.com/) (Python)
- [Groq API](https://groq.com/) (Lightning-fast LLM inference)
- [SQLite](https://www.sqlite.org/) (Database)

---

## 🚀 How to Run Locally

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository
```bash
git clone <repository-url>
cd "IIT ropar_project"
```

### 2. Backend Setup
Navigate to the `backend` folder, set up a virtual environment, install dependencies, and run the FastAPI server:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # Add your Groq API key and other secrets
uvicorn main:app --reload
```
The backend will run at `http://localhost:8000`.

### 3. Frontend Setup
Open a new terminal, navigate to the `frontend` folder, install dependencies, and start the Next.js development server:
```bash
cd frontend
npm install
cp .env.local.example .env.local  # Update your frontend secrets
npm run dev
```
The frontend will run at `http://localhost:3000`.

---

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your respective `.env` files.

### Frontend (`frontend/.env.local`)
- `NEXTAUTH_URL`: Typically `http://localhost:3000`
- `NEXTAUTH_SECRET`: A random string for securing sessions.
- `NEXT_PUBLIC_API_URL`: The backend API URL (e.g., `http://localhost:8000`)
- *(Any other NextAuth providers if configured, e.g., GitHub/Google ID and Secrets)*

### Backend (`backend/.env`)
- `GROQ_API_KEY`: Your Groq API key for LLM generation.
- `DATABASE_URL`: SQLite connection string (e.g., `sqlite:///./careerlaunch.db`).

*(See the `.env.example` files in both directories for templates)*

---

## 👥 Team

Built with ❤️ for **Adivya 2.0 Hackathon @ IIT Ropar** by:

**Team HACKFINITY**
- **Shivam Indore**
