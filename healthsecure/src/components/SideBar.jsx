import React from 'react'
import NavLogo from './NavLogo'
import { FaUser,FaCalendarCheck } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { RiLogoutBoxFill } from "react-icons/ri";


const SideBar = () => {
  return (
    <div className='Sidebar absolute left-0 top-0 w-1/6 border-r border-r-gray-200 h-full  space-y-4 cursor-pointer'>
        <div className='h-14 flex items-center pl-7'>
            <NavLogo/>
        </div>
        <div>
            <ul className='text-base text-gray-700 font-medium'>
                <li className='h-14 pl-7 flex items-center gap-x-2 text-[#6b32eb] font-semibold bg-[#6a32eb0c]'><span><FaUser/></span>Patients</li>
                <li className='h-14 pl-7 flex items-center gap-x-2 hover:bg-[#6a32eb0c]'><span><FaCalendarCheck/></span>Appointments</li>
                <li className='h-14 pl-7 flex items-center gap-x-2 hover:bg-[#6a32eb0c]'><span><GiMedicines/></span>Medicines</li>
            </ul>
        </div>

        <div className='relative top-[40%] pl-7 '>
            <h3 className='text-base font-semibold text-gray-700 flex items-center gap-x-2 hover:text-[#6b32eb]'><span><RiLogoutBoxFill/></span>Logout</h3>
        </div>
        
    </div>
  )
}

export default SideBar