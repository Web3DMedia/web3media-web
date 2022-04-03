import Image from 'next/image'
import BlueStar from '../images/blueStar.svg'
import styles from '../styles/components styles/WaveBlueStar.module.css'

const WaveBlueStar = () => {
   return ( 
      <div className={styles["wave-body"]}>
         <div className={styles["star-wrapper"]}>
            <Image src={BlueStar} alt="starimg" className={styles["star-img"]}/>
         </div>
      </div>
   );
}

export default WaveBlueStar;