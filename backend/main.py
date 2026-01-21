from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.sample_routes import router as sample_routes
app = FastAPI()

# Allow local node dev server (3000) and others
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # or ["*"] to allow any
    allow_credentials=True,
    allow_methods=["*"],         # GET, POST, etc
    allow_headers=["*"],         # Authorization, Content-Type, etc
)

app.include_router(sample_routes, prefix="/sample", tags=["users"])

@app.get("/hello")
def hello():
    return {"message": "Hello from FastAPI!"}
