import type { BestDeal } from "../types/BestDeal"

interface Props {
  deal: BestDeal | null
}

function BestDealCard({ deal }: Props) {

  if (!deal) return null

  return (
    <div className="bg-green-50 border border-green-200 p-4 rounded-xl">

      <h2 className="text-lg font-semibold mb-2">
        Melhor oferta
      </h2>

      <p>
        {deal.store}
      </p>

      <p className="text-xl font-bold text-green-700">
        R$ {deal.price}
      </p>

    </div>
  )
}

export default BestDealCard