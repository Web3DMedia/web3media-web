import styles from '../styles/components styles/ProjectCard.module.css';
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({data}) => {
   const {
      cardH2,
      cardP,
      cardImg,
      btnIcon,
      btnTxt
   } = data

   return ( 
      <div className={styles["card-body"]}>
         <div className={styles["card-top"]}>
            <Image 
               src={cardImg} 
               alt="img" 
               className={styles["card-img"]}
               width={720}
               height={368}
               
            />
         </div>
         <div className={styles["card-center"]}>
            <h2>{cardH2}</h2>
            <p>{cardP}</p>
         </div>
         <div className={styles["card-bottom"]}>
            <div className={styles["card-btn"]}>
               <div className={styles["card-icon"]}>
                  <Image src={btnIcon} alt="icon" />
               </div>
               <h5>{btnTxt}</h5>
            </div>
         </div>
         <div className={styles["card-bottom-tab"]}>
            <div className={styles["card-btn"]}>
               <div className={styles["card-icon"]}>
                  <Image src={btnIcon} alt="icon" />
               </div>
               <h5>{btnTxt}</h5>
            </div>
         </div>
      </div>
   );
}

export default ProjectCard;