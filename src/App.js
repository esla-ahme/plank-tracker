import { useEffect, useState } from 'react';
import './App.css';
import Graph from './components/Graph';
import SideBar from './components/SideBar';

function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    if (localStorage.getItem('plank-track-data') !== undefined) {
      const oldData = JSON.parse(localStorage.getItem('plank-track-data'))
      setData(oldData)
    }

  }, [])
  useEffect(() => {
    localStorage.setItem('plank-track-data', JSON.stringify(data))

  }, [data])
  return (

    <div className="App">
      <SideBar data={data} addData={setData} />

      <Graph data={data} />
    </div>
  );
}

export default App;
