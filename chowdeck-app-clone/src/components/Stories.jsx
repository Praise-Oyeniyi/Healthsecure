import Image from "next/image";
import Pasta from '../../public/Images/Pasta-testi.svg';

export default function Stories(props){
    const stories = props.stories;

    return(
        <div className="testimonies-outer">
        <div className="testimonies-inner w-[90%] mx-auto">
          <div className="testimonies-head flex-center justify-start mb-8">
            <h2 className='heading-large mr-2 '>Stories</h2>
            <Image 
              src={Pasta}
              alt='pasta-image'
              width={100}
              height={100}
              />
          </div>

          <div className="testimonies-inner-box flex-center gap-x-10 mb-56">
                  {stories.map((story, index)=>(
                    <div className="story-outer text-center border-[3px] rounded-2xl overflow-hidden h-[28rem]" key={index}>
                      <div className={`max-h-[45%] h-[45%] w-full overflow-hidden ${index===0? 'border-b-[3px]':''}`}>
                        <Image
                          src={story.image}
                          width={100}
                          height={100}
                          alt='blog image'
                          className={`w-full relative -top-5`}
                        />
                      </div>
                      <div className='h-[56%] border-b-white border-b-4 story-body px-5 py-2'>
                        <div className=" flex-column justify-around h-full ">
                          <h4 className='text-base font-bold -tracking-wider'>{story.title}</h4>
                          <p className=' text-lg font-medium leading-snug px-3'>{story.story}</p>
                          <button className=' bg-[#F3F6F5] w-full  text-[#457A6C] rounded-lg py-2 text-lg font-medium'>Read More</button>
                        </div>
                      </div>
                        
                    </div>
                  ))}
          </div>
        </div>
      </div>
    )
}