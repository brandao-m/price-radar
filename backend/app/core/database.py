from sqlmodel import SQLModel, create_engine, Session

# IMPORTAR OS MODELS 
from app.models.product import Product
from app.models.store import Store
from app.models.price_history import PriceHistory

DATABASE_URL = "postgresql://postgres:pgmt@localhost:5432/price_radar"

engine = create_engine(
    DATABASE_URL,
    echo=True   
)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session