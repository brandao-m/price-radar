import api from './api'
import type { Statistics } from '../types/Statistics'

export async function getStatistics(productId: string): Promise<Statistics> {

    const response = await api.get(`/products/${productId}/statistics`)

    return response.data
}