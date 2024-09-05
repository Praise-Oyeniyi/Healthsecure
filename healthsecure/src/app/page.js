import Buttons from '@/components/Buttons'
import Dropdown from "@/components/Dropdown";
import Footer from "@/components/Footer";
import Link from "next/link";
import NavLogo from "@/components/NavLogo";

export default function Home() {
  return (
    <main className="w-full text-black">
      <div className="w-full h-screen space-y-10 flex flex-col justify-between">
        <nav className="w-full border-b border-b-gray-300">
          <div className="flex justify-between items-center h-16 w-full px-10">
            <NavLogo/>
            
            <div className="buttons flex gap-x-3 items-center">
              <Buttons style={'text-blue-500 border border-blue-500 bg-white text-sm px-5'} text={'New Hospital'}/>
              <Link href={'/institutions'}>
                <Buttons style={'bg-[#6b32eb] text-white text-sm'} text={'Sign In'}/>
              </Link>
            </div>
          </div>
        </nav>

        <div className="mx-auto w-5/6 ">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">Generate Healthcare Management System</h3>
            <p>Select an institution from the form directory 
              below to generate its corresponding healthcare management system
            </p>

            <div className="w-3/6 mx-auto flex justify-center items-center gap-x-5 pt-3">
              <div className="w-5/6 h-12 rounded-xl outline-none border border-gray-300 px-3">
                <Dropdown/>
              </div>
              <Buttons style={'bg-[#6b32eb] text-white w-auto'} text={'Generate'}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  );
}
