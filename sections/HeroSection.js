import React from 'react'
import styles from '../styles/section styles/HeroSection.module.css'
const HeroSection = () => {
    return (
        <div className={styles['hero-section-container']}>
            <div className={styles['ellipse']}>
                <div className={styles['ellipse-one']}>
                    <div className={styles['ellipse-one-inside']}>
                    </div>
                </div>
                <div className={styles['ellipse-two']}>
                </div>
            </div>

            <div className={styles['hero-section-text']}>
                <h3>We are an</h3>
                <h1>Ambitious Creative Web3 Studio</h1>
                <p>Giving financial freedom and access to designers, artists, blockchain talents and creative minds.</p>
                <button>Our Superpowers</button>
            </div>

            <div className={styles['hero-section-socials']}>
                <ul>
                    <li>LI</li>
                    <li>IG</li>
                    <li>FB</li>
                    <li>TW</li>
                    <li className={styles['socials-circle']}></li>
                </ul>
            </div>
        </div>
    )
}

export default HeroSection