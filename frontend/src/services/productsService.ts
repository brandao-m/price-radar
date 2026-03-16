import api from "./api"
import type { Product } from "../types/Product"

export async function getProducts(): Promise<Product[]> {
  const response = await api.get("/products")
  return response.data
}

export async function getProduct(productId: string): Promise<Product> {
  const response = await api.get(`/products/${productId}`)
  return response.data
}