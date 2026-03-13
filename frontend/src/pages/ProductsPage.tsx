import { useEffect, useState } from "react"
import type { Product } from "../types/Product"
import { getProducts } from "../services/productsService"
import ProductCard from "../components/ProductCard"

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
  <div className="max-w-6xl mx-auto p-6">

    <h1 className="text-3xl font-bold mb-6">
      Produtos
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

  </div>
)
}

export default ProductsPage