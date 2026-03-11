from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from app.core.database import get_session
from app.models.price_history import PriceHistory

router = APIRouter(prefix='/prices', tags=['Prices'])

@router.post('/')
def create_price(price: PriceHistory, session: Session = Depends(get_session)):
    session.add(price)
    session.commit()
    session.refresh(price)
    return price

@router.get('/')
def list_prices(session: Session = Depends(get_session)):
    statement  = select(PriceHistory)
    results = session.exec(statement)
    return results.all()

@router.get('/product/{product_id}')
def get_prices_by_product(product_id: int, session: Session = Depends(get_session)):
    statement = select(PriceHistory).where(PriceHistory.product_id == product_id)
    results = session.exec(statement)
    return results.all()