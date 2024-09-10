'use client'
import React, { useContext } from 'react'
import NavLogo from './NavLogo'
import { RiLogoutBoxFill } from "react-icons/ri";
import { SideContextProvider } from '@/contexts/SideBarContext';


const SideBar = ({sidebarItems}) => {
    const {data, setData} = useContext(SideContextProvider)

  return (
    <div className='Sidebar absolute left-0 top-0 w-1/6 border-r border-r-gray-200 h-full  space-y-4 cursor-pointer'>
        <div className='h-14 flex items-center pl-7'>
            <NavLogo/>
        </div>
        <div>
            <ul className='text-base text-gray-700 font-medium'>
                {sidebarItems.map((e,index)=>(
                    <li key={index} onClick={()=>setData(index)} className={`h-14 pl-7 flex items-center gap-x-2 ${index==data? 'text-[#6b32eb] bg-[#6a32eb0c]':'hover:bg-[#6a32eb0c] '} font-semibold `}><span>{e.icon}</span>{e.menu}</li>
                ))}
            </ul>
        </div>

        <div className='relative pl-7 '>
            <h3 className='text-base font-semibold text-red-500 flex items-center gap-x-2 hover:text-[#6b32eb]'><span><RiLogoutBoxFill/></span>Logout</h3>
        </div>
        
    </div>
  )
}

export default SideBar