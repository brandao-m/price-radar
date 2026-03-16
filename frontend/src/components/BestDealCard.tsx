import type { BestDeal } from "../types/BestDeal"

interface Props {
  deal: BestDeal | null
}

function BestDealCard({ deal }: Props) {

  if (!deal) return null

  return (
    <a
      href={deal.store_url}
      target="_blank"
      rel="noreferrer"
      className="block bg-green-50 border border-green-200 p-12 rounded-xl hover:bg-green-100 transition text-center"
    >

      <h2 className="text-lg font-semibold mb-4">
        Melhor oferta
      </h2>

      {deal.logo_url && (
        <img
          src={deal.logo_url}
          alt={deal.store}
          className="h-14 mx-auto object-contain mb-4"
        />
      )}

      <p className="text-2xl font-bold text-green-700">
        R$ {deal.price}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        {deal.store}
      </p>

    </a>
  )
}

export default BestDealCard