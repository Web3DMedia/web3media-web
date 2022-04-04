import Head from "next/head"

import DesktopNavbar from "../components/DesktopNavbar"
import Container from "../components/Container"
import HeroSection from "../components/HeroSection"

export default function Home() {
  return (
    <div className="bg-B1 font-body">
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
      </Container>
    </div>
  )
}
