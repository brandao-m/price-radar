from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class PriceHistory(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    product_id: int
    store_id: int
    price: float
    collected_at: datetime = Field(default_factory=datetime.utcnow)