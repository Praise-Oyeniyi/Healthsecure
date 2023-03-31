import {AiOutlineShoppingCart, AiFillApple} from 'react-icons/ai';



export default function Locations(props){
    const locations = props.Locate;
    return(
        <div className="location-inner ">

          <div className="map-container w-full flex justify-between relative h-[40rem] ">
            
            <div className='map '></div>

            <div className="map-right relative border-l-4 w-[45%]">
              <div className='map-right-top' >
                <span className='h-3 w-3 bg-[#FF884D] rounded-full border-[3px]'></span>
                <h4 className='text-3xl font-semibold '> Restaurants</h4>
              </div>


              <div className="map-list-outer h-[85%] mt-20 pr-2">
                <div className="map-list-inner space-y-3 px-3 h-full overflow-y-auto">
                  {locations.map((place, index)=>(
                    <div key={index} className='location-holder'>
                      <h3>{place}</h3>
                      <div className='location-cart'>
                        <AiOutlineShoppingCart  size={24} color='#02C27F'/>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
    )
}