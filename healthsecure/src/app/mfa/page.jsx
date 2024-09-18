'use client'
import Buttons from '../../components/Buttons'
import NavLogo from '@/components/NavLogo'
import React from 'react'
import Footer from '@/components/Footer'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {mfaSchema } from '@/constants/schemas/authSchema'
import { useRouter } from 'next/navigation'


const Mfa = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState:{errors},
} = useForm({
    resolver:yupResolver(mfaSchema)
});



  return (
    <div className='text-black h-screen space-y-5 overflow-hidden flex justify-between flex-col'>
        <div className="w-full ">
            <nav className="w-full border-b border-b-gray-300">
                <div className="flex justify-center items-center h-14 w-full px-10">
                    <NavLogo/>
                </div>
            </nav>
        </div>
        <div className='text-center w-5/6 mx-auto'>
            <div className='space-y-3 '>
                <h3 className='text-xl font-semibold'>Login 2-Factor Authentication</h3>
                <p className='text-base text-gray-700'>Please Enter the Six digit Code sent your registered Email</p>
            </div>

              <form onSubmit={handleSubmit((data)=> router.push('/dashboard/user'))} control={control} 
                className="flex mt-10 justify-center items-center space-x-4 w-full">

                <div className='w-2/6'>
                  <input type='text' {...register("code")}  
                    className={`border h-12 w-full px-2 border-gray-300 bg-white text-sm outline-none ${errors.code && 'border-red-500 '}`} 
                    placeholder="Enter 6-digit Code"/>

                </div>

                <Buttons text={'Send'} style={'bg-[#6b32eb] text-white w-auto !h-12 rounded-none mt-0'}/>
              </form>
              <h6 className={`text-red-500 text-xs text-center font-bold tracking-wide ${errors.code && 'pt-1'}`}>
                {errors && errors.code?.message}
              </h6>
              {errors.code && 
                <div className='flex items-center gap-x-5 justify-center mx-auto mt-3'>
                  <h4 className="italic cursor-pointer">Try another method?</h4>
                  <Buttons text={'Resend Code'} style={'bg-[#6b32eb] text-white rounded-none'}/>
                </div>  
              }
        </div>



        <Footer/>
    </div>
  )
}

export default Mfa