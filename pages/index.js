import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Components
import Container from '../components/Cotainer'
import Footer from '../components/Footer'

//Sections
import ProjectSection from '../sections/ProjectSection'
import WaveBlueStar from '../components/WaveBlueStar'
import WavePinkStar from '../components/WavePinkStar'

export default function Home() {
  return (
    <div className={styles["app-body"]}>
      <WavePinkStar/>
      <ProjectSection/>
      <WaveBlueStar/>
      <Footer/>
    </div>
  )
}
