import Image from 'next/image'
import styled from 'styled-components'
import CircleGraident from '../public/images/circle.svg' 
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa'
import {
   ProjectWrapper,
   ImageContainer,
   CardBottom,
   Card,
   CardBottomTop,
   CardBottomDiv,
   BottomContent,
   ProjectsDiv
} from '../styles/ProjectSection'
import { useState, useRef } from 'react';
import SectionText from './SectionText';
import Link from 'next/link'
import ProjectBtnIcon from '../public/images/project-btn-icon.svg'

const RightArrowBtn = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 5;
   right: -60px;
   top: 60%;
   transform: translateY(-50%);
   cursor: pointer;

   @media screen and (max-width: 768px) {
      right: -10px;
      background: black;
      border-radius: 50%;
   }

   @media screen and (max-width: 640px) {
      display: none;
   }
`

const LeftArrowBtn = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 5;
   left: -60px;
   top: 60%;
   transform: translateY(-50%);
   cursor: pointer;

   @media screen and (max-width: 768px) {
      left: -10px;
      background: black;
      border-radius: 50%;
   }

   @media screen and (max-width: 640px) {
      display: none;
   }
`

const ProjectSection = () => {
   const [papayaHover, setPapayaHover] = useState<boolean>(false)
   const [blocassetHover, setBlocassetHover] = useState<boolean>(false)
   const [rocketHover, setRocketHover] = useState<boolean>(false)
   const [isMoved, setIsMoved] = useState<boolean>(false) 
   const projectsRef = useRef<HTMLDivElement>()

   const handleClick = (direction: string) =>{
      //To show arrow icon
      setIsMoved(true)
      

      if(projectsRef.current){
         const {scrollLeft, clientWidth} = projectsRef.current

         const scrollTo = 
            direction === "left" 
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth

         projectsRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
      }
   }
   return (
      <ProjectWrapper id="projects" >
         <div className="pt-4 w-full mb-10 px-6 sm:px-0">
            <SectionText headerTxt="Projects"/>
            <h2 className="text-white font-light text-base sm:text-lg lg:text-[24px] xl:text-[28px] leading-6 lg:leading-10">Explore some of our web3 projects</h2>
         </div>
         <LeftArrowBtn onClick={() => handleClick("left")}>
            <Image src={CircleGraident} alt="img" width={50} height={50}/>
            <FaLongArrowAltLeft color="white" className='absolute text-[22px]'/>
         </LeftArrowBtn>

         <RightArrowBtn onClick={() => handleClick("right")}>
            <Image src={CircleGraident} alt="img"  width={50} height={50}/>
            <FaLongArrowAltRight color="white" className='absolute text-[22px]'/>
         </RightArrowBtn>

         <ProjectsDiv ref={projectsRef}>
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
                        <p className="flex break-words text-sm lg:text-base lg:basis-1/2">
                           Think Freepik, Iconscout or Lottiefiles for Web3
                        </p>
                     </CardBottomTop>
                     <Link href="https://twitter.com/blocasset">
                        <a className="cursor-pointer flex items-center mt-5 xl:hidden" target="_blank">
                           <Image src={ProjectBtnIcon} alt="btn icon" width={50} height={50}/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">Coming Soon</h2>
                        </a>
                     </Link>
                  </div>
                  <CardBottomDiv onHover={blocassetHover} className="hidden xl:block">
                     <BottomContent>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Blocasset</h2>
                        <p className="flex break-words text-sm lg:text-base lg:basis-1/2">
                           Think Freepik, Iconscout or Lottiefiles for Web3
                        </p>
                     </BottomContent>
                     <Link href="https://twitter.com/blocasset">
                        <a className="cursor-pointer flex items-center mt-5" target="_blank">
                           <Image src={ProjectBtnIcon} alt="btn icon" width={50} height={50}/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">Coming Soon</h2>
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
                        <p className="flex text-sm break-words lg:text-base lg:basis-1/2">
                           Web3 focused audio-visual animation and manga studio
                        </p>
                     </CardBottomTop>
                     <Link href='https://twitter.com/studiopapayas'>
                        <a className="cursor-pointer flex items-center mt-5 xl:hidden" target="_blank">
                           <Image src={ProjectBtnIcon} alt="btn icon" width={50} height={50}/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">Coming Soon</h2>
                        </a>
                     </Link>
                  </div>
                  <CardBottomDiv onHover={papayaHover} className="hidden xl:block">
                     <BottomContent>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Papayas Studio</h2>
                        <p className="flex text-sm break-words lg:text-base lg:basis-1/2">
                           Web3 focused audio-visual animation and manga studio
                        </p>
                     </BottomContent>
                     <Link href="https://twitter.com/studiopapayas">
                        <a className="cursor-pointer flex items-center mt-5" target="_blank">
                           <Image src={ProjectBtnIcon} alt="btn icon" width={50} height={50}/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">Coming Soon</h2>
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
                        <p className="flex text-sm break-words lg:text-base lg:basis-1/2">
                           We have suites of digital blockchain products in the pipeline
                        </p>
                     </CardBottomTop>
                     <Link href="/">
                        <a className="cursor-pointer flex items-center mt-5 xl:hidden" target="_blank">
                           <Image src={ProjectBtnIcon} alt="btn icon" width={50} height={50}/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">Join our early access</h2>
                        </a>
                     </Link>
                  </div>
                  <CardBottomDiv onHover={rocketHover} className="hidden xl:block">
                     <BottomContent>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:basis-1/2">Coming Soon</h2>
                        <p className="flex text-sm break-words lg:text-base lg:basis-1/2">
                           We have suites of digital blockchain products in the pipeline
                        </p>
                     </BottomContent>
                     <Link href="/">
                        <a className="cursor-pointer flex items-center mt-5">
                           <Image src={ProjectBtnIcon} alt="btn icon" width={50} height={50}/>
                           <h2 className="ml-4 text-[14px] xl:text-[16px] font-normal">Join our early access</h2>
                        </a>
                     </Link>
                  </CardBottomDiv>
               </CardBottom>
            </Card>
         </ProjectsDiv>
      </ProjectWrapper>
   )
}


export default ProjectSection