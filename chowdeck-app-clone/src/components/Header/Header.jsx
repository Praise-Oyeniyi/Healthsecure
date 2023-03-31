"use client"

import Play from '../../../public/Images/google-play.svg';
import Apple from '../../../public/Images/apple.svg';
import HeaderC from '@/components/Header/header-clouds';
import Image from 'next/image';
import { useState, useEffect} from 'react';



export default function Header() {
    const questionLists = ["Have you eaten?", "I riela nri?", "Kun ci abinci?", "You don chow?", "Se o ti jeun?"]
    const [question, setQuestion] = useState(questionLists[0]);

    useEffect(() => {
      var num = 0;
      const intervalId = setInterval(() => {
        if(num <= 4){
         const newQuestion = questionLists[num++]
         setQuestion(newQuestion);
        }else{
          setQuestion(questionLists[0])
          num = 0;
        }

      }, 3000);

      return () => clearInterval(intervalId);
    }, []);

    

  return (
    <div className='header-outer'>
        <HeaderC/>
        <h3 className='text-9xl font-bold tracking-tighter'>{question}</h3>

        <div className="app-download-btn ">
        <button className="playstore app-btn">
            <Image 
            src={Play}
            alt='google-play-icon'
            width={20}
            height={20}
            className=' mr-2'
            />
            Download on Google Play
        </button>
        <button className='applestore app-btn '>
            <Image 
            src={Apple}
            alt='applestore-icon'
            width={20}
            height={20}
            className=' mr-2'
            />
        Download on App Store</button>
        </div>
    </div>
  )
}