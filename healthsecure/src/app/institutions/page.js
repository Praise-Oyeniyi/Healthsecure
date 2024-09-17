import Buttons from '../../components/Buttons'
import NavLogo from '@/components/NavLogo'
import Image from 'next/image'
import { FaLink } from "react-icons/fa";
import React from 'react'
import Link from 'next/link';
import Footer from '@/components/Footer';

const Institutions = () => {
  return (
    <div className='w-full space-y-10'>
        <div className="w-full ">
                <nav className="w-full border-b border-b-gray-300">
                <div className="flex justify-between items-center h-14 w-full px-10">
                    <NavLogo/>
                    <div className="buttons">
                        <Link href={'/'}>
                            <Buttons style={'bg-[#6b32eb] text-white text-sm'} text={'New Hospital'}/>
                        </Link>
                    </div>
                </div>
                </nav>
            </div>
        <div className='w-5/6 mx-auto space-y-7'>
            <div className='space-y-2 text-center'>
                <h3 className="text-xl font-bold">Choose Your Institution</h3>
                <p>Please select your affiliated institution from the list below to proceed with the login process.</p>
            </div>

            <div className='flex flex-wrap justify-start items-stretch'>
                <Link href={'/futa'} className='w-[23%]'>
                    <div className='w-full space-y-2 border border-gray-200 shadow hover:shadow-sm rounded-md py-4 px-3 group'>
                        {/* <Image
                            src={''}
                        /> */}
                        <div className='flex justify-between items-center' >
                            <h3 className='text-sm font-bold tracking-wider'>FUTA</h3>
                            <FaLink className='invisible group-hover:visible ease-in-out duration-150  transition-all' size={17} color={'#374151'}/>
                        </div>
                        <p className='text-sm'>Federal University Of Technology, Akure</p>
                    </div>
                </Link>
            </div>
        </div>

        <div className='fixed bottom-0 w-full left-0 z-30'>
            <Footer/>
        </div>
    </div>
  )
}

export default Institutions