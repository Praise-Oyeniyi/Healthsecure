'use client'
import Buttons from '../../../../components/Buttons'
import React from 'react'

const Adminerror = () => {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className = 'space-y-3'>
              <h3 className='text-red-500 font-semibold text-xl'>You need an additional admin to be able to perform such operation!</h3>
              <Buttons style={'bg-[#6b32eb] text-white text-base flex mx-auto rounded-none py-7'} text={'Add New Admin'}/>
            </div>
        </div>
    </div>
  )
}

export default Adminerror