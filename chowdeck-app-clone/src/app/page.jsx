import Image from 'next/image';
import NetworkT1 from '../../public/Images/network-icon1.svg';
import NetworkT3 from '../../public/Images/network-icon3.svg';
import Food from '../../public/Images/meal2.svg';
import {FaMapMarkerAlt, FaTwitter} from 'react-icons/fa'
import {animateThin, Images, locations, stories, TwitterTesti } from '@/components/animateImages';
import Footer from '@/components/Footer/Footer';
import Stories from '@/components/Stories';
import Locations from '@/components/Locations';
import NetworkJoin from '@/components/Network/Network';
import Header from '@/components/Header/Header';
import AnimateFood from '@/components/Animations/AnimateFood';



export default function Home() {
 



  return (
    <main className='w-full'>

      <header className='w-full '>
        <Header/>

        {/* <Image
         src={Cloudb}
         width={100}
         height={100}
         alt="cloud"
         className='w-screen relative -top-24 h-32'
        /> */}
      </header>
      <NetworkJoin/>

      
      <section className='animate-section'>
        <AnimateFood/>

        <div className="after-animate ">
          <div className='w-[90%] mx-auto text-white flex-center pb-5 gap-x-10 items-start'>
            <div className='w-3/6 relative'>
              <h3 className='heading-large relative'>
                Chowdeck has<br/> you covered
              </h3>
              <Image 
                src={Food}
                alt='food-illustration'
                width={100}
                height={100}
                className="absolute right-20 w-40  top-10"
              />
            </div>

            <div className='w-[45%] '>
              <p className='text-2xl font-medium'>Hungry? Too tired to cook? Have friends over,
                or do you simply need to chop life?
                Download Chowdeck, and let’s deliver happiness to 
                your doorstep in minutes.</p>
            </div>
          </div>
        </div>

        <div className="sliders py-14 pb-20 relative overflow-hidden">
          <div className="w-[200%] overflow-hidden  flex-inline relative h-20">
            <div className='absolute w-[124%] slider-thin'>
              {animateThin}
              {animateThin}
            </div>



          </div>

          <div className="slider-steps overflow-hidden">
            <div className="w-[200%] overflow-x-hidden flex-inline relative">
              <div className='relative w-[124%] slider-thin mt-5 mb-14'>
                {Images.map((item, index)=>(
                  <div key={index} className='min-w-[25rem] '>
                    <Image
                      src={item}
                      alt='order-map'
                      height={100}
                      width={100}
                      className={`w-full ${index%2 !== 0? 'pt-14':''}`}
                    />
                  </div>
                ))}
                  {Images.map((item, index)=>(
                  <div key={index} className='min-w-[25rem] '>
                    <Image
                      src={item}
                      alt='order-map'
                      height={100}
                      width={100}
                      className={`w-full ${index%2 !== 0? 'pt-14':''}`}
                    />
                  </div>
                ))}
              </div>
            </div>                      
          </div>
        </div>

      </section>
      <section className="location-outer py-14 bg-white space-y-20">
        <Locations Locate={locations}/>
            

        <div className="street pt-10">
          <div className="street-header space-y-5 ">
            <div className='street-header-fit space-x-2 bg-[#FFF3CC] border-[3px] ' >
              <span className='h-4 w-4 bg-[#FFB3CE] rounded-full border-[3px]'></span>
              <h4 className='text-3xl -tracking-wider'> Street Cred</h4>
            </div>
            <button className='street-header-fit community'><span><FaTwitter size={15} color='white' className='mr-1'/></span> Join our community</button>
          </div>
          
          <div className="twitter-testi-outer w-full overflow-x-auto mt-20 ">

          <div className="street-testi flex-center justify-start items-end overflow-x-auto w-[130rem] gap-8 flex-wrap ">
              {
                TwitterTesti.map((items)=>(

                  <div className={`twitter-box-outer ${items.id >= 6?'self-start place-self-start justify-self-start': ''}`} key={items.id}>
                    <div className='flex-center items-start'>
                      <div className="top flex-center justify-start gap-x-2">
                        <Image alt='profile picture' src={items.image} width={50} height={50} className='rounded-full'/>

                        <div className="top-bio flex-column items-start">
                          <h4 className='text-base font-bold'>{items.name}</h4>
                          <h6 className='text-sm text-[#B3B8C2] font-medium'>{items.handle}</h6>
                        </div>
                      </div>


                      <div className='bg-[#1DA1F2] p-3 rounded-xl' >
                        <FaTwitter size={15} color='white' />
                      </div>
                    </div>


                    <p className="story text-lg tracking-tight font-medium">
                      {items.testi}
                    </p>
                  </div>
                ))
              }

          </div>


          </div>
        </div>








        <Stories stories={stories}/>
      </section>
      <Footer/>
    </main>
  )
}
