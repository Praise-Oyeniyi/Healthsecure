import React from 'react'
import { FaUser} from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";



const TopBar = () => {
  return (
    <div className="topBar h-14 w-5/6 shadow-gray-200 shadow-sm cursor-pointer sticky top-0 left-1/4">
        <div className="h-full w-full flex justify-between items-center text-2xl text-blue-500 ">
        <h3 className='pl-5 text-base text-black '>{'{User}'}</h3>

        <div className='flex items-center gap-x-5'>
            <CiBellOn/>
            <IoSettingsOutline/>
            <div className='h-14 w-14 rounded-full flex items-center'>
            <FaUser/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TopBar