import Image from 'next/image'
import CircularGradientBtn from './CircularGradientBtn';
import {
   ProjectWrapper,
   ProjectsUnderLay,
   ImageContainer,
   CardBottom,
   Card,
   CardBottomTop,
   CardBottomDiv
} from '../styles/ProjectSection'
import { useState } from 'react';
import SectionText from './SectionText';

const ProjectSection = () => {
   const [papayaHover, setPapayaHover] = useState<boolean>(false)
   const [blocassetHover, setBlocassetHover] = useState<boolean>(false)
   const [rocketHover, setRocketHover] = useState<boolean>(false) 

   return (
      <ProjectWrapper>
         <div className="pt-4 w-full">
            <SectionText headerTxt="Projects"/>
            <h2 className="text-white font-light text-base sm:text-lg lg:text-[24px] xl:text-[28px]">Explore some of our web3 projects</h2>
         </div>
         <div className="flex flex-col items-center justify-center mt-5 sm:justify-start sm:flex-row sm:overflow-x-scroll sm:h-650 w-full">
            
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
                     <CardBottomTop>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Papayas Studio</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           Web3 focused audio-visual animation and manga studio
                        </p>
                     </CardBottomTop>
                     <span className="cursor-pointer flex items-center mt-5 xl:hidden">
                        <CircularGradientBtn img='/images/arrow-vector.svg'/>
                        <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                     </span>
                  </div>
                  <CardBottomDiv onHover={papayaHover} className="hidden xl:block">
                     <CardBottomTop>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Papayas Studio</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           Web3 focused audio-visual animation and manga studio
                        </p>
                     </CardBottomTop>
                     <span className="cursor-pointer flex items-center mt-5">
                        <CircularGradientBtn img='/images/arrow-vector.svg'/>
                        <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                     </span>
                  </CardBottomDiv>
               </CardBottom>
            </Card>

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
               <CardBottom className="text-white">
                  <div className="flex flex-col relative z-[2]">
                     <CardBottomTop>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Blocasset</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           Think Freepik, Iconscout or Lottiefiles for Web3
                        </p>
                     </CardBottomTop>
                     <span className="cursor-pointer flex items-center mt-5 xl:hidden">
                        <CircularGradientBtn img='/images/arrow-vector.svg'/>
                        <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                     </span>
                  </div>
                  <CardBottomDiv onHover={blocassetHover} className="hidden xl:block">
                     <CardBottomTop>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Blocasset</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           Think Freepik, Iconscout or Lottiefiles for Web3
                        </p>
                     </CardBottomTop>
                     <span className="cursor-pointer flex items-center mt-5">
                        <CircularGradientBtn img='/images/arrow-vector.svg'/>
                        <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                     </span>
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
                     <CardBottomTop>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Coming Soon</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           We have suites of digital blockchain products in the pipeline
                        </p>
                     </CardBottomTop>
                     <span className="cursor-pointer flex items-center mt-5 xl:hidden">
                        <CircularGradientBtn img='/images/arrow-vector.svg'/>
                        <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                     </span>
                  </div>
                  <CardBottomDiv onHover={rocketHover} className="hidden xl:block">
                     <CardBottomTop>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Coming Soon</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                           We have suites of digital blockchain products in the pipeline
                        </p>
                     </CardBottomTop>
                     <span className="cursor-pointer flex items-center mt-5">
                        <CircularGradientBtn img='/images/arrow-vector.svg'/>
                        <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">View Site</h2>
                     </span>
                  </CardBottomDiv>
               </CardBottom>
            </Card>
         </div>
      </ProjectWrapper>
   )
}


export default ProjectSection