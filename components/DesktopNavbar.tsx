import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/component styles/DesktopNavbar.module.css'

//components
import MobileMenu from '../components/MobileMenu'

const DesktopNavbar = () => {
    const [showmenu, setShowmenu] = useState(false);
    return (
        <nav className={styles["nav"]}>
            <div className={styles['logo']}>
                <Image src='/images/logo.svg' width={76} height={31} alt="logo" />
            </div>

            <ul className={styles["nav-ul"]}>
                <li>Early Access</li>
                <li>Team</li>
                <li>About</li>
                <li onClick={() => setShowmenu(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
            </ul>

            {
                showmenu &&
                <MobileMenu closemenu={setShowmenu}></MobileMenu>
            }
        </nav>
    )
}

export default DesktopNavbar