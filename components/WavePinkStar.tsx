import Image from 'next/image'
import { PinkContainer} from '../styles/WaveSectionStyles'
import PinkImage from '../public/images/pink-vector.svg'

const WavePinkStar = () => {
   return (
      <PinkContainer>
         <div className="w-full h-full max-w-1440 mx-auto px-6 md:px-20 xl:px-36 flex items-start justify-start">
            <div className="absolute top-[110px]">
               <Image
                  src={PinkImage}
                  alt="image"
                  width={40} 
                  height={40}
               />
            </div>
         </div>
      </PinkContainer>
   )
}

export default WavePinkStar