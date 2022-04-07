import Head from "next/head"

import Container from "../components/Container"
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

      <Container>
        <ProjectSection></ProjectSection>
      </Container>
    </div>
  )
}
