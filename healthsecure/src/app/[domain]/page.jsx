import React from 'react'
import Buttons from '../../components/Buttons'
import Footer from '@/components/Footer'
import NavLogo from '@/components/NavLogo'
import LoginForm from '@/components/Auth/LoginForm'
import Link from 'next/link'


const login = ({ params }) => {
    const { domain } = params;

  return (
    <div className='text-black h-screen space-y-5 overflow-hidden flex justify-between flex-col'>
        <div className="w-full ">
            <nav className="w-full border-b border-b-gray-300">
            <div className="flex justify-between items-center h-14 w-full px-10">
                <div className='flex items-center italic justify-start'>
                    <h4 className='bg-[#6b32eb] p-1 px-2 text-white tracking-wide uppercase font-medium'>{domain}</h4>
                    <div className='bg-gray-700 text-white p-[0.15rem] px-2 tracking-wide uppercase font-medium'>
                        <NavLogo/>
                    </div>
                </div>

                <div className="buttons">
                    <Link href={'signup'}>
                        <Buttons style={'bg-[#6b32eb] text-white text-sm'} text={'SignUp'}/>
                    </Link>
                </div>
            </div>
            </nav>
        </div>

        <div className='mx-auto w-5/6 ' >
            <LoginForm/>
        </div>

        <div className='w-5/6 m-auto space-y-3'>
            <h3 className='text-lg font-bold'>Select Your Role</h3>
            <div>
                <div className='flex justify-between flex-wrap items-stretch gap-x-5 min-h-fit'>
                    {[{name:'Doctor', text:'Access patient records and manage appointments'}, 
                    {name:'Patient', text: 'View your medical history and book appointments'},
                    {name:'Lab Technician/Pharmacist', text: 'View patients needs and monitor inventory'},
                    {name: 'Admin', text:'Manage systen settings and user roles'}].map((e, index)=>(
                        <div key={index} className="w-[23%] space-y-1 break-words border border-gray-400 rounded-md shadow-md p-3 py-4  flex flex-col justify-center">
                            <h4 className='text-base font-medium'>{e.name}</h4>
                            <p className='text-gray-700 text-sm'>{e.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        <Footer/>
    </div>
  )
}

export default login