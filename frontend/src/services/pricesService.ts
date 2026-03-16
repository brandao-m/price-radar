import api from './api'
import type { PriceHistory } from '../types/PriceHistory'

export async function getPriceHistory(productId: string): Promise<PriceHistory[]> {

    const response = await api.get(`/products/${productId}/price-history`)

    return response.data
}