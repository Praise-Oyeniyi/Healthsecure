import { dummyData } from '@/constants/data'
import React from 'react'
import Buttons from '../Buttons'

const Patients = () => {
    const pat = dummyData.filter((e)=>e.role === 'patient');

  return (
    <div className="patient-outer space-y-4">
        <h3 className='text-lg font-bold'>User Accounts</h3>

        <div className="table-outer w-full ">
        <div className='table w-full mx-auto border border-gray-300 rounded-md '>
            <div className="table-header w-full bg-gray-200 border-b border-b-gray-400 px-5">
            <ul className='flex w-full justify-between gap-x-10 py-2 font-bold text-center text-base'>
                <li className='w-[10%]'>Matric NO</li>
                <li className='w-[10%]'>User</li>
                <li className='w-1/6'>Email</li>
                <li className='w-[10%]'>Role</li>
                <li className='w-[10%]'>Delete</li>
            </ul>
            </div>

            <div className="table-body w-full border-b-gray-400 px-5">
              <div className='w-full border-y border-y-gray-200 max-h-[60vh] overflow-y-auto overflow-x-hidden no-scrollbar'>
                {pat.map((e, index) =>(
                    <ul key={index} className='flex w-full justify-between py-2 text-center text-sm'>
                      <li className='w-[10%]'>{e.school_id}</li>
                      <li className='w-[10%] '>{e.name}</li>
                      <li className='max-w-1/6 place-self-start'>{e.email}</li>
                      <li className={`w-[10%] capitalize ${e.role === 'doctor'? 'text-green-500': e.role=== 'nurse'? 'text-red-500':'text-gray-700'} `}>{e.role}</li>
                      <li className='w-[10%]'><Buttons text={'Delete'} style={'bg-red-700 text-white rounded-none '}/></li>
                    </ul>
                ))}
              </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Patients