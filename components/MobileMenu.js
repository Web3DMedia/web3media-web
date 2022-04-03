import React from 'react'
import Image from 'next/image'
import styles from '../styles/component styles/MobileMenu.module.css'

const MobileMenu = ({ closemenu }) => {
    const text = 'Demonstrating the principle of value for skills --'
    return (
        <div className={styles["mobile-menu-container"]}>
            <div className={styles["mobile-menu-top"]}>
                <div>
                    <Image src='/logo.svg' width={58.84} height={24} alt="logo" className={styles['mobile-logo']} />
                </div>

                <ul onClick={() => closemenu(false)} className={styles["mobile-menu-close"]}>
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
            </div>

            <ul className={styles["mobile-menu-nav"]}>
                <li>
                    <span>01</span>
                    <span>Early Access</span>
                </li>
                <li>
                    <span>02</span>
                    <span>Team</span>
                </li>
                <li>
                    <span>03</span>
                    <span>About</span>
                </li>
            </ul>

            <div className={styles["mobile-menu-line"]}>
            </div>

            <ul className={styles["mobile-menu-socials"]}>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Linkedin</li>
            </ul>

            <div className={styles["circle"]}>
                <div className={styles["image"]}>
                    <Image src='/Earth.png' width={100} height={100} alt="earth" />
                </div>
                <div className={styles["text"]}>
                    <p>
                        {text.split('').map((char, i) => {
                            return (
                                <span key={i} style={{ transform: `rotate(${i * 7}deg)` }}>{char}</span>
                            )
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu