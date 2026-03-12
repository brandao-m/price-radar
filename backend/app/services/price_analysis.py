from sqlmodel import Session, select
from app.models.price_history import PriceHistory
from datetime import datetime, timedelta
from app.models.store import Store

def calculate_price_statistics(product_id: int, session: Session):

    statement = select(PriceHistory).where(PriceHistory.product_id == product_id)
    results = session.exec(statement).all()

    if not results:
        return None
    
    prices = [p.price for p in results]

    lowest_price = min(prices)
    average_price = sum(prices) / len(prices)

    ninety_days_ago = datetime.utcnow() - timedelta(days=90)

    prices_last_90_days = [
        p.price for p in results if p.collected_at >= ninety_days_ago
    ]

    lowest_last_90_days = min(prices_last_90_days) if prices_last_90_days else None

    latest_price = results[-1].price

    below_average_percent = ((average_price - latest_price) / average_price) * 100

    below_average_percent = round(below_average_percent, 2)

    if below_average_percent > 10:
        price_status = 'excelente oportunidade'
    elif below_average_percent > 5:
        price_status = 'boa oportunidade'
    elif below_average_percent >= 0:
        price_status = 'preço normal'
    else:
        price_status = 'preço acima da média'

    return {
        'lowest_price': lowest_price,
        'average_price': round(average_price, 2),
        'lowest_last_90_days': lowest_last_90_days,
        'current_price': latest_price,
        'below_average_percent': below_average_percent,
        'price_status': price_status
    }

def get_price_history(product_id: int, session: Session):

    statement = (
        select(PriceHistory)
        .where(PriceHistory.product_id == product_id)
        .order_by(PriceHistory.collected_at)
    )

    results = session.exec(statement).all()

    history = [
        {
            'date': p.collected_at.isoformat(),
            'price': p.price
        }
        for p in results
    ]

    return history

def get_product_store_prices(product_id: int, session: Session):

    statement = (
        select(Store.name, PriceHistory.price, PriceHistory.collected_at)
        .join(PriceHistory, PriceHistory.store_id == Store.id)
        .where(PriceHistory.product_id == product_id)
        .order_by(PriceHistory.collected_at.desc())
    )

    results = session.exec(statement).all()

    store_prices = {}

    for store_name, price, collected_at in results:
        if store_name not in store_prices:
            store_prices[store_name] = price

    response = [
        {'store': store, 'price': price}
        for store, price in store_prices.items()
    ]

    return response

def get_best_deal(product_id: int, session: Session):

    statement = (
        select(Store.name, PriceHistory.price)
        .join(PriceHistory, PriceHistory.store_id == Store.id)
        .where(PriceHistory.product_id == product_id)
        .order_by(PriceHistory.price)
    )

    results = session.exec(statement).all()

    if not results:
        return None
    
    best_store, best_price = results[0]

    return {
        'store': best_store,
        'price': best_price
    }