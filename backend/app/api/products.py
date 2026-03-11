from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from app.core.database import get_session
from app.models.product import Product

router = APIRouter(prefix='/products', tags=['Products'])


@router.post('/')
def create_product(product: Product, session: Session = Depends(get_session)):
    session.add(product)
    session.commit()
    session.refresh(product)
    return product


@router.get('/')
def list_products(session: Session = Depends(get_session)):
    statement = select(Product)
    results = session.exec(statement)
    return results.all()


@router.get('/{product_id}')
def get_product(product_id: int, session: Session = Depends(get_session)):
    product = session.get(Product, product_id)
    return product               