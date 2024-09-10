'use client'
import React, { useState } from 'react'
import Buttons from '../../components/Buttons'
import { FaRegEyeSlash, FaEye  } from "react-icons/fa";
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { signSchema } from '@/constants/schemas/authSchema'
import { signup } from '@/app/institutions/login/actions';


const Signup = () => {
    const [see, setSee] = useState(false)
    const {
        register,
        control,
        handleSubmit,
        formState:{errors},
    } = useForm({
        resolver:yupResolver(signSchema)
    });




  return (
    <form onSubmit={handleSubmit((data)=> console.log(data))} control={control}>
        <div className='w-5/6 space-y-5 relative'>
            <div className='relative'>
                <h3 className='text-lg font-bold'>Select a Role & Create new Account</h3>

                <div className='w-full'>
                    <div className='pt-2'>
                        <div className='flex gap-x-7 text-sm items-center'>
                            <input type="radio" id="doctor" name="fav_language" value="doctor" className='accent-gray-800' {...register("role")}/>
                            <label htmlFor="doctor">Doctor</label><br/>
                            <input type="radio" id="nurse" name="fav_language" value="nurse" className='accent-gray-800' {...register("role")}/>
                            <label htmlFor="nurse">Nurse</label><br/>
                            <input type="radio" id="student" name="fav_language" value="student" className='accent-gray-800' {...register("role")}/>
                            <label htmlFor="student">Student</label>

                            <label className={`text-red-500 text-xs text-right font-bold tracking-wide`}>
                                {errors.role?.message} 
                            </label>
                        </div>
                    </div>
                    <div className='w-full flex items-center gap-x-5'>
                        <div className='w-full'>
                            <label className='labels'>Email*</label>
                            <input type='Email' {...register("email")}  className={`admin-form border border-gray-300  ${errors.email && 'border-red-500 '}`} placeholder="Email"/>
                            <label className={`text-red-500 text-xs text-right font-bold tracking-wide ${errors.email && 'pt-1'}`}>
                                {errors && errors.email?.message}
                            </label>
                        </div>
                    
                        <div className='w-full relative'>
                            <label className='labels'>Password*</label>
                            <div className={`w-full absolute left-[95%] top-[50%] translate-y-[35%] cursor-pointer z-10 ${errors.password && '-translate-y-[70%]'}`} 
                                onClick={()=>setSee(!see)}
                                >
                                {see? <FaRegEyeSlash size={15} color="#374151"/> :<FaEye size={15} color="#374151"/> }
                            </div>
                            <input 
                                type={see?'text':'password'} 
                                {...register("password")}  
                                className={`admin-form  border border-gray-300 relative
                                ${errors.password && 'border-red-500 '}`} placeholder="Enter Password" 
                            />
                            <label className={`text-red-500 text-xs text-right font-bold tracking-wide ${errors.password && 'pt-1'}`}>
                                {errors.password?.message} 
                            </label>
                        </div>
                    </div>

                    <div className='w-full flex items-center gap-x-5'>
                        <div className='w-full'>
                            <label className='labels'>Name*</label>
                            <input type={'text'} {...register("name")}  className={`admin-form border border-gray-300 ${errors.name && 'border-red-500 '}`} placeholder='Please enter your name'/>
                            <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.password && 'pt-1'}`}>
                                {errors.name?.message} 
                            </label>
                        </div>

                        <div className='w-full'>
                            <label className='labels'>Matric No</label>
                            <input type={'text'} {...register("matric")}  className={`admin-form uppercase border border-gray-300 ${errors.matric && 'border-red-500 '}`} placeholder='eg; CYS/25/1997'/>
                            <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.matric && 'pt-1'}`}>
                                {errors.matric?.message} 
                            </label>
                        </div>
                    </div>
                </div>
                
                
            </div>

            <div className='gap-x-5 flex items-center'>
                <Buttons style={'bg-[#6b32eb] text-white'} text={'Create Account'} />
            </div>
            <div className='w-3/6'>
                <Buttons text={'Signup with Google'} style={'w-full text-white text-sm tracking-wide bg-gray-700'}/>
            </div>
        </div>
    </form>
  )
}

export default Signup