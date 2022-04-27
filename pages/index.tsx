import Head from "next/head"
import styled, { keyframes } from 'styled-components'
//components
import Container from "../components/Container"
import TeamSection from "../components/TeamSection"
import Footer from "../components/Footer"
import ProjectSection from "../components/ProjectSection"
import WaveBlueStar from "../components/WaveBlueStar"
import WavePinkStar from "../components/WavePinkStar"
import DesktopNavbar from "../components/DesktopNavbar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import Slider from '../components/Slider'

import { MeshWrapper, ProjectsUnderLay } from "../styles/ProjectSection"
import { TeamUnderlayMesh } from "../styles/TeameMemberStyles"

export const EllipseContainer = styled.div`
    padding: 0 0;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 657px;
    height: 790px;
    left: 50%;
    top: 390px;
    transform: translate(-50%, -50%);
    @media (max-width: 1024px) {
        left: 50%;
        top: 330px;
     }
    @media (max-width: 550px) {
        width: 168px;
        height: 314px;
        left: 50%;
        top: 275px;
    }
`

export const rotateEllipseOne = keyframes`
    0% {
        border-bottom: 2px solid var(--W);
        border-right: none;
        border-top: none;
        border-left: none;
    }
    25% {
        border-right: 2px solid var(--W);
        border-bottom: none;
        border-top: none;
        border-left: none;
    }
    50% {
        border-top: 2px solid var(--W);
        border-right: none;
        border-bottom: none;
        border-left: none;
    }
    75% {
        border-left: 2px solid var(--W);
        border-top:none;
        border-right:none;
        border-bottom:none;
    }
    100% {
      border-left:none;
      border-top:none;
      border-right:none;
      border-bottom: 2px solid var(--W);
    }
`
export const rotateEllipseTwo = keyframes`
    0% {
        border-top: 2px solid var(--W);
        border-right: none;
        border-bottom: none;
        border-left: none;
    }
    25% {
        border-left: 2px solid var(--W);
        border-top: none;
        border-right: none;
        border-bottom: none;
    }
    50% {
        border-bottom: 2px solid var(--W);
        border-top: none;
        border-left: none;
        border-right: none;
    }
    75% {
        border-right: 2px solid var(--W);
        border-bottom:none;
        border-left:none;
        border-top:none;
    }
    100% {
      border-top: 2px solid var(--W);
      border-right:none;
    }
`
export const EllipseOne = styled.div`
    opacity: 0.3;
    transform: matrix(0.23, -1.17, 0.72, -0.51, 0, 0) skew(-1deg);
    border-radius: 50%;
    width: 383px;
    height: 715px;
    animation: ${rotateEllipseOne} linear infinite;
    transition: border-radius 0.1s ease-in-out;
    animation-delay: 2s;
    animation-duration: 6s;
    position: absolute;
    @media (max-width: 550px) {
        width: 168px;
        height: 314px;
    }
`
export const EllipseTwo = styled.div`
    opacity: 0.1;
    transform: matrix(-0.23, -1.17, -0.72, -0.51, 0, 0) skew(-1deg);
    border-radius: 50%;
    width: 383px;
    height: 715px;
    animation: ${rotateEllipseTwo} linear infinite;
    transition: border-radius 0.1s ease-in-out;
    animation-delay: 2s;
    animation-duration: 6s;
    @media (max-width: 550px) {
        width: 168px;
        height: 314px;
    }

`
export default function Home() {

  return (
    <div className=" font-body w-full">
      <Head>
        <title>Web3Media</title>
        <meta
          name="description"
          content="Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds"
        />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <DesktopNavbar></DesktopNavbar>
      <HeroSection></HeroSection>

      <Slider></Slider>
      <MeshWrapper>
        <Container>
          <AboutSection></AboutSection>
        </Container>
        <WavePinkStar></WavePinkStar>
        <Container>
          <ProjectsUnderLay></ProjectsUnderLay>
          <ProjectSection></ProjectSection>
        </Container>
        <WaveBlueStar></WaveBlueStar>
      </MeshWrapper>

      <Container>
        <TeamSection></TeamSection>
        <Footer></Footer>
        <TeamUnderlayMesh/>
      </Container>
    </div>
  )
}

