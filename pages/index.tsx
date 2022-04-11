import Head from "next/head"
<<<<<<< HEAD
import Container from "../components/Container"
import TeamSection from "../components/TeamSection"
import Footer from "../components/Footer"
=======

<<<<<<< HEAD
import Container from "../components/Container"
import ProjectSection from "../components/ProjectSection"
import WaveBlueStar from "../components/WaveBlueStar"
import WavePinkStar from "../components/WavePinkStar"

export default function Home() {
  return (
    <div className="bg-black">
=======
//components
import DesktopNavbar from "../components/DesktopNavbar"
import Container from "../components/Container"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import Slider from '../components/Slider'
>>>>>>> origin/dev

export default function Home() {

  return (
<<<<<<< HEAD
    <div className="bg-black">
=======
    <div className="bg-b1 font-body">
>>>>>>> origin/dev
>>>>>>> origin/dev
      <Head>
        <title>Web3Media</title>
        <meta
          name="description"
          content="Giving financial freedom and access to designers, artists, blockchain talents and creative minds."
        />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

<<<<<<< HEAD
      <Container>
        <TeamSection></TeamSection>
        <Footer></Footer>
=======
      <WavePinkStar></WavePinkStar>
      <Container>
        <ProjectSection></ProjectSection>
      </Container>
<<<<<<< HEAD
      <WaveBlueStar></WaveBlueStar>
=======

      <Slider></Slider>

      <Container>
        <AboutSection></AboutSection>
>>>>>>> origin/dev
      </Container>
>>>>>>> origin/dev
    </div>
  )
}
