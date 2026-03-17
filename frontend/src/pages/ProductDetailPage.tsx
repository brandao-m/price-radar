import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"

import PriceChart from "../components/PriceChart"
import StoresList from "../components/StoresList"
import ShareButtons from "../components/ShareButtons"

import { getPriceHistory } from "../services/pricesService"
import { getStorePrices } from "../services/storesService"
import { getStatistics } from "../services/statisticsService"
import { getProduct } from "../services/productsService"
import { formatPrice } from "../utils/formatPrice"

import type { PriceHistory } from "../types/PriceHistory"
import type { StorePrice } from "../types/StorePrice"
import type { Statistics } from "../types/Statistics"
import type { Product } from "../types/Product"


function ProductDetailPage() {

  const { id } = useParams()

  const [history, setHistory] = useState<PriceHistory[]>([])
  const [stores, setStores] = useState<StorePrice[]>([])
  const [stats, setStats] = useState<Statistics | null>(null)
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {

    async function fetchHistory() {

      if (!id) return

      const data = await getPriceHistory(id)
      setHistory(data)

      const storeData = await getStorePrices(id)
      setStores(storeData)

      const statsData = await getStatistics(id)
      setStats(statsData)

      const productData = await getProduct(id)
      setProduct(productData)

    }

    fetchHistory()

  }, [id])


  return (
    <MainLayout>

      {product && (

  <div className="grid md:grid-cols-2 gap-10 mb-10 items-start">

    {/* Imagem do produto */}
    <div>

      {product.image_url && (

        <img
          src={product.image_url}
          alt={product.name}
          className="w-full max-w-sm rounded-xl shadow-md"
        />

      )}

    </div>

    {/* SOBRE O PRODUTO */}
    <div>

      <h1 className="text-4xl font-bold text-slate-800">
        {product.name}
      </h1>

      <p className="text-slate-500 mt-2 text-lg">
        {product.category}
      </p>

      <div className="mt-6">
        <StoresList stores={stores} />
        <ShareButtons />
      </div>

    </div>

  </div>

)}

      <div className="grid md:grid-cols-2 gap-6 mt-10">

  <div className="bg-white p-4 rounded-xl shadow">
    <PriceChart data={history} />
  </div>

  {stats && (

    <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-center">

      <h2 className="text-lg font-semibold mb-4">
        Análise de preço
      </h2>

      <p className="text-sm text-slate-500">
        Menor preço histórico
      </p>

      <p className="text-xl font-bold">
        {formatPrice(stats.lowest_price)}
      </p>

      <p className="text-sm text-slate-500 mt-3">
        Média
      </p>

      <p className="text-lg font-semibold">
        {formatPrice(stats.average_price)}
      </p>

      <p className="mt-4 text-green-600 font-medium">
        {stats.price_status}
      </p>

    </div>

  )}

</div>

    </MainLayout>
  )
}

export default ProductDetailPage