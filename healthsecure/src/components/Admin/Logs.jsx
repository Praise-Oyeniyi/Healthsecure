import React from 'react'
import Buttons from '../Buttons'

const Logs = () => {
  return (
    <div className="patient-outer space-y-4">
        <h3 className='text-lg font-bold'>System Logs</h3>

        <div className="table-outer w-full ">
            <div className='table w-full mx-auto border border-gray-300 rounded-md '>
            <div className="table-header w-full bg-gray-200 border-b border-b-gray-400 px-5">
                <ul className='flex w-full justify-between gap-x-10 py-2 font-bold text-center text-base'>
                <li className='w-[10%] max-w-[10%]'>Category</li>
                <li className='w-1/6 max-w-[16%] '>Sub-category</li>
                <li className='w-[10%] max-w-[10%]'>Date-Time</li>
                <li className='w-[10%] max-w-[10%]'>Activity</li>
                <li className='max-w-[12%] w-1/6'>Actions</li>
                </ul>
            </div>

            <div className="table-body w-full border-b-gray-400 px-5">
                <div className='w-full'>
                    <ul className='flex w-full justify-between py-2 text-center text-sm'>
                        <li className='w-[10%] max-w-[10%] '>Security</li>
                        <li className='max-w-[16%] w-1/6 place-self-start'>User Login</li>
                        <li className='w-[10%] max-w-[10%]'>Doctor</li>
                        <li className='w-[10%] max-w-[10%]  overflow-hidden'>CPU usage at 75%</li>
                        <li className='max-w-[12%] w-1/6'><Buttons text={'Details'} style={'bg-gray-500 text-white rounded-none tracking-tighter font-medium px-1'}/></li>
                    </ul>

                    <ul className='flex w-full justify-between py-2 text-center text-sm '>
                        <li className='w-[10%] max-w-[10%] '>System Health</li>
                        <li className='max-w-[16%] w-1/6 place-self-start'>CPU Usage</li>
                        <li className='w-[10%] max-w-[10%]'>Student</li>
                        <li className='w-[10%] max-w-[10%] overflow-hidden'>User John Doe logged in</li>
                        <li className='max-w-[12%] w-1/6'><Buttons text={'Details'} style={'bg-gray-500 text-white rounded-none tracking-tighter font-medium px-1'}/></li>
                    </ul>

                    <ul className='flex w-full justify-between py-2 text-center text-sm'>
                        <li className='w-[10%] max-w-[10%] text-red-500'>Errors</li>
                        <li className='max-w-[16%] w-1/6 place-self-start'>Database connection</li>
                        <li className='w-[10%] max-w-[10%]'>Nurse</li>
                        <li className='w-[10%] max-w-[10%] overflow-hidden'>CPU usage at 75%</li>
                        <li className='max-w-[12%] w-1/6'><Buttons text={'Details'} style={'bg-gray-500 text-white rounded-none tracking-tighter font-medium px-1'}/></li>
                    </ul>

                </div>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Logs