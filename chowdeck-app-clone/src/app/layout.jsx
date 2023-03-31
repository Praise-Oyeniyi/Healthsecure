
import './globals.css'
import Image from 'next/image';
import Logo from '../../public/Images/chow-logo.svg';
import Cart from '../../public/Images/cart.svg';


export const metadata = {
  title: 'Chowdeck website clone coded by Praise_Oyeniyi.',
  description: 'A Chowdeck app clone coded by Praise_Oyeniyi a Frontend Engineer from Lagos, Nigeria and Design Replicated by @Olatoba',
}

export default function RootLayout({ children }) {
  


  return (
    <html lang="en"> 
      <body className={`bg-bg-body w-full text-base overflow-x-hidden font-plus-sans  max-w-[2000pxu] mx-auto`}>
          <nav className='w-full font-medium text-lg my-10 sticky z-50 top-3 transition-all duration-200 ease-in-out'>
            <div className='flex-center w-[90%] mx-auto'>
              <div className="z-10 nav-logo flex-center justify-center items bg-p-green nav-rounded py-2 px-4 text-white">
                <Image 
                  src={Logo}
                  alt='chowdeck-logo'
                  width={14}
                  height={14}
                  className='mr-1'
                />
                Chowdeck
              </div>

              <ul className='nav-links flex space-x-8 nav-rounded px-10 z-20'>
                <li>Company</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>

              <div className="nav-vendors flex-center justify-start space-x-2">
                <div>
                  <h4 className='nav-rounded py-2 px-6'>Customers</h4>
                  <ul className='hidden'>
                    <li className='nav-rounded'>Vendors</li>
                    <li className='nav-rounded'>Riders</li>
                  </ul>
                </div>
                <button className="nav-cart p-2 nav-rounded w-11">
                  <Image 
                    src={Cart}
                    alt='chowdeck-logo'
                    width={100}
                    height={100}
                    // className='mr-2 mt-1'
                  />
                </button> 
              </div>
            </div>
            
          </nav>
          {children}
                
          </body>
          
    </html>
  )
}
