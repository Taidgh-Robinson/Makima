from pydantic import BaseModel
from typing import Optional

class SampleModel(BaseModel):
    email: str
    username: str
    full_name: Optional[str] = None
