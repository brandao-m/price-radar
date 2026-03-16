import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"

import PriceChart from "../components/PriceChart"
import StoresList from "../components/StoresList"
import BestDealCard from "../components/BestDealCard"

import { getPriceHistory } from "../services/pricesService"
import { getStorePrices } from "../services/storesService"
import { getBestDeal } from "../services/dealsService"
import { getStatistics } from "../services/statisticsService"
import { getProduct } from "../services/productsService"

import type { PriceHistory } from "../types/PriceHistory"
import type { StorePrice } from "../types/StorePrice"
import type { BestDeal } from "../types/BestDeal"
import type { Statistics } from "../types/Statistics"
import type { Product } from "../types/Product"


function ProductDetailPage() {

  const { id } = useParams()

  const [history, setHistory] = useState<PriceHistory[]>([])
  const [stores, setStores] = useState<StorePrice[]>([])
  const [bestDeal, setBestDeal] = useState<BestDeal | null>(null)
  const [stats, setStats] = useState<Statistics | null>(null)
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {

    async function fetchHistory() {

      if (!id) return

      const data = await getPriceHistory(id)
      setHistory(data)

      const storeData = await getStorePrices(id)
      setStores(storeData)

      const dealData = await getBestDeal(id)
      setBestDeal(dealData)

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

  <div className="flex gap-8 items-start mb-10">

    {product.image_url && (

      <img
        src={product.image_url}
        alt={product.name}
        className="w-64 rounded-xl shadow-md"
      />

    )}

    <div>

      <h1 className="text-4xl font-bold text-slate-800">
        {product.name}
      </h1>

      <p className="text-slate-500 mt-2 text-lg">
        {product.category}
      </p>

    </div>

  </div>

)}

      <PriceChart data={history} />
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <StoresList stores={stores} />

        <BestDealCard deal={bestDeal} />

     </div>

{stats && (

  <div className="bg-white p-4 rounded-xl shadow mt-6">

    <h2 className="text-lg font-semibold mb-2">
      Análise de preço
    </h2>

    <p>Preço atual: R$ {stats.current_price}</p>

    <p>Média histórica: R$ {stats.average_price}</p>

    <p>Status: {stats.price_status}</p>

  </div>

)}
    </MainLayout>
  )
}

export default ProductDetailPage