'use client'
import React, { useState } from 'react'
import Buttons from '@/components/buttons'
import { FaRegEyeSlash, FaEye  } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { fromSchema } from '@/constants/schemas/authSchema'
import { login } from '@/app/institutions/login/actions';


const LoginForm = () => {
    const [see, setSee] = useState(false)
    const {
        register,
        control,
        handleSubmit,
        formState:{errors},
    } = useForm({
        resolver:yupResolver(fromSchema)
    });




  return (
    <form onSubmit={handleSubmit((data)=> login(data))} contol={control}>
        <div className='w-3/6 space-y-5 relative'>
            <div className='space-y-4 relative'>
                <h3 className='text-lg font-bold'>Login into your account</h3>
                <div>
                    <input type='Email' {...register("email")}  className={`w-full h-12 border border-gray-300 rounded-md bg-white text-sm px-5 outline-none ${errors.email && 'border-red-500 '}`} placeholder="Email"/>
                    <h6 className={`text-red-500 text-xs text-right font-bold tracking-wide ${errors.email && 'pt-1'}`}>
                        {errors && errors.email?.message}
                    </h6>
                </div>
                


                <div className='w-full relative'>
                    <div className={`w-full absolute left-[95%] top-[50%] -translate-y-[50%] cursor-pointer z-10 ${errors.password && '-translate-y-[100%]'}`} 
                        onClick={()=>setSee(!see)}
                        >
                        {see? <FaRegEyeSlash size={15} color="#374151"/> :<FaEye size={15} color="#374151"/> }
                    </div>
                    <input 
                        type={see?'text':'password'} 
                        {...register("password")}  
                        className={`w-full rounded-md border border-gray-300 h-12 relative  bg-white text-sm px-5 outline-none 
                        ${errors.password && 'border-red-500 '}`} placeholder="Enter Password" 
                    />
                    <h6 className={`text-red-500 text-xs text-right font-bold tracking-wide ${errors.password && 'pt-1'}`}>
                        {errors.password?.message} 
                    </h6>

                    
                </div>
                
            </div>

            <div className='gap-x-5 flex items-center'>
                <Buttons style={'bg-[#6b32eb] text-white'} text={'Login'} />
                <p className='text-black text-sm italic hover:underline hover:text-red-300 transition-all ease-in'>Forgot password?</p>
            </div>
            <Buttons text={'Login with Google'} style={'w-full text-white text-sm tracking-wide bg-gray-700'}/>
        </div>
    </form>
  )
}

export default LoginForm