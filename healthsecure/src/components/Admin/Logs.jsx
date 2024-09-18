import { data } from '@/constants/LogsData'
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
                <li className='w-[15%] max-w-[15%]'>Activity</li>
                <li className='max-w-[12%] w-1/6'>Actions</li>
                </ul>
            </div>

            <div className="table-body w-full border-b-gray-400">
                <div className='w-full max-h-[60vh] overflow-y-auto overflow-x-hidden no-scrollbar'>
                    {data.map((e, index)=>
                        <ul className={`flex w-full justify-between items-center py-2 text-center text-sm border-y border-y-gray-100 px-5 ${e.category.includes('Security')? 'text-red-500': ''}`} key={index}>
                            <li className={`w-[10%] max-w-[10%]  `}>{e.category}</li>
                            <li className='max-w-[16%] w-1/6 place-self-start'>{e.sub_category}</li>
                            <li className='w-[10%] max-w-[10%]'>{e.date_time}</li>
                            <li className='w-[15%] max-w-[15%]  overflow-hidden text-left'>{e?.activity.length < 30 ? e?.activity : e?.activity.slice(0, 30 - 3) + '...'}</li>
                            <li className='max-w-[12%] w-1/6'><Buttons text={'Details'} style={'bg-gray-500 text-white rounded-none tracking-tighter font-medium px-1'}/></li>
                        </ul>
                    )}
                </div>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Logs