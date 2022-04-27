import React from "react"
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll';

const HeroContainer = styled.div`
    background: url(/images/background.png);
    background-size: 500px;
    background-position: center;
    background-repeat: none;
    @media (max-width: 1024px) {
    border: none;
    background-size: 500px;
  }
    @media (max-width: 550px) {
    border: none;
    background-size: 300px;
  }
`
const Container = styled.div`
    width: 50%;
  @media (max-width: 2580px) {
    width: 65%;
  }
  @media (max-width: 2000px) {
    width: 80%;
  }
   @media (max-width: 1600px) {
    width: 90%;
  }
   @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    border: none;

  }
`
const HeroSectionContainer = styled.div`
    padding-bottom: 20px;
    text-align:center;
    @media (max-width: 1024px) {
    border: none;
  }
`
const rotateEllipseOne = keyframes`
    0% {
        border-bottom: 2px solid var(--W);
        border-right: none;
        border-top: none;
        border-left: none;
    }
    25% {
        border-right: 2px solid var(--W);
        border-bottom: none;
        border-top: none;
        border-left: none;
    }
    50% {
        border-top: 2px solid var(--W);
        border-right: none;
        border-bottom: none;
        border-left: none;
    }
    75% {
        border-left: 2px solid var(--W);
        border-top:none;
        border-right:none;
        border-bottom:none;
    }
    100% {
      border-left:none;
      border-top:none;
      border-right:none;
      border-bottom: 2px solid var(--W);
    }
`
const rotateEllipseTwo = keyframes`
    0% {
        border-top: 2px solid var(--W);
        border-right: none;
        border-bottom: none;
        border-left: none;
    }
    25% {
        border-left: 2px solid var(--W);
        border-top: none;
        border-right: none;
        border-bottom: none;
    }
    50% {
        border-bottom: 2px solid var(--W);
        border-top: none;
        border-left: none;
        border-right: none;
    }
    75% {
        border-right: 2px solid var(--W);
        border-bottom:none;
        border-left:none;
        border-top:none;
    }
    100% {
      border-top: 2px solid var(--W);
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
    top: 390px;
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
    transition: all 20s ease-in-out;
    animation-delay: 1.4s;
    animation-duration: 6s;
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
    animation: ${rotateEllipseTwo} linear infinite;
    transition: all 20s ease-in-out;
    animation-delay: 0.8s;
    animation-duration: 6s;
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
    top:350px;
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
const colorchange = keyframes`
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
75% {
  background-position: 100% 50%;
}
100% {
  background-position: 0px 0px;
}
`
const SecondHeadingText = styled.h1`
    font-weight: 800;
    font-size: 112px;
    line-height: 100px;
    padding-bottom: 42px ;
    background-image: linear-gradient(135deg, #FF6EFF 5%, #0AB7F6 25%, #0AB7F6 30%, #FF6EFF 55%, #62FF8E 70%, #25B1FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    background-size: 300%;
    background-position: 0%;
    -webkit-animation: ${colorchange} 20s ease-in-out 2s infinite normal;
    animation: ${colorchange} 20s ease-in-out 2s infinite normal;
    transition: background-position 5s ease-in-out;
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
const Button = styled.button`
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
const SocialContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 80px;
  right:0;
  top: -290px;
  padding-top: -20px;
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
    &:hover {
    background-image: linear-gradient(135deg, #FF6EFF 5%, #0AB7F6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
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
    <HeroContainer>
      <Container className="m-auto px-6 md:px-20">
        <HeroSectionContainer className="relative m-auto flex justify-center overflow-hidden" >
        <EllipseContainer>
          <EllipseOne></EllipseOne>
          <EllipseTwo></EllipseTwo>
        </EllipseContainer>

          <Mesh></Mesh>

        <div className="pb-40">
          <FirstHeadingText>We are an</FirstHeadingText>
          <SecondHeadingText>Ambitious Creative Web3 Studio.</SecondHeadingText>
          <ThirdHeadingText>
            Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds
          </ThirdHeadingText>

            <Button>
              <ScrollLink to="teams" spy={true} smooth={true} offset={-20} duration={900}>
                <div className="cursor-pointer flex justify-center m-auto hover:scale-125 transition-transform w-122 h-14 lg:w-139 lg:h-19 2xl:w-228 xl:h-47 duration-700 ">
                    <Image src='/images/our-superpowers-btn.svg' width={228} height={47} alt="logo" />
                </div>
              </ScrollLink>
              
            </Button>

        </div>
        </HeroSectionContainer>
      </Container>

      <div className="relative text-w">
        <SocialContainer>
          <Link href="https://www.linkedin.com/company/web3dmedia" passHref>
            <a target='_blank'>
              <SocialLinks>
                LI
              </SocialLinks>
            </a>
          </Link>
          <Link href="https://www.instagram.com/web3d.media/" passHref>
            <a target='_blank'>
              <SocialLinks>
                IG
              </SocialLinks>
            </a>
          </Link>

          <Link href="https://web.facebook.com/web3dmedia" passHref>
            <a target='_blank'>
              <SocialLinks>
                FB
              </SocialLinks>
            </a>
          </Link>
          <Link href="https://twitter.com/web3Dmedia" passHref>
            <a target='_blank'>
              <SocialLinks>
                TW
              </SocialLinks>
            </a>
          </Link>
          <SocialLinks> <SocialCircle></SocialCircle> </SocialLinks>
        </SocialContainer>
      </div>
    </HeroContainer>
  )
}

export default HeroSection
