import api from './api'
import type { StorePrice } from '../types/StorePrice'

export async function getStorePrices(productId: string): Promise<StorePrice[]> {

    const response = await api.get(`/products/${productId}/stores`)

    return response.data
}