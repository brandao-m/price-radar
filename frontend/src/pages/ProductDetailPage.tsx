import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"

import PriceChart from "../components/PriceChart"

import { getPriceHistory } from "../services/pricesService"

import type { PriceHistory } from "../types/PriceHistory"


function ProductDetailPage() {

  const { id } = useParams()

  const [history, setHistory] = useState<PriceHistory[]>([])

  useEffect(() => {

    async function fetchHistory() {

      if (!id) return

      const data = await getPriceHistory(id)

      setHistory(data)

    }

    fetchHistory()

  }, [id])


  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Produto {id}
      </h1>

      <PriceChart data={history} />

    </MainLayout>
  )
}

export default ProductDetailPage