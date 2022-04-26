import Image from 'next/image'
import { WaveContainer } from '../styles/WaveSectionStyles'
import BlueImage from '../public/images/blue-vector.svg'
import Wave from '../public/images/wave.svg'

const WaveBlueStar = () => {
   return (
      <WaveContainer>
         <div className="w-full px-6 max-w-[900px] lg:px-7 xl:max-w-[1240px] 2xl:max-w-[1440px] mx-auto">
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