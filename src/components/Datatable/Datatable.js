import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
//51 62 65 80 68 85 92 62
const columns = [
  { field: 'day', headerName: 'Day', width: '60 ' },

  { field: 'time', headerName: 'Time (s)', type: 'number', width: '120' }
];


const Datatable = ({ show, data, removeData }) => {
  const rows = data.map((d, i) => {

    return { id: i, day: i + 1, time: d }
  })

  const handleDelete = (params) => {

    console.log(params)
    const newData = data.slice()

    newData.splice(params.id, 1); // 2nd parameter means remove one item only

    removeData(newData)
  }
  return (
    <div style={{ display: `${show ? 'block' : 'none'}`, width: 100 + '%', height: '300px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowDoubleClick={(params) => handleDelete(params)}
      />
      <small>Double click on any row to delete</small>
    </div>
  )
}

export default Datatable