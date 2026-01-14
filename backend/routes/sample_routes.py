from fastapi import APIRouter, HTTPException, status
from typing import List
from models.sample_model import SampleModel
from datetime import datetime

router = APIRouter()

# Mock database
fake_users_db = []
user_id_counter = 1

@router.get("/get_sample", response_model=SampleModel)
async def get_sample_model():
    sample = SampleModel(email="sample@gmail.com", username="sample")
    return sample
