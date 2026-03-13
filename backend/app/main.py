from fastapi import FastAPI

from app.core.database import create_db_and_tables
from app.api.products import router as products_router
from app.api.stores import router as stores_router
from app.api.price_history import router as price_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title='Radar de Preços API',
    description='API para monitoramento de histórico de preços de produtos',
    version='1.0.0'
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event('startup')
def on_startup():
    create_db_and_tables()


app.include_router(products_router)
app.include_router(stores_router)
app.include_router(price_router)


@app.get('/')
def root():
    return {'message': 'Radar de Preços API está rodando'}