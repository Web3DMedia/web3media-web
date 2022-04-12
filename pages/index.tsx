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

export default function Home() {

  return (
    <div className="bg-b1 font-body">
      <Head>
        <title>Web3Media</title>
        <meta
          name="description"
          content="Giving financial freedom and access to designers, artists, blockchain talents and creative minds."
        />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <DesktopNavbar></DesktopNavbar>
      
      <Container>
        <HeroSection></HeroSection>
      </Container>

      <Slider></Slider>

      <Container>
        <AboutSection></AboutSection>
      </Container>
      
      <WavePinkStar></WavePinkStar>
      
      <Container>
        <ProjectSection></ProjectSection>
      </Container>

    <WaveBlueStar></WaveBlueStar>
    
      <Container>
        <TeamSection></TeamSection>
        <Footer></Footer>
     </Container>
     
    </div>
  )
}
