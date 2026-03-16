import api from './api'
import type { BestDeal } from '../types/BestDeal'

export async function getBestDeal(productId: string): Promise<BestDeal> {
    
    const response = await api.get(`/products/${productId}/best-deal`)

    return response.data
}