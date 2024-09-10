import Buttons from '../components/Buttons'
import Footer from "@/components/Footer";
import Link from "next/link";
import NavLogo from "@/components/NavLogo";
import AdminLogin from '@/components/Auth/AdminLogin';

export default function Home() {
  return (
    <main className="w-full text-black overflow-x-hidden">
      <div className="w-full h-screen space-y-7 flex flex-col justify-between">
        <nav className="w-full border-b border-b-gray-300">
          <div className="flex justify-between items-center h-14 w-full px-10">
            <NavLogo/>
            
            <div className="buttons flex gap-x-3 items-center">
              <Buttons style={'text-blue-500 border border-blue-500 bg-white text-sm px-5'} text={'New Hospital'}/>
              <Link href={'/institutions'}>
                <Buttons style={'bg-[#6b32eb] text-white text-sm'} text={'Institutions'}/>
              </Link>
            </div>
          </div>
        </nav>

        <div className="mx-auto w-5/6  border border-gray-200 rounded-md py-7">
          <div className=" space-y-2">
            <h3 className="text-xl font-bold text-center">Generate Healthcare Management System</h3>
            <p className='text-center text-sm'>Select an institution from the form directory 
              below to generate its corresponding healthcare management system
            </p>

            <AdminLogin/>
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  );
}
