import Image from 'next/image'
import PinkStar from '../images/pinkStar.svg'
import styles from '../styles/components styles/WaveBlueStar.module.css'

const WavePinkStar = () => {
   return ( 
      <div className={styles["wave-body"]}>
         <div className={styles["pink-wrap"]}>
            <Image src={PinkStar} alt="starimg" className={styles["star-img"]}/>
         </div>
      </div>
   );
}

export default WavePinkStar;