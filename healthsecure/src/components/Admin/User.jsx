import React from 'react'
import Buttons from '../Buttons'

const User = () => {
  return (
    <div className="patient-outer space-y-4">
        <h3 className='text-lg font-bold'>User Accounts</h3>

        <div className="table-outer w-full ">
        <div className='table w-full mx-auto border border-gray-300 rounded-md '>
            <div className="table-header w-full bg-gray-200 border-b border-b-gray-400 px-5">
            <ul className='flex w-full justify-between gap-x-10 py-2 font-bold text-center text-base'>
                <li className='w-[10%]'>User</li>
                <li className='w-1/6'>Email</li>
                <li className='w-[10%]'>Role</li>
                <li className='w-[10%]'>Edit</li>
                <li className='w-[10%]'>Delete</li>
            </ul>
            </div>

            <div className="table-body w-full border-b-gray-400 px-5">
            <div className='w-full border-y border-y-gray-200'>
                <ul className='flex w-full justify-between py-2 text-center text-sm'>
                <li className='w-[10%] '>Praise</li>
                <li className='max-w-1/6 place-self-start'>oyeniyipraise@gmail.com</li>
                <li className='w-[10%] text-green-500'>Doctor</li>
                <li className='w-[10%]'><Buttons text={'Edit'} style={'bg-gray-500 text-white rounded-none ml-3'}/></li>
                <li className='w-[10%]'><Buttons text={'Delete'} style={'bg-red-700 text-white rounded-none '}/></li>
                </ul>

                <ul className='flex w-full justify-between py-2 text-center text-sm'>
                <li className='w-[10%] '>Praise</li>
                <li className='max-w-1/6 place-self-start'>oyeniyipraise@gmail.com</li>
                <li className='w-[10%]'>Student</li>
                <li className='w-[10%]'><Buttons text={'Edit'} style={'bg-gray-500 text-white rounded-none ml-3'}/></li>
                <li className='w-[10%]'><Buttons text={'Delete'} style={'bg-red-700 text-white rounded-none '}/></li>
                </ul>

                <ul className='flex w-full justify-between py-2 text-center text-sm'>
                <li className='w-[10%] '>Praise</li>
                <li className='max-w-1/6 place-self-start'>oyeniyipraise@gmail.com</li>
                <li className='w-[10%] text-orange-500'>Nurse</li>
                <li className='w-[10%]'><Buttons text={'Edit'} style={'bg-gray-500 text-white rounded-none ml-3'}/></li>
                <li className='w-[10%]'><Buttons text={'Delete'} style={'bg-red-700 text-white rounded-none '}/></li>
                </ul>

            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default User