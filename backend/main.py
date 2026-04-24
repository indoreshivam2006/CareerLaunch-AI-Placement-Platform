from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.user import router as user_router
from routes.resume import router as resume_router
from routes.interview import router as interview_router
from routes.gd import router as gd_router
from routes.offers import router as offers_router

app = FastAPI(
    title="CareerLaunch API",
    description="Backend API for the CareerLaunch career-readiness platform",
    version="1.0.0",
)

# ---------------------------------------------------------------------------
# CORS – allow the Next.js frontend to call this API
# ---------------------------------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Routers
# ---------------------------------------------------------------------------
app.include_router(user_router)
app.include_router(resume_router)
app.include_router(interview_router)
app.include_router(gd_router)
app.include_router(offers_router)


@app.get("/", tags=["health"])
def health_check():
    """Simple health-check endpoint."""
    return {"status": "ok", "service": "CareerLaunch API"}
