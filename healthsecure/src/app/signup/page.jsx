import Buttons from '../../components/Buttons'
import Footer from '@/components/Footer'
import NavLogo from '@/components/NavLogo'
import Signup from '@/components/Auth/SignupForm'
import Link from 'next/link'


const signup= () => {

  return (
    <div className='text-black h-screen space-y-5 overflow-hidden flex justify-between flex-col'>
        <div className="w-full ">
            <nav className="w-full border-b border-b-gray-300">
            <div className="flex justify-between items-center h-14 w-full px-10">
                <NavLogo/>
                <div className="buttons">
                    <Link href={'/futa'}>
                        <Buttons style={'bg-[#6b32eb] text-white text-sm'} text={'Login'}/>
                    </Link>
                </div>
            </div>
            </nav>
        </div>

        <div className='mx-auto w-5/6 ' >
            <Signup/>
        </div>

        <div className='w-5/6 m-auto space-y-3'>
            <h3 className='text-lg font-bold'>Select Roles</h3>
            <div>
                <div className='flex justify-start flex-wrap items-stretch gap-x-5 min-h-fit'>
                    {[{name:'Doctor', text:'Access patient records and manage appointments'}, 
                    {name:'Patient', text: 'View your medical history and book appointments'},
                    {name:'Lab Technician/Pharmacist', text: 'View patients needs and monitor inventory'},
                    // {name: 'Admin', text:'Manage systen settings and user roles'}
                ].map((e, index)=>(
                        <div key={index} className="w-[23%] space-y-1 break-words border border-gray-400 rounded-md shadow-md p-3 py-4  flex flex-col justify-center">
                            <h4 className='text-base font-medium'>{e.name}</h4>
                            <p className='text-gray-700 text-sm'>{e.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        <Footer/>
    </div>
  )
}

export default signup