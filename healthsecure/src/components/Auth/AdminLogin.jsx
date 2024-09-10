'use client'
import { fromSchema } from '@/constants/schemas/authSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import Buttons from '../Buttons'
import Dropdown from '../Dropdown'
import { FaRegEyeSlash, FaEye  } from "react-icons/fa";
import { newSignup} from '@/app/institutions/login/actions'
import { UserContextProvider } from '@/contexts/UsersContext'
import { useRouter } from 'next/navigation'

const AdminLogin = () => {
    const [see, setSee] = useState(false)
    const {AdminArray} = useContext(UserContextProvider)
    const router = useRouter()

    const {
        register,
        control,
        setValue,
        handleSubmit,
        formState:{errors},
    } = useForm({
        mode: "onChange",
        resolver:yupResolver(fromSchema)
    });

    const handleRuns = (data)=>{
        
       
        router.push("/confirm")
    }    



  return (
    <form className="w-5/6 mx-auto" control={control} onSubmit={handleSubmit((data)=>handleRuns(data))} >
        <div className='form-outer'>
        <h3 className='font-semibold text-lg text-center'>School Data</h3>
        <div className='flex items-center gap-x-10 justify-between'>
            <div className='w-full'>
                <label className='labels'>Institution*</label>
                <div className={`admin-form rounded-md border border-gray-300 overflow-hidden ${errors.select && 'border-red-500 '}`}>
                    <Dropdown register={register} setValue={setValue}/>
                </div>
                <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.password && 'pt-1'}`}>
                        {errors.select?.message} 
                </label>
            </div>

            <div className='w-full'>
                <label className='labels'>Abbrevation*</label>
                <input type={'text'} {...register("abbrev")}  className={`admin-form rounded-md border  ${errors.abbrev && 'border-red-500 '}`} placeholder='e.g; FUTA'/>
                <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.password && 'pt-1'}`}>
                        {errors.abbrev?.message} 
                </label>
            </div>
        </div>

        <h3 className='font-semibold text-lg text-center pt-5 pb-1'>Admin Info</h3>
        <div className='space-y-5'>
            <div className='flex items-center gap-x-10 justify-between'>
                <div className='w-full'>
                    <label className='labels'>Admin Name*</label>
                    <input type={'text'} {...register("name")}  className={`admin-form rounded-md border border-gray-300 ${errors.name && 'border-red-500 '}`} placeholder='Please enter your name'/>
                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.password && 'pt-1'}`}>
                        {errors.name?.message} 
                    </label>
                </div>

                <div className='w-full'>
                    <label className='labels'>Email*</label>
                    <input type={'text'} {...register("email")}  className={`admin-form rounded-md border border-gray-300 ${errors.email && 'border-red-500 '}`} placeholder='Please enter your email'/>
                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.password && 'pt-1'}`}>
                        {errors.email?.message} 
                    </label>
                </div>
            </div>

            <div className='flex items-center gap-x-10 justify-between'>
                <div className='w-full'>
                    <label className='labels'>ID Number*</label>
                    <input type={'text'} {...register("id")}  className={`admin-form rounded-md border border-gray-300 ${errors.id && 'border-red-500 '}`} placeholder='Please enter your name'/>
                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.id && 'pt-1'}`}>
                        {errors.id?.message} 
                    </label>
                </div>

                <div className='w-full relative'>
                    <label className='labels'>Password*</label>
                    <input 
                        type={see?'text':'password'}  
                        {...register("password")}  
                        className={`admin-form relative rounded-md border border-gray-300 ${errors.password && 'border-red-500 '}`} 
                        placeholder='Please enter your email'/>

                    <div className={`w-full absolute left-[95%] top-[50%] translate-y-[35%] cursor-pointer z-10 ${errors.password && '-translate-y-[70%]'}`} 
                        onClick={()=>setSee(!see)}
                        >
                        {see? <FaRegEyeSlash size={13} color="#374151"/> :<FaEye size={13} color="#374151"/> }
                    </div>
                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.password && 'pt-1'}`}>
                        {errors.password?.message} 
                    </label>
                </div>
            </div>
        </div>
        
        </div>

        <div className='w-full flex justify-center mt-5'>
            <Buttons style={'bg-[#6b32eb] text-white w-auto'} text={'Generate'}/>
        </div>
    </form>
  )
}

export default AdminLogin