import Image from 'next/image'
import ProjectTxt from '../public/images/project-txt.svg';
import CircularGradientBtn from './CircularGradientBtn';
import {
   ProjectWrapper,
   ProjectCard,
   ImageContainer,
   CardCenter,
   CardBottom
} from '../styles/ProjectSection'
import { useState } from 'react';

interface BottomProps {
   onHover: boolean;
}

const ProjectSection = () => {
   const [papayaHover, setPapayaHover] = useState<boolean>(false)
   const [blocassetHover, setBlocassetHover] = useState<boolean>(false)
   const [rocketHover, setRocketHover] = useState<boolean>(false) 

   return (
      <ProjectWrapper>
         <div className="mb-5 pl-10 sm:pl-10">
            <div>
               <Image src={ProjectTxt} alt="txt image" />
            </div>
            <h2 className="text-white font-light text-base sm:text-lg lg:text-2xl xl:text-3xl">Explore some of our web3 projects</h2>
         </div>
         <div className="flex flex-col items-center justify-center sm:justify-between sm:flex-row sm:overflow-x-scroll sm:h-650 w-full pl-2">
            <ProjectCard
               onMouseEnter={() => {setPapayaHover(true)}}
               onMouseLeave={() => {setPapayaHover(false)}}
            >  
               <div className="z-[2] bg-black h-full w-full absolute left-0 top-0 hidden xl:flex"/>
               <ImageContainer>
                  <Image
                     src='/images/papaya.jpg'
                     alt="card image"
                     layout='fill'
                     loading='lazy'
                     objectFit='cover'
                  />
               </ImageContainer>
               <CardCenter>
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold lg:basis-1/2">Papayas Studio</h2>
                  <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                     Web3 focused audio-visual animation and manga studio
                  </p>
               </CardCenter>
               <CardBottom onHover={papayaHover}>
                  <span className="cursor-pointer flex items-center">
                     <CircularGradientBtn img='/images/arrow-vector.svg'/>
                     <h2 className="ml-3 text-sm xl:text-base">View Site</h2>
                  </span>
               </CardBottom>
            </ProjectCard>

            <ProjectCard
               onMouseEnter={() => {setBlocassetHover(true)}}
               onMouseLeave={() => {setBlocassetHover(false)}}
            >
               <div className="z-[2] bg-black h-full w-full absolute left-0 top-0 hidden xl:flex"/>
               <ImageContainer>
                  <Image
                     src='/images/blocasset.jpg'
                     alt="card image"
                     layout='fill'
                     loading='lazy'
                     objectFit='cover'
                  />
               </ImageContainer>
               <CardCenter>
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold lg:basis-1/2">Blocasset</h2>
                  <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                     Think Freepik, Iconscout or Lottiefiles for Web3
                  </p>
               </CardCenter>
               <CardBottom onHover={blocassetHover}>
                  <div className="cursor-pointer flex items-center">
                     <CircularGradientBtn img='/images/arrow-vector.svg'/>
                     <h2 className="ml-3 text-sm xl:text-base">View Site</h2>
                  </div>
               </CardBottom> 
            </ProjectCard>

            <ProjectCard
               onMouseEnter={() => {setRocketHover(true)}}
               onMouseLeave={() => {setRocketHover(false)}}
            > 
               <div className="z-[2] bg-black h-full w-full absolute left-0 top-0 hidden xl:flex"/>
               <ImageContainer>
                  <Image
                     src='/images/rocket.jpg'
                     alt="card image"
                     layout='fill'
                     loading='lazy'
                     objectFit='cover'
                  />
               </ImageContainer>
               <CardCenter>
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold lg:basis-1/2">Coming Soon</h2>
                  <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">
                     We have suites of digital blockchain products in the pipeline
                  </p>
               </CardCenter>

                  <CardBottom onHover={rocketHover}>
                     <div className="cursor-pointer flex items-center">
                        <CircularGradientBtn img='/images/arrow-vector.svg'/>
                        <h2 className="ml-3 text-sm xl:text-base">Join our early access</h2>
                     </div>
                  </CardBottom>
            </ProjectCard>
            
         </div>
      </ProjectWrapper>
   )
}


export default ProjectSection