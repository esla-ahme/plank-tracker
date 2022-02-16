import React from 'react'
import plank from '../assets/plank256.png'
import AddData from './AddData'
import Datatable from './Datatable/Datatable'
const SideBar = ({ data, addData }) => {
  return (
    <div style={{ width: 250 + 'px', background: '#eed' }}>
      <h2>Plank Tracker</h2>
      <img className='plank-img' src={plank} width={150} alt='Man plays plank' />

      <small>Planking every day will lead <br /> to deep ab muscle strength</small>
      <AddData data={data} addData={addData} />
      <Datatable data={data} removeData={addData} show={true}></Datatable>
    </div>


  )
}

export default SideBar