import type { StorePrice } from "../types/StorePrice"

interface Props {
  stores: StorePrice[]
}

function StoresList({ stores }: Props) {

  return (
    <div className="bg-white p-4 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4">
        Lojas
      </h2>

      <ul className="space-y-3">

        {stores.map((store) => (

          <li
            key={store.store}
            className="flex items-center justify-between border-b pb-3"
          >

            <div className="flex items-center gap-3">

              {store.logo_url && (
                <img
                  src={store.logo_url}
                  alt={store.store}
                  className="h-8 w-auto object-contain"
                />
              )}

            </div>

            <a
              href={store.store_url}
              target="_blank"
              className="font-semibold text-blue-600 hover:underline"
            >
              R$ {store.price}
            </a>

          </li>

        ))}

      </ul>

    </div>
  )
}

export default StoresList