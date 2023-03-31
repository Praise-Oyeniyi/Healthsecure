"use client"

import Image from "next/image";
import Play from '../../../public/Images/google-play.svg';
import Apple from '../../../public/Images/apple.svg';
import { useRef, useState } from "react";
import { Trying } from "../animateImages";




export default function TryApp(){
  const  [tryApp, settryApp] = useState(Trying[0])
  const bgChecker = useRef('')

  const setApp = (num) =>{
    settryApp(Trying[num]);
    bgCheck(num);
  }

  const bgCheck = (num) =>{
    if(num === 0){
      bgChecker.current = '';
    }
    else if ( num === 1){
      bgChecker.current ='left-[53%] translate-x-[-50%] w';
    }
    else if(num ===2){
      bgChecker.current = 'left-[68.5%] w-28';
    }
  }

    return(
        <div className="threeinone-inner w-[60%] mx-auto text-center space-y-10 py-16">
        <div className="button-holder bg-bg-body nav-rounded relative w-[45%] mx-auto text-lg ">
          <div className="btns flex-center z-10 relative">
            <button onClick={()=> setApp(0)}>Customer</button>
            <button onClick={()=> setApp(1)}>Vendors</button>
            <button onClick={()=> setApp(2)}>Riders</button>
          </div>
          <div className={`btn-active ${bgChecker.current}`}>
          </div>
        </div>


        <div className="threeinone-text">
          <div className="space-y-5">
            <h3 className='heading-large'>{tryApp.header}</h3>
            <p className='font-normal text-[22px] leading-snug w-4/6 mx-auto px-2'>
              {tryApp.text}
            </p>
            <div className="appstore-icons flex-center justify-center space-x-2">
              <div className='app-icon-holder  '>
                <Image 
                  src={Play}
                  alt='google-play-icon'
                  width={100}
                  height={100}
                />
              </div>
              <div className='app-icon-holder'>
                <Image 
                  src={Apple}
                  alt='applestore-icon'
                  width={100}
                  height={100}
                  className='-mt-1'
                />
              </div>
              
            </div>

            <div className='w-3/6 mx-auto'>
              <Image 
                src={tryApp.image}
                alt='pastery image'
                width={100}
                height={100}
                className='mx-auto w-full'
              />
            </div>
          </div>
        </div>
      </div>

    )
}