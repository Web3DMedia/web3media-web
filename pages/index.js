import Head from 'next/head'
import styles from '../styles/Home.module.css'

//Components
import Navbar from '../components/DesktopNavbar'
import Container from '../components/Container'

//Sections
import HeroSection from '../sections/HeroSection'

export default function Home() {
  return (
    <div className={styles['page-container']}>
      <Head>
        <title>Web3Media</title>
        <meta name="description" content="Giving financial freedom and access to designers, artists, blockchain talents and creative minds." />
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <Navbar></Navbar>

      <Container>
        <HeroSection></HeroSection>
      </Container>
    </div>
  )
}
