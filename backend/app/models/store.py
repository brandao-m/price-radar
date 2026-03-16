from sqlmodel import SQLModel, Field
from typing import Optional

class Store(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    logo_url: Optional[str] = None
    store_url: Optional[str] = None