import styles from '../styles/components styles/Footer.module.css'
import Logo from '../images/Logo.svg'

import Image from 'next/image'
import Container from './Cotainer';

const Footer = () => {
   return ( 
      <Container>
         <footer className={styles['footer']}>
            <div className={styles['footer-container']}>
               <div className={styles['footer-top']}>
                  <Image src={Logo} alt="logo" className={styles["img"]}/>
                  <ul>
                     <li>Instagram</li>
                     <li>Twitter</li>
                     <li>LinkedIn</li>
                  </ul>
               </div>
               <p className={styles['footer-p']}>2022 Web3D Media. All rights reserved</p>
            </div>
         </footer>
      </Container>
   );
}
export default Footer;