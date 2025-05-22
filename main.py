from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to your AI Soccer Backend!"}

@app.get("/teams")
def get_teams():
    return {"teams": ["Team A", "Team B", "Team C"]}