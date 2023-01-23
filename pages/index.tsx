import { useState, useEffect, useLayoutEffect } from "react"

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
import SubscriptionConfirmed from "../components/SubscriptionConfirmed"
import styled from "styled-components"
import MetaTag from "../components/MetaTag"

const Homepage = styled.div`
    background: url(https://res.cloudinary.com/dqew5naa7/image/upload/v1674443228/background1_u8wll3.png);
    background-size: 1000px;
    background-position: center;
    background-repeat: none;
    @media (max-width: 1024px) {
        border: none;
    }
    @media (max-width: 550px) {
        border: none;
    }
`
export default function Home() {
  const [cookies, setCookies] = useState<Boolean>(false)
  const [subcriptionConfirmed, setSubscriptionConfirmed] =
    useState<Boolean>(false)

  const closeSubscriptionModal = () => {
    setSubscriptionConfirmed(false)
    window.location.search = ""
  }

  useEffect(() => {
    if (localStorage.getItem("cookies") === "true") {
      setCookies(false)
    } else {
      setCookies(true)
    }
  }, [])

  useLayoutEffect(() => {
    const searchParam = new URLSearchParams(window.location.search)
    if (searchParam.get("verified") === "true") {
      setSubscriptionConfirmed(true)
    }
  }, [])

  return (
    <div className=" font-body">
      <MetaTag tagName='Home' />

      <Homepage>
        {cookies && <CookieBanner closecookies={setCookies}></CookieBanner>}
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
          <TeamUnderlayMesh />
        </Container>
        {subcriptionConfirmed && (
          <SubscriptionConfirmed
            closeSubscriptionModal={closeSubscriptionModal}
          ></SubscriptionConfirmed>
        )}
      </Homepage>
    </div>
  )
}

