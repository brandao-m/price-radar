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


import type { PriceHistory } from "../types/PriceHistory"
import type { StorePrice } from "../types/StorePrice"
import type { BestDeal } from "../types/BestDeal"
import type { Statistics } from "../types/Statistics"



function ProductDetailPage() {

  const { id } = useParams()

  const [history, setHistory] = useState<PriceHistory[]>([])
  const [stores, setStores] = useState<StorePrice[]>([])
  const [bestDeal, setBestDeal] = useState<BestDeal | null>(null)
  const [stats, setStats] = useState<Statistics | null>(null)

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

    }

    fetchHistory()

  }, [id])


  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Produto {id}
      </h1>

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