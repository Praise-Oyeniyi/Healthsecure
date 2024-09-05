"use server"
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const Patients = () => {
    const rows = [
    { id: 1, fullName: 'Snow Jon', age: 35, email:'gmail.com', phone:'09023121647' },
    { id: 2, fullName: 'Lannister Cersei', age: 42, email:'gmail.com', phone:'09023341647' },
    { id: 3, fullName: 'Lannister Jaime', age: 45, email:'gmail.com', phone:'09023561647'},
    { id: 4, fullName: 'Stark Arya', age: 16, email:'gmail.com',phone:null },
    { id: 5, fullName: 'Targaryen Daenerys', age: null, email:'gmail.com', phone:'09023781647',},
    { id: 6, fullName: 'Melisandre', firstName: null, age: 150, email:'gmail.com',phone:null },
    { id: 7, fullName: 'Clifford Ferrara', age: 44 , email:'gmail.com', phone:null},
    { id: 8, fullName: 'Frances Rossini', age: 36, email:'gmail.com',phone:null },
    { id: 9, fullName: 'Roxie Harvey', age: 65, email:'gmail.com', phone:'09023901647', },
    ];

    const columns = [
        { field: 'id', headerName: 'Patient ID', width: 100 },
        {
            field: 'fullName',
            headerName: 'Name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,
          //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        { field: 'email', headerName: 'Email', width: 100 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 70,
        },
        {
        field: 'phone',headerName: 'Phone',type: 'number',width: 200,
        },
        { field: 'status', headerName: 'Status', width: 130 },
        
    ];
    
    const paginationModel = { page: 0, pageSize: 5 };


  return (
    <div>
        <div className="patient-outer space-y-4">
            <h3 className='text-lg font-bold'>Patient list</h3>
            <div className="table">
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        // checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
        </div>
    </div>
  )
}

export default Patients


