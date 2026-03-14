import type { Product } from "../types/Product"
import { Link } from "react-router-dom"

interface Props {
  product: Product
}

function ProductCard({ product }: Props) {
  return (
  <Link to={`/products/${product.id}`}>

    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer">

      {product.image_url && (
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}

      <h2 className="text-lg font-semibold text-gray-800">
        {product.name}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {product.category}
      </p>

    </div>

  </Link>
)
}

export default ProductCard