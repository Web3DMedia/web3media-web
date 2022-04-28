import Head from "next/head"

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
import ProjectContainer from "../components/ProjectContainer"

export default function Home() {

  return (
    <div className=" font-body">
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

