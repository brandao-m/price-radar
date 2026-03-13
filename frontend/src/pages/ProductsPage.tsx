import { useEffect, useState } from "react"
import type { Product } from "../types/Product"
import { getProducts } from "../services/productsService"

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
    <div>
      <h1>Produtos</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default ProductsPage