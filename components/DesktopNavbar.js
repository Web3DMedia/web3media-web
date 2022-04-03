import React from 'react'
import Image from 'next/image'
import styles from '../styles/component styles/DesktopNavbar.module.css'

const DesktopNavbar = () => {
    return (
        <nav className={styles["nav"]}>
            <div>
                <Image src='/logo.svg' width={76} height={31} alt="logo" />
            </div>

            <ul className={styles["nav-ul"]}>
                <li>Early Access</li>
                <li>Team</li>
                <li>About</li>
                <li>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopNavbar