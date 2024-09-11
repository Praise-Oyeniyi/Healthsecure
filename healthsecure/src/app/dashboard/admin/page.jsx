'use client'
import React, { useContext } from 'react'
import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import { FaUser, FaStethoscope } from "react-icons/fa";
import { MdSick } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import User from '@/components/Admin/User'
import Logs from '@/components/Admin/Logs'
import Patients from '@/components/Admin/Patients'
import Doctor from '@/components/Admin/Doctor'
import { SideContextProvider } from '@/contexts/SideBarContext';



const Admin = () => {
  const {data, setData} = useContext(SideContextProvider);

  const items = [
    {
      menu:"All Users",
      icon:<FaUser/>,
      page:<User/>
    },
    {
      menu:"Patients",
      icon:<MdSick />,
      page:<Patients/>
    },
    {
      menu:"Doctors",
      icon:<FaStethoscope />,
      page:<Doctor/>
    },
    {
      menu:"System Logs",
      icon:<GrSystem />,
      page:<Logs/>
    },
  ]
  

  return (
    <div className='h-screen w-screen overflow-hidden'>
        <div className='h-full'>
          <div className='flex items-start'>
            <SideBar sidebarItems={items}/>
            <TopBar/>
          </div>

          <div className='ml-[16.666%] h-full w-5/6 py-10 px-7'>
           {items[data]?.page}
          </div>

        </div>
        
        <div className='fixed bottom-0 w-full  z-30'>
            <Footer/>
        </div>
    </div>
  )
}

export default Admin


