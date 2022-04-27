import Image from 'next/image'
import EngineeringIcon from '../public/images/engineering-icon.svg'
import DesignIcon from '../public/images/design-icon.svg'
import AnimationIcon from '../public/images/animation-icon.svg'
import ManagementIcon from '../public/images/management-icon.svg'
import TeamMembers from './TeamMembers'
import { TeamSectionDiv } from '../styles/TeameMemberStyles'
import SectionText from './SectionText'

const TeamSection = () => {

   return (
      <TeamSectionDiv id="teams">
         <div className="pt-4 w-full">
            <SectionText headerTxt="Team"/>
            <p className="flex font-light sm:flex sm:flex-wrap sm:text-lg lg:text-[24px] lg:max-w-628 xl:text-[28px] text-white xl:max-w-[900px] leading-8">
               A team of highly motivated super heroes with super powers in designs, art, animation, engineering and product.
            </p>
         </div>
         <div className="relative flex flex-col items-center justify-center w-full my-14 sm:my-16 md:my-20 h-600 lg:h-full md:p-28 lg:py-32">

            <div className="flex flex-col items-center w-28 h-20 absolute top-4 -left-2 sm:-top-8 md:-top-10 lg:-top-5 sm:left-auto">
               <Image src={EngineeringIcon} alt="icon"/>
               <h3 className="mt-1 text-white text-[14px] lg:text-[16px] leading-[14px] sm:leading-4">Engineering</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute top-4 -right-4 sm:top-1/2 sm:-right-5 md:-right-1  xl:right-0">
               <Image src={DesignIcon} alt="icon"/>
               <h3 className="mt-1 text-white text-[14px] lg:text-[16px] leading-[14px] sm:leading-4">Design</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute bottom-4 -left-2 sm:-bottom-8 md:-bottom-10 lg:-bottom-5 sm:left-auto">
               <Image src={AnimationIcon} alt="icon"/>
               <h3 className="mt-1 text-white text-[14px] lg:text-[16px] leading-[14px] sm:leading-4">Animation</h3>
            </div>

            <div 
               className="flex flex-col items-center w-28 h-20 absolute bottom-4 -right-4 sm:top-1/2 sm:-left-5 md:-left-2 xl:left-0 duration-75"
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