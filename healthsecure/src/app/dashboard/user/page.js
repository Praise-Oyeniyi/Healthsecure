import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import Patients from '@/components/Patients';
import { FaUser,FaCalendarCheck } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";


const Dashboard = () => {
  const items = [
    {
      menu:"Patients",
      icon:<FaUser/>
    },
    {
      menu:"Appointments",
      icon:<FaCalendarCheck/>
    },
    {
      menu:"Medicines",
      icon:<GiMedicines/>
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
            <Patients/>
          </div>

        </div>
        
        <div className='fixed bottom-0 w-full  z-30'>
            <Footer/>
        </div>
    </div>
  )
}

export default Dashboard