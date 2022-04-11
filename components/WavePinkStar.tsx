import Image from 'next/image'
import { PinkContainer, VectorWaveContainer} from '../styles/WaveSectionStyles'
import PinkImage from '../public/images/pink-vector.svg'

const WavePinkStar = () => {
   return (
      <PinkContainer className="text-white h-20">
         <div className="absolute top-28 left-20  w-10 h-10">
            <Image
               src={PinkImage}
               alt="image"
            />
         </div>
      </PinkContainer>
   )
}

export default WavePinkStar