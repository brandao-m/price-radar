from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from app.core.database import get_session
from app.models.product import Product
from app.services.price_analysis import calculate_price_statistics, get_price_history, get_product_store_prices, get_best_deal
from app.schemas.product import ProductCreate


router = APIRouter(prefix='/products', tags=['Products'])


@router.post('/')
def create_product(product: ProductCreate, session: Session = Depends(get_session)):

    db_product = Product.model_validate(product)

    session.add(db_product)
    session.commit()
    session.refresh(db_product)

    return db_product


@router.get('/')
def list_products(session: Session = Depends(get_session)):
    statement = select(Product)
    results = session.exec(statement)
    return results.all()


@router.get('/{product_id}')
def get_product(product_id: int, session: Session = Depends(get_session)):
    product = session.get(Product, product_id)
    return product  


@router.get('/{product_id}/statistics')
def get_product_statistics(product_id: int, session: Session = Depends(get_session)):
    stats = calculate_price_statistics(product_id, session)

    if not stats:
        return {'message': 'Nenhum histórico de preço encontrado para este produto'}
    
    return stats


@router.get('/{product_id}/price-history')
def get_product_price_history(product_id: int, session: Session = Depends(get_session)):

    history = get_price_history(product_id, session)

    if not history:
        return {'message': 'Nenhum histórico de preço encontrado'}
    
    return history


@router.get('/{product_id}/stores')
def get_product_stores(product_id: int, session: Session = Depends(get_session)):

    stores = get_product_store_prices(product_id, session)

    if not stores:
        return {'message:' 'Nenhuma loja encontrada para este produto'}
    
    return stores


@router.get('/{product_id}/best-deal')
def get_product_best_deal(product_id: int, session: Session = Depends(get_session)):

    best_deal = get_best_deal(product_id, session)

    if not best_deal:
        return {'message': 'Nenhuma oferta encontrada para este produto'}
    
    return best_deal