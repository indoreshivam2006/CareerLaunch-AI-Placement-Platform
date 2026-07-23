# 🚀 CareerLaunch
**An AI-powered placement preparation platform built solo by Shivam Indore for the Adivya 2.0 Hackathon at IIT Ropar.**

🌐 **Live Demo:** https://career-launch-ai-placement-platform.vercel.app/

> Built solo by **Shivam Indore** for the
> **Adivya 2.0 Hackathon @ IIT Ropar**.

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Groq](https://img.shields.io/badge/Groq-f55036?style=for-the-badge)](https://groq.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

CareerLaunch is your ultimate companion for acing campus placements. It brings together state-of-the-art AI tools to help students build resumes, practice interviews, simulate group discussions, and match their profiles to job descriptions—all in one place.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 AI Mock Interview | Real-time behavioral & technical interview practice |
| 🗣️ GD Simulator | Group discussion practice with AI feedback |
| 📄 Resume Builder | Professional resume generation with PDF export |
| ✅ ATS Scorer | ATS compatibility scoring with actionable tips |
| 🎯 JD Matcher | Resume vs Job Description skill gap analysis |
| ✉️ Cover Letter Generator | Tailored cover letters via Groq LLM |
| 🧠 Aptitude Module | Quant, logical & verbal reasoning practice |
| 🏢 Company Tracker | Campus recruitment calendar & eligibility tracker |
| ⚖️ Offer Comparison | Side-by-side offer evaluation tool |
| 💳 Pricing Tiers | Subscription model for advanced AI features |

---

## 🛠️ Tech Stack

**Frontend:**
- [Next.js 14](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth](https://next-auth.js.org/) (Google OAuth Authentication)

**Backend:**
- [FastAPI](https://fastapi.tiangolo.com/) (Python)
- [Groq API](https://groq.com/) (LLM inference — llama-3.3-70b-versatile)
- [SQLite](https://www.sqlite.org/) + [SQLAlchemy](https://www.sqlalchemy.org/) (ORM)
- [Alembic](https://alembic.sqlalchemy.org/) (Database Migrations)

---

## 🚀 How to Run Locally

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/indoreshivam2006/CareerLaunch-AI-Placement-Platform
cd "IIT ropar_project"
```

### 2. Backend Setup
Navigate to the `backend` folder, set up a virtual environment, install dependencies, and run the FastAPI server:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # Then edit .env and add your Groq API key
alembic upgrade head       # Initialize the database
uvicorn main:app --reload
```
The backend will run at `http://localhost:8000`.

### 3. Frontend Setup
Open a new terminal, navigate to the `frontend` folder, install dependencies, and start the Next.js development server:
```bash
cd frontend
npm install
cp .env.local.example .env.local  # Then edit with your Google OAuth credentials
npm run dev
```
The frontend will run at `http://localhost:3000`.

---

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your respective `.env` files.

### Frontend (`frontend/.env.local`)
| Variable | Required | Description |
|---|---|---|
| `NEXTAUTH_URL` | ✅ | Base URL of the frontend (e.g., `http://localhost:3000`) |
| `NEXTAUTH_SECRET` | ✅ | A random string for securing NextAuth sessions |
| `NEXT_PUBLIC_API_URL` | ✅ | The backend API URL (e.g., `http://localhost:8000`) |
| `GOOGLE_CLIENT_ID` | ✅ | Google OAuth Client ID from [Google Cloud Console](https://console.cloud.google.com/) |
| `GOOGLE_CLIENT_SECRET` | ✅ | Google OAuth Client Secret |

### Backend (`backend/.env`)
| Variable | Required | Description |
|---|---|---|
| `GROQ_API_KEY` | ✅ | Your Groq API key from [groq.com](https://groq.com/) |
| `DATABASE_URL` | ❌ | SQLite connection string (defaults to `sqlite:///./careerlaunch.db`) |
| `FRONTEND_URL` | ❌ | Frontend origin for CORS (defaults to `http://localhost:3000`) |

*(See the `.env.example` files in both directories for templates)*

---

## ☁️ Deployment

### Deploying the Backend (Render)
The backend is fully configured for deployment on [Render](https://render.com/).
1. Connect your GitHub repository to Render.
2. The provided `render.yaml` blueprint will automatically configure the Web Service.
3. If setting up manually, use:
   - **Build Command**: `chmod +x build.sh && ./build.sh`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Set the `GROQ_API_KEY` and `FRONTEND_URL` environment variables in the Render dashboard.

### Deploying the Frontend (Vercel)
1. Import the `frontend` directory into [Vercel](https://vercel.com/).
2. Set the Environment Variables (`NEXTAUTH_URL`, `NEXT_PUBLIC_API_URL`, etc.). 
   *Note: `NEXT_PUBLIC_API_URL` should point to your deployed Render URL.*
3. Click **Deploy**. Vercel will automatically detect the Next.js framework.

---

## 📁 Project Structure

```
IIT ropar_project/
├── backend/
│   ├── alembic/              # Database migration scripts
│   ├── routes/
│   │   ├── user.py           # User management & activity tracking
│   │   ├── resume.py         # ATS scoring, JD matching, cover letters
│   │   ├── interview.py      # AI mock interview chat
│   │   ├── gd.py             # Group discussion simulator
│   │   └── offers.py         # Offer comparison AI analysis
│   ├── main.py               # FastAPI app entry point
│   ├── models.py             # SQLAlchemy ORM models
│   ├── schemas.py            # Pydantic request/response schemas
│   ├── database.py           # Database connection config
│   └── requirements.txt      # Python dependencies
├── frontend/
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── dashboard/        # Dashboard (protected)
│   │   ├── aptitude/         # Aptitude quiz module
│   │   ├── interview/        # AI mock interview
│   │   ├── gd/               # Group discussion
│   │   ├── resume/           # Resume builder + scorer
│   │   ├── companies/        # Company tracker
│   │   ├── offers/           # Offer comparison
│   │   └── pricing/          # Subscription tiers
│   ├── components/           # Shared components (Navbar, Providers)
│   └── middleware.ts         # Route protection
└── README.md
```

---

## 👥 Built By

**Shivam Indore** — Solo Developer
- GitHub: https://github.com/indoreshivam2006
- Portfolio: https://shivamindoreportfolio.vercel.app
