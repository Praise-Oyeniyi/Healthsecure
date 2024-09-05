import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import Patients from '@/components/Patients';


const Dashboard = () => {
  return (
    <div className='h-screen w-screen overflow-hidden'>
        <div className='h-full'>
          <div className='flex items-start'>
            <SideBar/>
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