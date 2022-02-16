import React, { useState } from 'react'

const AddData = ({ data, addData }) => {
  const [period, setPeriod] = useState('')
  const handleData = () => {
    const newData = data.slice()
    newData.push(+period)
    addData(newData)
    setPeriod('')
  }
  return (
    <div className='flex'>
      <label>Day {data.length + 1}  </label>
      <input type='text' value={period} onChange={(e) => setPeriod(Math.round(e.target.value))} />
      <button onClick={handleData}>
        +
      </button>

    </div>
  )
}

export default AddData