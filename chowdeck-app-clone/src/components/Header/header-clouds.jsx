import CloudT from '../../../public/Images/cloudt.png';
import Cloudl from '../../../public/Images/cloud7.png';
import Cloudr from '../../../public/Images/Cloudr.svg';
import Image from 'next/image';


export default function HeaderC() {
    return (
    <div>
        <Image 
            src={CloudT}
            alt='cloud'
            width={100}
            height={100}
            className='scale-150 h-28 w-auto absolute -top-28 left-[60%]'
            />
            <Image 
            src={Cloudl}
            alt='cloud'
            width={100}
            height={100}
            className=' h-48 w-72 absolute -top-36 left-0'
            />
            <Image 
            src={Cloudr}
            alt='cloud'
            width={100}
            height={100}
            className=' h-48 w-auto absolute top-[22%] right-0'
        />
    </div>
    )
}