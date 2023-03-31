import Pack from '../../../public/Images/footer-pack.svg';
import Logo from '../../../public/Images/chow-logo.svg';
import Star from '../../../public/Images/footer-star.svg';
import Badge from '../../../public/Images/footer-logo.svg';
import Twitter from '../../../public/Images/footer-t-icon.svg';
import Facebook from '../../../public/Images/footer-f-icon.svg';
import Linkedin from '../../../public/Images/footer-l-icon.svg';
import Instagram from '../../../public/Images/footer-i-icon.svg';
import Chat from '../../../public/Images/chat.svg';
import {FiArrowRight} from 'react-icons/fi'
import Image from 'next/image';
import Faq from './Faq';




export default function Footer() {
    return(
    <footer className='bg-black w-full '>
          <div className="footer-inner w-[90%] mx-auto relative">
            <Faq/>

            <section className="main-footer">
              <div className="footer-top flex-center">
                <div className='flex items-end space-x-2'>
                  <Image alt='bottle' width={40} src={Star} className='self-stretch'/>

                  <h3 className='text-5xl font-bold text-white pr-2 tracking-tighter word'>Cool stuff only</h3>
                  <h6 className='text-s-orange-2 text-base font-medium'>Subscribe to our newsletter</h6>
                </div>


                <div className="footer-pack self-end relative">

                  <Image alt='plastic bag for food' width={100} height={100} src={Pack} className='relative -bottom-5'/>
                </div>
              </div>
              
              <form action="#" className='footer-newsletter border-y border-[#ffffff28]  flex-center'>
                <div className="news-input w-full" >
                  <input type="email" placeholder='yourname@email.com' className='accent-bg-body w-5/6 text-lg font-bold bg-[#0000] outline-none text-[#ffffff62]' required/>
                </div>

                
                <div className="submit w-[25%] border-l border-[#ffffff28] py-7 flex-center justify-center cursor-pointer">
                  <button type="submit">
                    <FiArrowRight size={40} className='text-[#9747FF] font-extrabold'/>
                  </button>
                </div>
              </form>


              <div className="footer-bottom">
                <div className="footer-bottom-inner flex-center justify-start items-stretch">
                  <div className="footer-b-left flex-column items-start justify-between w-[40%] border-r border-b border-[#ffffff28] py-10">
                    <Image alt='bottle' width={100} height={100} src={Badge} className='w-32'/>
                    <div className=" text-white flex-center justify-start text-4xl font-bold mr-5">
                      <Image 
                        src={Logo}
                        alt='chowdeck-logo'
                        width={45}
                        height={45}
                        className='mr-2 mt-1'
                      />
                      Chowdeck
                    </div>
                  </div>


                  <div className="footer-b-right w-full">
                    <div className='flex-center w-full'>
                      <div className='footer-link-outer'>
                        <h4 className='footer-link-head'>COMPANY</h4>
                        <ul className=' footer-links'>
                          <li>Customer</li>
                          <li>Vendors</li>
                          <li>Riders</li>
                          <li>Storefront</li>
                          <li>About</li>
                          <li>Careers</li>
                          <li>FAQs</li>
                          <li>Blog</li>
                          <li>Contact</li>
                          <li>Terms of Use</li>
                          <li>Privacy Policy</li>
                        </ul>
                      </div>

                      <div className='footer-link-outer border-l border-[#ffffff28]'>
                        <h4 className='footer-link-head'>CUISINES NEAR YOU</h4>
                        <ul className='footer-links'>
                          <li>Pasta near me</li>
                          <li>Rice near me</li>
                          <li>Fast food near me</li>
                          <li>Asian food in Lagos</li>
                          <li>African food in Lagos</li>
                          <li>Breakfast menu in Lagos</li>
                          <li>Fitfam stores in Lagos</li>
                          <li>American food in Lagos</li>
                          <li>Pastries in Lagos</li>
                          <li>Salad in Lagos</li>
                          <li>Fruits in Lagos</li>
                        </ul>
                      </div>

                      <div className='footer-link-outer border-l border-[#ffffff28]'>
                        <h4 className='footer-link-head'>POPULAR</h4>
                        <ul className='footer-links'>
                          <li>Food deliver</li>
                          <li>Surulere</li>
                          <li>Ogudu</li>
                          <li>Yaba</li>
                          <li>Ikeja</li>
                          <li>Lekki</li>
                          <li>King Glab</li>
                          <li>Korede Spaghetti</li>
                          <li>Iyan Aladuke</li>
                          <li>Food Fusion</li>
                          <li>Belefull</li>
                        </ul>
                      </div>
                    </div>
                    <div className='social border-y border-[#ffffff28] w-full'>
                      <div className="social-top ">
                        <h4 className='social-top-icons '><span><Image src={Twitter} alt='star-icon' width={20}/></span> Twitter</h4>
                        <h4 className='social-top-icons border-l border-[#ffffff28] py-7'><span><Image src={Instagram} alt='star-icon' width={20}/></span>Instagram</h4>
                      </div>
                      <div className="social-bottom social-top border-b-0">
                        <h4 className='social-top-icons'><span><Image src={Facebook} alt='star-icon' width={20}/></span> Facebook</h4>
                        <h4 className='social-top-icons border-l border-[#ffffff28] py-7'><span><Image src={Linkedin} alt='star-icon' width={20}/></span> Linkedin</h4>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <button className="live-chat bg-p-green fixed bottom-5 right-5 w-12 h-12 rounded-full">
                <div className='w-full relative flex-center justify-center'>
                  <Image src={Chat} alt='star-icon' width={20}/>
                </div>
              </button>

              <div className="copy py-10 text-xs font-medium text-[#ffffff3b] text-center ">
                <h6 className='hover:text-[#ffffff98] cursor-pointer w-fit mx-auto duration-200 ease-in-out transition-all'>
                  © All Rights Reserved. 2022, Chowdeck clone Logistics Inc. Design Replicated By @Olatoba & Coded @Praise_Oyeniyi
                </h6>
                </div>
            </section>
          </div>

        </footer>
    )
}