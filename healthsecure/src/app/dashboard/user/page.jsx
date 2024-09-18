import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import { FaUser,FaCalendarCheck } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import User from '@/components/User';


const Dashboard = () => {
  const items = [
    {
      menu:"My Dashboard",
      icon:<FaUser/>
    },
    {
      menu:"Schedule Appointment",
      icon:<FaCalendarCheck/>
    },
    {
      menu:"Request Refill",
      icon:<GiMedicines/>
    },
  ]

  return (
    <div className='h-screen w-screen overflow-hidden'>
        <div className='h-full'>
          <div className='flex items-start'>
            <SideBar sidebarItems={items}/>
            <TopBar user={'User'}/>
          </div>

          <div className='ml-[16.666%] h-full w-5/6 py-10 px-7'>
            <User/>
          </div>

        </div>
        
        <div className='fixed bottom-0 w-full  z-30'>
            <Footer/>
        </div>
    </div>
  )
}

export default Dashboard