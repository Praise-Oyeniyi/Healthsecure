"use client"
import Image from 'next/image';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { useState, useRef, useLayoutEffect } from 'react';
import { Animate } from '../animateImages';



export default function AnimateFood(){
    const [current, setCurrent] = useState(0);
    const [progressValue, setProgressValue] = useState(100),
       bgChange = useRef({bg:'bg-[#038B5C]', text: 'text-[#038B5C] bg-[#02C27F]', textActive: 'text-[#02c27f] bg-[#038B5C] '}),
       bgChange4 = useRef(Animate[0].iconFour);

    var progressStartValue = useRef(100);
    

    const nextPrev = ()=> { 
      setCurrent(current => current ===4? current =0: current + 1);
      progressStartValue.current = 0;
      setProgressValue(100);
    },
    prevNext= () =>{
      setCurrent(current => current ===0? current =4: current - 1 );
      progressStartValue.current = 0;
      setProgressValue(100);
    };

    

    const progress = ()=> {
      progressStartValue.current > 0? setProgressValue(progressStartValue.current--): setProgressValue(progressStartValue.current =100);
    }

    useLayoutEffect(() => {    
      const smooth = setInterval(()=>progress(), 100);  
      const intervalId = setInterval(()=>nextPrev(), 10000);
      

      return ()=>{ 
        clearInterval(smooth);
        clearInterval(intervalId);
      }

    }, [current]);

      const bgChanger =(num)=>{
        switch (num) {
          case 0:
            bgChange.current = {bg:'bg-[#038B5C]', text: 'text-[#038B5C] bg-[#02C27F]', textActive: 'text-[#02c27f] bg-[#038B5C] '};
            break;
          case 1:
            bgChange.current = {bg:'bg-[#8C77EC]', text: 'text-[#8C77EC] bg-[#FFD1E2]', textActive: 'bg-[#8C77EC] text-[#FFD1E2]'};
            break;
          case 2:
            bgChange.current = {bg:'bg-[#FFC501]', text: 'text-[#FFC501] bg-[#000000]', textActive: 'bg-[#FFC501] text-[#000000]'};
            break;
  
          case 3:
            bgChange.current = {bg:'bg-[#FF884D]', text: 'text-[#FF884D] bg-[#0C513F]', textActive: 'bg-[#FF884D] text-[#0C513F]'};
            break;
          
          case 4:
            bgChange.current = {bg:'bg-[#FFEDB3]', text: 'text-[#FFEDB3] bg-[#ED5E3B]', textActive: 'bg-[#FFEDB3] text-[#ED5E3B]'};
            break;
        
          default:
            break;
        }
      }


      const bgBefore = `${bgChange.current.textActive} `;
      const background  = `conic-gradient(${Animate[current].activeCircle} ${progressValue*3.6}deg, transparent 0deg)`;




      if(current <=4 ){
        bgChanger(current)
        bgChange4.current = Animate[current].iconFour;
      }
    

    return(
      <div className='relative h-[45rem]'>
        <div className={`animating-outer z-[9] ${bgChange.current.bg}`}>
          <div className="animating-inner text-center py-5 pb-10 px-10">
            <h2 className='heading-large text-7xl font-bold py-5'>{Animate[current].title}</h2>
            <div className='w-5/6 mx-auto h-[30rem]'>
              <Image 
                src={Animate[current].mainImage}
                alt='food-illustration'
                width={100}
                height={100}
                className="w-auto h-full mx-auto"
              />
            </div>

            <div className="holder w-full flex-center">
              <div className='flex-center justify-start gap-x-3'>

                <div style={current===0? {background}:{}} className={`animate-circle  ${current===0? bgBefore :bgChange.current.text } `}> <span className={`${current ===0?bgChange.current.bg: ''}  animate-icon`}><FaMapMarkerAlt size={20} color='auto'/></span>
                </div> 

                <div style={current===1? {background}:{}} className={`animate-circle ${current===1? bgBefore:bgChange.current.text}`}>  <span className={`${current ===1?bgChange.current.bg: ''}  animate-icon`}><h3 className={`animate-icon animate-icon-text`}>01</h3></span>
                </div>

                <div style={current===2? {background}:{}} className={`animate-circle ${current===2? bgBefore:bgChange.current.text} `}>
                  <span className={`${current ===2?bgChange.current.bg: ''}  animate-icon`}><h3 className={`animate-icon animate-icon-text `}>02</h3></span>
                </div>

                <div style={current===3? {background}:{}} className={`animate-circle ${current===3? bgBefore:bgChange.current.text}`}>
                  <span className={`${current ===3?bgChange.current.bg: ''}  animate-icon`}><h3 className={`animate-icon animate-icon-text`}>03</h3></span>
                </div>

                <div style={current===4? {background}:{}} className={`animate-circle ${current===4? bgBefore:bgChange.current.text}`}  >
                  <span className={`${current ===4?bgChange.current.bg: ''}  animate-icon`}><Image src={bgChange4.current} alt='icon' width={25} height={25}/></span>
                </div>
                
              </div>

              <div className='h-14 flex-center justify-start gap-x-3'>
                <button className={` animate-pos ${bgChange.current.text}`} onClick={()=>prevNext()}>
                  <FiArrowLeft size={30} className='font-extrabold '/>
                </button>
                <button className={` animate-pos ${bgChange.current.text}`} onClick={()=>nextPrev()}>
                  <FiArrowRight size={30}  className='font-extrabold '/>
                </button>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    )
}