import React from 'react'
import {
  LineChart, CartesianGrid, XAxis,
  YAxis, Tooltip, Legend, Line, ResponsiveContainer
} from 'recharts'

const Graph = ({ data }) => {
  const detData = data.map((d, i) => {
    return { day: i + 1, time: d }
  })
  return (
    <div className='graph'>
      <ResponsiveContainer  >
        <LineChart data={detData}
          margin={{ top: 25, right: 60, left: 5, bottom: 25 }}>

          <CartesianGrid strokeDasharray="3 3" fill="#242635" />
          <XAxis dataKey="day" />

          <YAxis domain={['dataMin-25', 'dataMax+25']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="time" stroke="#62aabd" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph