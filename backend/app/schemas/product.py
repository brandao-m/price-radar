from sqlmodel import SQLModel

class ProductCreate(SQLModel):
    name: str
    image_url: str | None = None
    category: str | None = None

class ProductRead(SQLModel):
    id: int
    name: str
    image_url: str | None = None
    category: str | None = None