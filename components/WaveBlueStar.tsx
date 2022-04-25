import Image from 'next/image'
import { WaveContainer } from '../styles/WaveSectionStyles'
import BlueImage from '../public/images/blue-vector.svg'
const WaveBlueStar = () => {
   return (
      <WaveContainer>
         <div className="w-full h-full max-w-1440 mx-auto px-6 md:px-20 xl:px-36 flex items-start justify-start">
            <div className="absolute">
               <Image
                  src={BlueImage}
                  alt="image"
                  width={40} 
                  height={40}
               />
            </div>
         </div>
      </WaveContainer>
   )
}

export default WaveBlueStar