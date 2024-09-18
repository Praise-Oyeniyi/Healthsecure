"use server"
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { dummyData } from '@/constants/data';

const Patients = () => {
    const rows = dummyData.filter((e) => e.role === 'patient')
    .map((e) => ({
      id: e.school_id,
      fullName: e.name,
      age: '35',
      email: e.email,
      phone: '09023121647',
      emergency_contact: e.emergency_contact?.name ? 'Present' : 'None'
    }));


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
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 70,
        },
        {
        field: 'phone',headerName: 'Phone',type: 'number',width: 150,
        },
        { field: 'emergency_contact', headerName: 'Emergency Contact', width: 200 },
        
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


