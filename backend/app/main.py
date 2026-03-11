from fastapi import FastAPI

app = FastAPI(
    title='Radar de Preços API',
    description='API para monitoramento de histórico de preços de produtos',
    version='1.0.0'
)


@app.get('/')
def root():
    return {'message': 'Radar de Preços API está rodando'}