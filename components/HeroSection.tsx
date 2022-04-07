import React from "react"
import styled, { keyframes } from 'styled-components'
const HeroSectionContainer = styled.div`
   background: url(/images/background.png);
    background-size: 500px;
    background-position: center;
    background-repeat: none;
    padding-bottom: 150px;
    @media (max-width: 1024px) {
    border: none;
    background-size: 500px;
    padding-bottom: 250px;
  }
    @media (max-width: 900px) {
    background-size: 300px;
    padding-bottom: 100px;
  }
    @media (max-width: 550px) 
    background-size: 300px;
    padding: 0;
     
  }
`
const rotateEllipseOne = keyframes`
    0% {
        border-bottom: 2px solid var(--W);
    }
    25% {
        border-right: 2px solid var(--W);
        border-bottom: none;
    }
    50% {
        border-top: 2px solid var(--W);
        border-right: none;
    }
    75% {
        border-left: 2px solid var(--W);
        border-top:none;
    }
    100% {
      border-left:none;
    }
`
const rotateEllipseTwo = keyframes`
    0% {
        border-top 2px solid var(--W);
    }
    25% {
        border-left: 2px solid var(--W);
        border-top: none;
    }
    50% {
        border-bottom: 2px solid var(--W);
        border-top: none;
    }
    75% {
        border-right: 2px solid var(--W);
        border-bottom:none;
    }
    100% {
      border-right:none;
    }
`
const EllipseContainer = styled.div`
    padding: 0 0;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 657px;
    height: 790px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 1024px) {
        left: 50%;
        top: 330px;
     }
    @media (max-width: 550px) {
        width: 168px;
        height: 314px;
        left: 50%;
        top: 275px;
    }
`
const EllipseOne = styled.div`
    opacity: 0.3;
    transform: matrix(0.23, -1.17, 0.72, -0.51, 0, 0) skew(-1deg);
    border-radius: 50%;
    width: 383px;
    height: 715px;
    animation: ${rotateEllipseOne} linear infinite;
    transition: ease-in-out;
    animation-delay: 1s;
    animation-duration: 2s;
    position: absolute;
    @media (max-width: 550px) {
        width: 168px;
        height: 314px;
    }
`
const EllipseTwo = styled.div`
    opacity: 0.1;
    transform: matrix(-0.23, -1.17, -0.72, -0.51, 0, 0) skew(-1deg);
    border-radius: 50%;
    width: 383px;
    height: 715px;
    animation: ${rotateEllipseTwo} 3s linear infinite;
    transition: ease-in-out;
    animation-delay: 0.8s;
    animation-duration: 2s;
    @media (max-width: 550px) {
        width: 168px;
        height: 314px;
    }

`
const Mesh = styled.div`
    width: 724px;
    height: 650px;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    opacity: 0.17;
    background: radial-gradient(36.28% 36.28% at 50% 50%, #FD8AFD 0%, rgba(222, 28, 28, 0) 100%),
    radial-gradient(36.28% 36.28% at 50% 50%, rgba(41, 39, 160, 0.26) 0%, rgba(41, 39, 160, 0) 100%),
    radial-gradient(36.28% 36.28% at 50% 50%, rgba(201, 129, 56, 0.47) 0%, rgba(255, 202, 148, 0) 100%);
    @media (max-width: 1024px) {
      top:250px;
    }
    @media (max-width: 550px) {
      top: 200px;
      width: 382px;
      height: 442px;
    }
`
const colorchange = keyframes`
    0% {
        background: linear-gradient(135deg, #FF6EFF 0%, #0AB7F6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    50% {
        background: linear-gradient(135deg, #0AB7F6 0%, #FF6EFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    100% {
        background: linear-gradient(135deg, #62FF8E 0%, #25B1FF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
`
const FirstHeadingText = styled.h3`
    font-weight: 800;
    font-size: 40px;
    line-height: 100px;
    color: var(--B5);
    padding-top: 115px;
    @media (max-width: 1024px) {
        font-size: 32px;
        line-height: 31px;
        padding-top: 86px;
    }
    @media (max-width: 550px) {
        font-size: 20px;
        line-height: 19.3px;
        padding-top: 73px;
        padding-bottom: 16px;
    }
`
const SecondHeadingText = styled.h1`
    font-weight: 800;
    font-size: 112px;
    line-height: 100px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background: linear-gradient(135deg, #FF6EFF 0%, #0AB7F6 100%);
    text-fill-color: transparent;
    padding-bottom: 42px ;
    animation: ${colorchange} 10s linear infinite;
    transition: ease-in-out;
    animation-delay: 0s;
    animation-duration: 10s;
    
    @media (max-width: 1024px) {
        font-weight: 800;
        font-size: 80px;
        line-height: 88px;
        padding-bottom: 24px;
    } 
    @media (max-width: 550px) {
        font-weight: 800;
        font-size: 40px;
        line-height: 44px;
        padding-bottom: 20px;
    }
`
const ThirdHeadingText = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.01em;
  color: var(--W);
  width: 70%;
  margin: auto;
  padding-bottom: 42px;
  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
    width: 90%;
  }
  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 22px;
    width: 80%;
  }
`
const Button = styled.div`
  padding: 16px 33px;
  margin-bottom: 146px;
  position: relative;
  width: 205px;
  margin: auto;
  @media (max-width: 1024px) {}
  @media (max-width: 550px) {}
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    border: 1.8px solid transparent;
    background: var(--GradientOne) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
`
const ButtonText = styled.h6`
  color: var(--B5);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;`
const SocialContainer = styled.ul`
position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 80px;
  right: 0;
  padding-top: 552px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
      display: none;
    }
`
const SocialLinks = styled.li`
    font-weight: 400;
    padding-top: 27px;
    font-size: 16px;
    line-height: 15px;
    color:var(--W);
    transform: rotate(270deg);
    &:nth-child(5) {
    padding: 6px;
}
`
const SocialCircle = styled.div`
    margin: 25px 0 0 25px;
    background: var(--GradientOne);
    padding: 3px;
    width: 1px;
    border-radius: 50%;
`
const HeroSection = () => {
  return (
    <HeroSectionContainer className="relative m-auto flex justify-between xl:h-screen overflow-hidden" >
      <EllipseContainer>
        <EllipseOne></EllipseOne>
        <EllipseTwo></EllipseTwo>
      </EllipseContainer>

      <Mesh></Mesh>

      <div className="text-center">
        <FirstHeadingText>We are an</FirstHeadingText>
        <SecondHeadingText>Ambitious Creative Web3 Studio.</SecondHeadingText>
        <ThirdHeadingText>
          Giving financial freedom and access to designers, artists, blockchain
          talents and creative minds.
        </ThirdHeadingText>
        <Button>
          <ButtonText>Our Superpowers</ButtonText>
        </Button>
      </div>

        <SocialContainer>
          <SocialLinks>LI</SocialLinks>
          <SocialLinks>IG</SocialLinks>
          <SocialLinks>FB</SocialLinks>
          <SocialLinks>TW</SocialLinks>
          <SocialLinks> <SocialCircle></SocialCircle> </SocialLinks>
        </SocialContainer>
    </HeroSectionContainer>
  )
}

export default HeroSection
