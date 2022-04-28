import Image from 'next/image'
import { PinkContainer} from '../styles/WaveSectionStyles'
import PinkImage from '../public/images/pink-vector.svg'

const WavePinkStar = () => {
   return (
      <PinkContainer>
         <div className="w-full px-6 max-w-[900px] lg:px-7 xl:max-w-[1240px] 2xl:max-w-[1440px] mx-auto 3xl:max-w-[1920px] 4xl:max-w-[2000px]">
            <div className="absolute top-28 sm:top-36 md:top-[180px] lg:top-[180px] xl:top-[200px]">
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