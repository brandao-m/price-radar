from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from app.core.database import get_session
from app.models.store import Store

router = APIRouter(prefix='/stores', tags=['Stores'])

@router.post('/')
def create_store(store: Store, session: Session = Depends(get_session)):
    session.add(store)
    session.commit()
    session.refresh(store)
    return store

@router.get('/')
def list_stores(session: Session = Depends(get_session)):
    statement = select(Store)
    results = session.exec(statement)
    return results.all()

@router.get('/{store_id}')
def get_store(store_id: int, session: Session = Depends(get_session)):
    store = session.get(Store, store_id)
    return store