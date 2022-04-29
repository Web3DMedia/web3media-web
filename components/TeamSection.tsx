import Image from 'next/image'
import EngineeringIcon from '../public/images/engineering-icon.svg'
import DesignIcon from '../public/images/design-icon.svg'
import AnimationIcon from '../public/images/animation-icon.svg'
import ManagementIcon from '../public/images/management-icon.svg'
import TeamMembers from './TeamMembers'
import { TeamSectionDiv } from '../styles/TeameMemberStyles'
import SectionText from './SectionText'
import styled from 'styled-components'

const HeaderP = styled.p`
   line-height: 38px;
   font-size: 28px;
   color: #C4C4C4;

   @media screen and (max-width: 1024px){
      font-size: 24px;
      line-height: 32px;
   }

   @media screen and (max-width: 550px){
      font-size: 18px;
      line-height: 26px;
   }
`
const TeamSection = () => {

   return (
      <TeamSectionDiv id="teams">
         <div className="pt-4 w-full">
            <SectionText headerTxt="Team"/>
            <HeaderP className="flex font-light sm:flex sm:flex-wrap ] lg:max-w-628  xl:max-w-[900px] leading-8">
               A team of highly motivated super heroes with super powers in designs, art, animation, engineering and product.
            </HeaderP>
         </div>
         <div className="relative flex flex-col items-center justify-center w-full my-14 sm:my-16 md:my-20 h-600 lg:h-full md:p-28 lg:py-32">

            <div className="flex flex-col items-center w-28 h-20 absolute top-4 -left-1 sm:-top-12 md:-top-14 lg:-top-5 sm:left-auto">
               <Image src={EngineeringIcon} alt="icon"/>
               <h3 className="mt-1 text-white text-[14px] lg:text-[16px] leading-[14px] sm:leading-4">Engineering</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute top-4 -right-1 sm:top-1/2 sm:-right-5 md:-right-1  xl:right-0 2xl:right-40 4xl:right-80">
               <Image src={DesignIcon} alt="icon"/>
               <h3 className="mt-1 text-white text-[14px] lg:text-[16px] leading-[14px] sm:leading-4">Design</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute bottom-4 -left-1 sm:-bottom-16 lg:-bottom-5 sm:left-auto">
               <Image src={AnimationIcon} alt="icon"/>
               <h3 className="mt-1 text-white text-[14px] lg:text-[16px] leading-[14px] sm:leading-4">Animation</h3>
            </div>

            <div 
               className="flex flex-col items-center w-28 h-20 absolute bottom-4 -right-1 sm:top-1/2 sm:-left-5 md:-left-2 xl:left-0 duration-75 2xl:left-40 4xl:left-80"
            >
               <Image src={ManagementIcon} alt="icon"/>
               <h3 className="mt-1 text-white text-[14px] lg:text-[16px] leading-[14px] sm:leading-4">Management</h3>
            </div>

            <TeamMembers/>
         </div>
      </TeamSectionDiv>
   )
}

export default TeamSection