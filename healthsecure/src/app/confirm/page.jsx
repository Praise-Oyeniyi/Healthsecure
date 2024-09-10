import Buttons from '@/components/Buttons'
import Footer from '@/components/Footer'
import NavLogo from '@/components/NavLogo'
import Link from 'next/link'
import React from 'react'

const Confirm = () => {
    
  return (
    <div className='text-black h-screen space-y-5 overflow-hidden flex justify-between flex-col'>
        <div className="w-full ">
            <nav className="w-full border-b border-b-gray-300">
                <div className="flex justify-center items-center h-14 w-full px-10">
                    <NavLogo/>
                </div>
            </nav>
        </div>
        <div className='text-center space-y-10 w-3/6 mx-auto'>
            <div className='space-y-5 '>
                <h3 className='text-xl font-semibold'>Email Confirmation</h3>
                <p className='text-base text-gray-700'>Please Confirm your email to continue using Healthsecure</p>
            </div>
            <div className='text-center flex w-full justify-center'>
                <Link href={'//www.gmail.com'} rel="noopener noreferrer" target="_blank">
                    <Buttons text={'Confirm Email'} style={'bg-[#6b32eb] text-white w-auto h-16 rounded-sm w-5/6'}/>
                </Link>
            </div>


        </div>



        <Footer/>
    </div>
  )
}

export default Confirm
