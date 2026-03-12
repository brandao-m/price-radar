from sqlmodel import Session, select
from app.models.price_history import PriceHistory
from datetime import datetime, timedelta

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

    below_average_percent = ((average_price - latest_price) / average_price)

    return {
        'lowest_price': lowest_price,
        'average_price': round(average_price, 2),
        'lowest_last_90_days': lowest_last_90_days,
        'current_price': latest_price,
        'below_average_percent': round(below_average_percent, 2)
    }