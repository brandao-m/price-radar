# Radar de Preços

Radar de Preços é uma plataforma para monitoramento de histórico de preços de produtos em diferentes lojas.

O sistema permite registrar preços ao longo do tempo, visualizar o histórico de variação e identificar oportunidades de compra com base em análises como menor preço histórico, média de preços e variações recentes.

Este projeto está sendo desenvolvido como parte de um portfólio de backend, com foco em construção de APIs robustas, organização de arquitetura e manipulação de dados históricos.

---

## Funcionalidades
- Cadastro de produtos
- Cadastro de lojas
- Registro de preços ao longo do tempo
- Consulta de histórico de preços
- Base para geração de gráficos de variação de preços
- Estrutura para análise de dados e identificação de oportunidades de compra

---

## Tecnologias utilizadas
Backend:
- Python
- FastAPI
- SQLModel
- PostgreSQL

Ferramentas:
- Uvicorn
- Git
- GitHub

---

## Estrutura do projeto
```
backend/
app/
api/
core/
models/
repositories/
schemas/
services/
```

---

## Endpoints atuais da API
### Produtos
```
POST /products
GET /products
GET /products/{id}
```
### Lojas
```
POST /stores
GET /stores
GET /stores/{id}
```
### Histórico de preços
```
POST /prices
GET /prices
GET /prices/product/{product_id}
```
---

## Próximos passos do projeto
- Implementar motor de análise de preços
- Cálculo de menor preço histórico
- Cálculo de média de preços
- Identificação de preços abaixo da média
- Geração de dados para gráficos de histórico
- Desenvolvimento do frontend da plataforma

---

## Objetivo do projeto
Demonstrar habilidades em desenvolvimento backend com Python, construção de APIs REST, modelagem de dados e organização de arquitetura de software.

---

## Autor
Marcus Brandão - Backend Developer