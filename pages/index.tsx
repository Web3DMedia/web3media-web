import Head from "next/head"
import { useState, useEffect } from "react"

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


import { MeshWrapper, ProjectsUnderLay } from "../styles/ProjectSection"
import { TeamUnderlayMesh } from "../styles/TeameMemberStyles"
import ProjectContainer from "../components/ProjectContainer"

import CookieBanner from "../components/CookiesBanner"

export default function Home() {

const  [cookies, setCookies] = useState<Boolean>(false)
useEffect(() => {
  setCookies(true)
}, [])

  return (
    <div className=" font-body">
      <Head>
        <title>Web3Media Home</title>
        <meta
          name="description"
          content="Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds"/>
        <link rel="icon" href="/images/logo.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web3d.media" />
        <meta property="og:title" content="Web3D Media" />
        <meta property="og:description" content="Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds" />
        <meta property="og:image" content="/images/meta-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://web3d.media" />
        <meta property="twitter:title" content="Web3D Media" />
        <meta property="twitter:description" content="Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds"/>
        <meta property="twitter:image" content="/images/meta-image.jpg"></meta>
      </Head>
      {
        cookies && <CookieBanner closecookies={setCookies}></CookieBanner>
      }
      <DesktopNavbar></DesktopNavbar>
      <HeroSection></HeroSection>

      <MeshWrapper>
        <Container>
          <AboutSection></AboutSection>
        </Container>
        <WavePinkStar></WavePinkStar>
        <ProjectContainer>
          <ProjectsUnderLay></ProjectsUnderLay>
          <ProjectSection></ProjectSection>
        </ProjectContainer>
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

