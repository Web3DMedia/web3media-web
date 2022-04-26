import Image from 'next/image'
import { PinkContainer} from '../styles/WaveSectionStyles'
import PinkImage from '../public/images/pink-vector.svg'

const WavePinkStar = () => {
   return (
      <PinkContainer>
         <div className="w-full px-6 max-w-[900px] lg:px-7 xl:max-w-[1240px] 2xl:max-w-[1440px] mx-auto">
            <div className="absolute top-28 sm:top-24 md:top-36 lg:top-[150px] xl:top-[200px]">
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