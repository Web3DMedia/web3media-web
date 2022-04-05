import React from "react"
import styles from "../styles/section styles/HeroSection.module.css"
import styled, { keyframes } from 'styled-components'
const rotateEllipseOne = keyframes`
    0% {
        border-bottom: 2px solid var(--W);
    }
    25% {
        border-right: 2px solid var(--W);
        border-bottom: none;
    }
    50% {
        border-top: 2px solid var(--W);
        border-right: none;
    }
    75% {
        border-left: 2px solid var(--W);
        border-top:none;
    }
    100% {
      border-left:none;
    }
`
const rotateEllipseTwo = keyframes`
    0% {
        border-top 2px solid var(--W);
    }
    25% {
        border-left: 2px solid var(--W);
        border-top: none;
    }
    50% {
        border-bottom: 2px solid var(--W);
        border-top: none;
    }
    75% {
        border-right: 2px solid var(--W);
        border-bottom:none;
    }
    100% {
      border-right:none;
    }
`
const EllipseContainer = styled.div`
    padding: 0 0;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 657px;
    height: 790px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
const EllipseOne = styled.div`
    opacity: 0.3;
    transform: matrix(0.23, -1.17, 0.72, -0.51, 0, 0) skew(-1deg);
    border-radius: 50%;
    width: 383px;
    height: 715px;
    animation: ${rotateEllipseOne} linear infinite;
    transition: ease-in-out;
    animation-delay: 1s;
    animation-duration: 2s;
    position: absolute;
`
const EllipseTwo = styled.div`
    opacity: 0.1;
    transform: matrix(-0.23, -1.17, -0.72, -0.51, 0, 0) skew(-1deg);
    border-radius: 50%;
    width: 383px;
    height: 715px;
    animation: ${rotateEllipseTwo} 3s linear infinite;
    transition: ease-in-out;
    animation-delay: 0.8s;
    animation-duration: 2s;
`
const Mesh = styled.div`
    width: 724px;
    height: 650px;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    opacity: 0.17;
    background: radial-gradient(36.28% 36.28% at 50% 50%, #FD8AFD 0%, rgba(222, 28, 28, 0) 100%),
    radial-gradient(36.28% 36.28% at 50% 50%, rgba(41, 39, 160, 0.26) 0%, rgba(41, 39, 160, 0) 100%),
    radial-gradient(36.28% 36.28% at 50% 50%, rgba(201, 129, 56, 0.47) 0%, rgba(255, 202, 148, 0) 100%);
`
const HeroSection = () => {
  return (
    <section className="relative m-auto flex justify-between h-screen overflow-hidden" >
      <EllipseContainer>
        <EllipseOne></EllipseOne>
        <EllipseTwo></EllipseTwo>
      </EllipseContainer>

      <div className={styles["hero-section-mesh"]}></div>

      <div className={styles["hero-section-text"]}>
        <h3>We are an</h3>
        <h1>Ambitious Creative Web3 Studio.</h1>
        <p>
          Giving financial freedom and access to designers, artists, blockchain
          talents and creative minds.
        </p>
        <div className={styles["hero-section-text-button"]}>
          <h6>Our Superpowers</h6>
        </div>
      </div>

      <div className={styles["hero-section-socials"]}>
        <ul>
          <li>LI</li>
          <li>IG</li>
          <li>FB</li>
          <li>TW</li>
          <li className={styles["socials-circle"]}></li>
        </ul>
      </div>
    </section>
  )
}

export default HeroSection
