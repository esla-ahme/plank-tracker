import React from 'react'
import plank from '../assets/plank256.png'
import AddData from './AddData'
import Datatable from './Datatable/Datatable'

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";


const SideBar = ({ data, addData, state, toggleDrawer }) => {

  const list = (anchor) => (
    <Box
      role="presentation"
    >
      <div className='sidebar'  >
        <h2>Plank Tracker</h2>
        <img className='plank-img' src={plank} width={150} alt='Man plays plank' />

        <small>Planking every day will lead <br /> to deep ab muscle strength</small>
        <AddData data={data} addData={addData} />
        <Datatable data={data} removeData={addData} show={true}></Datatable>
      </div>
    </Box>
  );

  return (

    <div>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>


  )
}

export default SideBar