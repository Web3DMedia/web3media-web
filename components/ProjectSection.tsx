import Image from 'next/image'
import CircularGradientBtn from './CircularGradientBtn';
import {
   ProjectWrapper,
   ImageContainer,
   CardBottom,
   Card,
   CardBottomTop,
   CardBottomDiv,
   BottomContent
} from '../styles/ProjectSection'
import { useState } from 'react';
import SectionText from './SectionText';
import Link from 'next/link'

const ProjectSection = () => {
   const [papayaHover, setPapayaHover] = useState<boolean>(false)
   const [blocassetHover, setBlocassetHover] = useState<boolean>(false)
   const [rocketHover, setRocketHover] = useState<boolean>(false) 

   return (
      <ProjectWrapper id="projects" >
         <div className="pt-4 w-full">
            <SectionText headerTxt="Projects"/>
            <h2 className="text-white font-light text-base sm:text-lg lg:text-[24px] xl:text-[28px] leading-6 lg:leading-10">Explore some of our web3 projects</h2>
         </div>
         <div className="flex flex-col items-center justify-center mt-5 sm:justify-start sm:flex-row sm:overflow-x-scroll sm:h-650 w-full">
            <Card
               onMouseEnter={() => {setBlocassetHover(true)}}
               onMouseLeave={() => {setBlocassetHover(false)}}
            >
               <ImageContainer className="z-[4] bg-black">
                  <Image
                     src='/images/blocasset.jpg'
                     alt="card image"
                     layout='fill'
                     loading='lazy'
                     objectFit='cover'
                     
                  />
               </ImageContainer>
               <CardBottom className="text-white" >
                  <div className="flex flex-col relative z-[2]">
                     <CardBottomTop onHover={blocassetHover}>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Blocasset</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           Think Freepik, Iconscout or Lottiefiles for Web3
                        </p>
                     </CardBottomTop>
                     <Link href="https://twitter.com/blocasset">
                        <a className="cursor-pointer flex items-center mt-5 xl:hidden" target="_blank">
                           <CircularGradientBtn img='/images/arrow-vector.svg'/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                        </a>
                     </Link>
                  </div>
                  <CardBottomDiv onHover={blocassetHover} className="hidden xl:block">
                     <BottomContent>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Blocasset</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           Think Freepik, Iconscout or Lottiefiles for Web3
                        </p>
                     </BottomContent>
                     <Link href="https://twitter.com/blocasset">
                        <a className="cursor-pointer flex items-center mt-5" target="_blank">
                           <CircularGradientBtn img='/images/arrow-vector.svg'/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                        </a>
                     </Link>
                  </CardBottomDiv>
               </CardBottom>
            </Card>

            <Card
               onMouseEnter={() => {setPapayaHover(true)}}
               onMouseLeave={() => {setPapayaHover(false)}}
            >
               <ImageContainer className="z-[4] bg-black">
                  <Image
                     src='/images/papaya.jpg'
                     alt="card image"
                     layout='fill'
                     loading='lazy'
                     objectFit='cover'
                     
                  />
               </ImageContainer>
               <CardBottom className="text-white">
                  <div className="flex flex-col relative z-[2]">
                     <CardBottomTop onHover={papayaHover}>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Papayas Studio</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           Web3 focused audio-visual animation and manga studio
                        </p>
                     </CardBottomTop>
                     <Link href='https://twitter.com/studiopapayas'>
                        <a className="cursor-pointer flex items-center mt-5 xl:hidden" target="_blank">
                           <CircularGradientBtn img='/images/arrow-vector.svg'/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                        </a>
                     </Link>
                  </div>
                  <CardBottomDiv onHover={papayaHover} className="hidden xl:block">
                     <BottomContent>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Papayas Studio</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           Web3 focused audio-visual animation and manga studio
                        </p>
                     </BottomContent>
                     <Link href="https://twitter.com/studiopapayas">
                        <a className="cursor-pointer flex items-center mt-5" target="_blank">
                           <CircularGradientBtn img='/images/arrow-vector.svg'/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                        </a>
                     </Link>
                  </CardBottomDiv>
               </CardBottom>
            </Card>

            <Card
               onMouseEnter={() => {setRocketHover(true)}}
               onMouseLeave={() => {setRocketHover(false)}}
            >
               <ImageContainer className="z-[4] bg-black">
                  <Image
                     src='/images/rocket.jpg'
                     alt="card image"
                     layout='fill'
                     loading='lazy'
                     objectFit='cover'
                     
                  />
               </ImageContainer>
               <CardBottom className="text-white">
                  <div className="flex flex-col relative z-[2]">
                     <CardBottomTop onHover={rocketHover}>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Coming Soon</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           We have suites of digital blockchain products in the pipeline
                        </p>
                     </CardBottomTop>
                     <Link href="/">
                        <a className="cursor-pointer flex items-center mt-5 xl:hidden" target="_blank">
                           <CircularGradientBtn img='/images/arrow-vector.svg'/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">Join our early access</h2>
                        </a>
                     </Link>
                  </div>
                  <CardBottomDiv onHover={rocketHover} className="hidden xl:block">
                     <BottomContent>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Coming Soon</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           We have suites of digital blockchain products in the pipeline
                        </p>
                     </BottomContent>
                     <Link href="/">
                        <a className="cursor-pointer flex items-center mt-5">
                           <CircularGradientBtn img='/images/arrow-vector.svg'/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">Join our early access</h2>
                        </a>
                     </Link>
                  </CardBottomDiv>
               </CardBottom>
            </Card>
         </div>
      </ProjectWrapper>
   )
}


export default ProjectSection