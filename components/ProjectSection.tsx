import Image from 'next/image'
import styled from 'styled-components'
import CircleGraident from '../public/images/circle.svg'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
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
import data from '../data/products'

const RightArrowBtn = styled.div<{ onHover: boolean }>`
   z-index: 10;
   width:50px;
   height:50px;
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   right: -120px;
   top: 60%;
   transform: translateY(-50%);
   cursor: pointer;
   transition: .5s ease-in-out opacity;
   opacity: ${props => props.onHover ? 1 : 0};

   @media screen and (max-width: 1920px) {
      right: -70px;
   }

   @media screen and (max-width: 1024px) {
      right: -20px;
   }

   @media screen and (max-width: 768px) {
      right: -10px;
      background: black;
      border-radius: 50%;
   }

   @media screen and (max-width: 640px) {
      display: none;
   }
`

const LeftArrowBtn = styled.div<{ onHover: boolean }>`
   z-index: 10;
   width:50px;
   height:50px;
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   left: -120px;
   top: 60%;
   transform: translateY(-50%);
   cursor: pointer;
   transition: .5s ease-in-out opacity;
   opacity: ${props => props.onHover ? 1 : 0};

   @media screen and (max-width: 1920px) {
      left: -70px;
   }

   @media screen and (max-width: 1024px) {
      left: -20px;
   }

   @media screen and (max-width: 768px) {
      left: -10px;
      background: black;
      border-radius: 50%;
   }

   @media screen and (max-width: 640px) {
      display: none;
   }
`
const OurSuperPowersBtn = styled.button`
  cursor: pointer;
  position: relative;
  background-image: linear-gradient(#000,#000), linear-gradient(135deg, #FF6EFF 0%, #0AB7F6 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 10px;
  border: 2px solid transparent;
  color: #D3D3D3;
  width: 122px;
  height: 28px;
  padding:1px;
  font-size: 14px;
`

const ProjectSection = () => {
   const [projectHover, setProjectsHover] = useState<boolean>(false)
   const [papayaHover, setPapayaHover] = useState<boolean>(false)
   const [blocassetHover, setBlocassetHover] = useState<boolean>(false)
   const [rocketHover, setRocketHover] = useState<boolean>(false)
   const [isMoved, setIsMoved] = useState<boolean>(false)
   const projectsRef = useRef<HTMLDivElement>()

   const handleClick = (direction: string) => {
      //To show arrow icon
      setIsMoved(true)


      if (projectsRef.current) {
         const { scrollLeft, clientWidth } = projectsRef.current

         const scrollTo =
            direction === "left"
               ? scrollLeft - clientWidth
               : scrollLeft + clientWidth

         projectsRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
      }
   }

   return (
      <ProjectWrapper
         id="products"
         onMouseEnter={() => { setProjectsHover(true) }}
         onMouseLeave={() => { setProjectsHover(false) }}
      >
         <div className="pt-4 w-full mb-10 px-6 sm:px-0 flex justify-between items-end">
            <div>
               <SectionText headerTxt="Products" />
               <h2 className="text-[#C4C4C4] font-light text-lg  lg:text-[24px] xl:text-[28px] leading-6 lg:leading-10 break-words">
                  Explore some of our web3 products
               </h2>
            </div>
            <h2 className='text-[#C4C4C4] text-[20px] leading-[32px] font-[400]'>Scroll &#8594;</h2>
         </div>

         {/* <LeftArrowBtn onHover={projectHover} onClick={() => handleClick('left')}>
            <Image src={CircleGraident} alt="img" width={60} height={60} className="relative" />
            <FaLongArrowAltLeft fontSize={25} className="text-white absolute" />
         </LeftArrowBtn>

         <RightArrowBtn onHover={projectHover} onClick={() => handleClick('right')}>
            <Image src={CircleGraident} alt="img" width={60} height={60} className="relative" />
            <FaLongArrowAltRight fontSize={25} className="text-white absolute" />
         </RightArrowBtn> */}

         <ProjectsDiv ref={projectsRef}>
            {
               data.map((prod) => {
                  return (prod.id === 4 ? <div>
                     <Card
                     >
                        <ImageContainer className="z-[4] bg-black">
                           <Image
                              src='/images/rocketImage.jpg'
                              alt="card image"
                              layout='fill'
                              loading='lazy'
                              objectFit='cover'
                           />
                        </ImageContainer>
                        <CardBottom className="text-white">
                           <h1 className='text-[26px] leading-[46px] font-[800] pt-[23px]'>{prod.name}</h1>
                           <p className='pt-[12px] pb-[16px] text-[18px] leading-[28px] font-[400] w-[85%] sm:w-[70%]'>{prod.bio}</p>
                           <Link href={prod.link} passHref>
                              <OurSuperPowersBtn>
                                 Early Access
                              </OurSuperPowersBtn></Link>
                        </CardBottom>
                     </Card>
                  </div> :
                     <div key={prod.id}>
                        <Card
                           onMouseEnter={() => { setBlocassetHover(true) }}
                           onMouseLeave={() => { setBlocassetHover(false) }}
                           className="mb-10"
                        >
                           <ImageContainer className="z-[4] bg-black relative">
                              <Image
                                 src='/images/container.svg'
                                 alt="card image"
                                 layout='fill'
                                 loading='lazy'
                                 objectFit='cover'
                              />
                              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                 <Image
                                    src={prod.image}
                                    alt="card image"
                                    width={prod.width}
                                    height={prod.height}
                                    objectFit='cover'
                                 />
                              </div>
                           </ImageContainer>
                           <CardBottom>
                              <h1 className='text-[26px] leading-[46px] font-[800] pt-[23px]'>{prod.name}</h1>
                              <p className='pt-[12px] pb-[16px] text-[18px] leading-[28px] font-[400] w-[85%] sm:w-[70%]'>{prod.bio}</p>
                              <Link href={prod.link} passHref>
                                 <a target="_blank">
                                    <OurSuperPowersBtn>
                                       Learn More
                                    </OurSuperPowersBtn>
                                 </a>
                              </Link>
                           </CardBottom>
                        </Card>
                     </div>
                  )
               })
            }



         </ProjectsDiv>
      </ProjectWrapper>
   )
}


export default ProjectSection