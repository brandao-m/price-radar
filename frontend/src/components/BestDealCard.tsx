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
      className="block bg-green-50 border border-green-200 p-4 rounded-xl hover:bg-green-100 transition"
    >
      <h2 className="text-lg font-semibold mb-3">
        Melhor oferta
      </h2>

      <div className="flex items-center gap-3">
        {deal.logo_url && (
          <img
            src={deal.logo_url}
            alt={deal.store}
            className="h-8"
          />
        )}

        <span>{deal.store}</span>
      </div>

      <p className="text-xl font-bold text-green-700 mt-2">
        R$ {deal.price}
      </p>
    </a>
  )
}

export default BestDealCard