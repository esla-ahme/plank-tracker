import React, { useState } from 'react'

const AddData = ({ data, addData }) => {
  const [period, setPeriod] = useState(0)
  const handleData = () => {
    const newData = data.slice()
    newData.push(+period)
    addData(newData)
    setPeriod('')
  }
  return (
    <div className='add-data-container'>
      <div className='flex add-data'>
        <label>Day {data.length + 1}  </label>
        <input type='number' value={period} onKeyUp={e => {
          console.log(e.code)
          if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            handleData()
          }
        }} onChange={(e) => setPeriod(e.target.value)} />
        <button onClick={handleData} >
          +
        </button>
      </div>
      <small className='error'>empty</small>
    </div>
  )
}

export default AddData