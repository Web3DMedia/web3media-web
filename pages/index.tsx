import Head from "next/head"

import DesktopNavbar from "../components/DesktopNavbar"
import Container from "../components/Container"
import HeroSection from "../components/HeroSection"
import ProjectSection from "../components/ProjectSection"

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Web3Media</title>
        <meta
          name="description"
          content="Giving financial freedom and access to designers, artists, blockchain talents and creative minds."
        />
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <DesktopNavbar />
      <Container>
        <HeroSection></HeroSection>
        <ProjectSection></ProjectSection>
      </Container>
    </div>
  )
}
