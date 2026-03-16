import type { Product } from "../types/Product"
import { Link } from "react-router-dom"

interface Props {
  product: Product
}

function ProductCard({ product }: Props) {
  return (
    <Link to={`/products/${product.id}`}>

      <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

        {product.image_url && (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-4">

          <h2 className="text-lg font-semibold text-slate-800">
            {product.name}
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {product.category}
          </p>

        </div>

      </div>

    </Link>
  )
}

export default ProductCard