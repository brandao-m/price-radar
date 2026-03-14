import { useParams } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

function ProductDetailPage() {

  const { id } = useParams()

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-4">
        Produto {id}
      </h1>

    </MainLayout>
  )
}

export default ProductDetailPage