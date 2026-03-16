import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

import type { PriceHistory } from '../types/PriceHistory'

interface Props {
    data: PriceHistory[]
}

function PriceChart({ data }: Props) {

    return (
        <div className="bg-white p-4 rounded-xl shadow">

      <h2 className="text-lg font-semibold mb-4">
        Histórico de preços
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#7c3aed"
            strokeWidth={2}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
    )
}

export default PriceChart