"use client"

import {AiFillApple} from 'react-icons/ai';
import Image from 'next/image';
import { faq} from '@/components/animateImages';
import PromoTag from '../../../public/Images/Promo-tag.svg';
import PromoBottle from '../../../public/Images/promo-bottle.svg';
import PromoR from '../../../public/Images/Promo-right.svg';
import Play from '../../../public/Images/google-play.svg';
import FaqA from '../../../public/Images/faq-answer.svg';
import FaqQ from '../../../public/Images/faq-question.png';
import { useState } from 'react';

export default function Faq() {
  const [faqIndex, faqActiveIndex] = useState(0);
    return(
        <div>
            <section className="relative h-[53rem]">
              <div className="faq">
                <div className="faq-inner">
                  <div className="w-3/6">
                    <h3 className='faq-head '>FAQs.</h3>
                    <div className="questions h-screen space-y-5 overflow-auto pr-3">{
                      faq.map((items, index)=>(
                        <div key={index} className={`question-holder ${index===faqIndex? 'bg-black text-white': ''}`} onClick={()=> faqActiveIndex(index)}>
                          <h3>{items.question}</h3>
                          <div className=''>
                            <Image alt='faq-icon' src={FaqQ} width={25} height={25} className={`${index===faqIndex? 'opacity-100':'opacity-0'}`}/>

                          </div>
                        </div>
                      ))
                    }</div>
                  </div>

                    <div className="faq-answers overflow-hidden rounded-xl w-3/6">
                        <h3 className='faq-head'>Ans.</h3>
                        <div className="questions-right ">
                            <Image alt='faq-icon' src={FaqA} width={25} height={25} className='mb-5'/>
                            {faq[faqIndex].answer}
                        </div>
                    </div>
                </div>
              </div>
            </section>

            <section className="footer-images ">
              <div className="flex-center gap-x-6 pb-16 items-start h-[57rem]">
                <div className="footer-cta flex-column justify-between items-start bg-p-green rounded-2xl pt-10 pb-2 w-3/6 h-full">
                  <div className=' space-y-5 h-full'>
                    <h3 className='heading-large pb-5 px-10 text-white leading-tight tracking-tight'>Place your <br/>order in seconds</h3>

                    <button className="playstore app-btn bg-white text-[#0C513F] mx-10">
                    <Image 
                      src={Play}
                      alt='google-play-icon'
                      width={18}
                      className=' mr-2'
                    />
                    Download on Google Play
                    </button>
                    <button className='applestore app-btn bg-white text-[#0C513F] mx-10'>
                      <AiFillApple size={20} className='mr-2'/>
                      Download on App Store
                    </button>
                  </div>

                  <div className="promo flex-center items-end pl-10 gap-x-5">
                    <div className='space-y-3 pb-8 w-auto'>
                      <Image alt='bottle' width={100} height={100} src={PromoTag} className='w-36'/>
                      <div className='bg-p-orange flex-center justify-start p-3 px-6 space-x-2  rounded-lg  border-[3px] w-fit mt-3' >
                        <span className='h-4 w-4 bg-p-green rounded-full border-[3px] border-black'></span>
                        <h4 className='text-lg font-bold tracking-wider'> CDNWEB</h4>
                      </div>

                      <h4 className='text-white font-medium text-lg'>Get <span className='text-p-orange font-semibold'>₦300 off</span> your first order when you use this promo code!</h4>

                    </div>


                    <div className="promo-image pr-2 w-2/6 min-h-full">
                      <Image alt='bottle' width={100} height={100} src={PromoBottle} className='min-h-full w-full'/>
                    </div>
                  </div>
                </div>

                <div className='w-3/6 h-full rounded-2xl overflow-hidden'>
                  <Image alt='order image' width={100} height={100} src={PromoR} className='w-full h-full object-cover'/>
                </div>
              </div>
            </section>
        </div>
    )


}