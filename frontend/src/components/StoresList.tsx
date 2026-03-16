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

      <ul className="space-y-2">

        {stores.map((store) => (

          <li
            key={store.store}
            className="flex justify-between border-b pb-2"
          >

            <span>{store.store}</span>

            <span className="font-semibold">
              R$ {store.price}
            </span>

          </li>

        ))}

      </ul>

    </div>
  )
}

export default StoresList