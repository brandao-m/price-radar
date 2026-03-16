import type { StorePrice } from "../types/StorePrice"

interface Props {
  stores: StorePrice[]
}

function StoresList({ stores }: Props) {

  const sortedStores = [...stores].sort((a, b) => a.price - b.price)

  const bestPrice = sortedStores[0]?.price

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4">
        Ofertas
      </h2>

      <ul className="space-y-3">

        {sortedStores.map((store) => {

          const isBestDeal = store.price === bestPrice

          return (

            <li
              key={store.store}
              className={`flex items-center justify-between p-4 rounded-lg border transition
              ${isBestDeal ? "bg-green-50 border-green-300" : "bg-white border-gray-200"}`}
            >

              {/* logo da loja */}
              <div className="flex items-center">

                {store.logo_url && (
                  <img
                    src={store.logo_url}
                    alt={store.store}
                    className="h-8 w-auto object-contain"
                  />
                )}

              </div>

              {/* preço + botão */}
              <div className="flex items-center gap-4">

                <span
                  className={`text-lg font-bold
                  ${isBestDeal ? "text-green-600" : "text-slate-800"}`}
                >
                  R$ {store.price}
                </span>

                <a
                  href={store.store_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  Ir à loja
                </a>

              </div>

            </li>

          )

        })}

      </ul>

    </div>
  )
}

export default StoresList