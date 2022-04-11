import Image from 'next/image'
import { WaveContainer } from '../styles/WaveSectionStyles'
import BlueImage from '../public/images/blue-vector.svg'
const WaveBlueStar = () => {
   return (
      <WaveContainer>
         <div className="absolute bottom-28 left-20 w-10 h-10 sm:left-16 sm:bottom-24">
            <Image
               src={BlueImage}
               alt="image"
            />
         </div>
      </WaveContainer>
   )
}

export default WaveBlueStar