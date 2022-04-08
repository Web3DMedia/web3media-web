import Head from "next/head"
import Container from "../components/Container"
import TeamSection from "../components/TeamSection"
import Footer from "../components/Footer"

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

      <Container>
        <TeamSection></TeamSection>
        <Footer></Footer>
      </Container>
    </div>
  )
}
