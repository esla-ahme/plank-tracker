import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'day', headerName: 'Day', width: '80 ' },

  { field: 'time', headerName: 'Time (s)', type: 'number', width: '150' }
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