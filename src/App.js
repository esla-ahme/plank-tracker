import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Graph from './components/Graph';
import SideBar from './components/SideBar';

function App() {

  const [data, setData] = useState([])
  //drawer
  const [state, setState] = useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  useEffect(() => {
    //read data from localstorage if found
    if (localStorage.getItem('plank-track-data') !== undefined) {
      const oldData = JSON.parse(localStorage.getItem('plank-track-data'))
      setData(oldData)
    }

  }, [])
  useEffect(() => {
    // save data to local storage once it changed
    localStorage.setItem('plank-track-data', JSON.stringify(data))
  }, [data])
  return (

    <div className="App">
      <nav className='flex'>
        <button className='show-side' onClick={toggleDrawer('left', true)}><span>|||</span></button>

        <h1>Plank Tracker</h1>
      </nav>
      <div className='flex page'>
        <SideBar data={data} state={state} toggleDrawer={toggleDrawer} addData={setData} />
        <Graph data={data} />
      </div>
    </div>
  );
}

export default App;
