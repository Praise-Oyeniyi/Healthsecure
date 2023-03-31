import Image from "next/image";
import Network from '../../../public/Images/network-icon.svg';
import Network1 from '../../../public/Images/network1.svg';
import Network2 from '../../../public/Images/network2.svg';
import Network3 from '../../../public/Images/network3.svg';
import NetworkT1 from '../../../public/Images/network-icon1.svg';
import NetworkT2 from '../../../public/Images/network-icon2.svg';
import NetworkT3 from '../../../public/Images/network-icon3.svg';
import NetworkR from '../../../public/Images/network-right.svg';
import TryApp from "./TryApp";

export default function NetworkJoin(){
    const Right = <Image src={NetworkR} alt='right-icon' width={12} height={12}/>

    return(
    <section className='threeinone-outer bg-white '>
      <TryApp/>

        <div className="join-network-outer mt-10">
          <div className="join-network-inner text-center space-y-10">
            <h3 className='text-[#D1D5DB] heading-large font-normal flex-center justify-center'>Join our growing network
              <span className='w-10 ml-3 pt-1'>
                <Image 
                  src={Network}
                  alt='google-play-icon'
                  width={100}
                  height={100}
                />
              </span>
            </h3>

            <div className="join-network-container flex-center w-[90%] mx-auto gap-x-6 pb-48">
              
              
              <div className='network-box-outer'>
                <div className='network-box-inner'>
                  <Image 
                    src={NetworkT1}
                    alt='icon'
                    width={30}
                    height={30}
                  />
                  <h4 className='network-box-header'>Start Selling</h4>
                  <p className='network-box-text'>
                    Are you a restaurant owner looking to grow your business? 
                    Reach new customers when you join our network.
                  </p>
                  <h6 className='network-more'>SEE MORE <span className='ml-1'>{Right}</span></h6>
                </div>
                <Image 
                  src={Network1}
                  alt='icon'
                  width={100}
                  height={100}
                  className='network-image'
                />
              </div>
              <div className='network-box-outer'>
                <div className='network-box-inner'>
                  <Image 
                    src={NetworkT2}
                    alt='icon'
                    width={30}
                    height={30}
                  />
                  <h4 className='network-box-header'>Start Selling</h4>
                  <p className='network-box-text'>
                    Are you a restaurant owner looking to grow your business? 
                    Reach new customers when you join our network.
                  </p>
                  <h6 className='network-more'>SEE MORE <span className='ml-1'>{Right}</span></h6>
                </div>
                <Image 
                  src={Network2}
                  alt='icon'
                  width={100}
                  height={100}
                  className='network-image'
                />
              </div>
              <div className='network-box-outer'>
                <div className='network-box-inner'>
                  <Image 
                    src={NetworkT3}
                    alt='icon'
                    width={30}
                    height={30}
                  />
                  <h4 className='network-box-header'>Start Selling</h4>
                  <p className='network-box-text'>
                    Are you a restaurant owner looking to grow your business? 
                    Reach new customers when you join our network.
                  </p>
                  <h6 className='network-more'>SEE MORE <span className='ml-1'>{Right}</span></h6>
                </div>
                <Image 
                  src={Network3}
                  alt='icon'
                  width={100}
                  height={100}
                  className='network-image'
                />
              </div>
              <div></div>
              <div></div>
            </div>

          </div>
        </div>


      </section>
    )
}