from fastapi import FastAPI
from app.core.database import create_db_and_tables

app = FastAPI(
    title='Radar de Preços API',
    description='API para monitoramento de histórico de preços de produtos',
    version='1.0.0'
)

@app.on_event('startup')
def on_startup():
    create_db_and_tables()

@app.get('/')
def root():
    return {'message': 'Radar de Preços API está rodando'}