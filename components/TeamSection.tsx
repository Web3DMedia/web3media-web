import Image from 'next/image'
import TeamTxt from '../public/images/team-txt.svg'
import EngineeringIcon from '../public/images/engineering-icon.svg'
import DesignIcon from '../public/images/design-icon.svg'
import AnimationIcon from '../public/images/animation-icon.svg'
import ManagementIcon from '../public/images/management-icon.svg'
import TeamMembers from './TeamMembers'
import { TeamSectionDiv } from '../styles/TeameMemberStyles'

const TeamSection = () => {

   return (
      <TeamSectionDiv >
         <div className="pt-4">
            <div className="xl:w-10/12">
               <Image src={TeamTxt} alt="team image"/>
            </div>
            <p className="hidden sm:flex sm:flex-wrap lg:w-5/6 xl:w-3/6 sm:text-lg lg:text-xl text-white">
               A team of highly motivated super heroes with super powers in designs, art, animation, engineering and product.
            </p>
            <p className="flex flex-wrap sm:hidden text-white">
               Explore some of our web3 projects
            </p>
         </div>
         <div className="relative flex flex-col items-center justify-center mt-5 md:mt-20 h-600 lg:h-full md:p-36 lg:py-40">
            <div className="flex flex-col items-center w-28 h-20 absolute top-4 -left-10 sm:top-2 md:-top-10 lg:-top-5 sm:left-auto">
               <Image src={EngineeringIcon} alt="icon"/>
               <h3 className="mt-1 text-white">Engineering</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute top-4 -right-10 sm:top-1/2 sm:right-2 md:-right-24 xl:right-0">
               <Image src={DesignIcon} alt="icon"/>
               <h3 className="mt-1 text-white">Design</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute bottom-4 -left-10 sm:-bottom-2 md:-bottom-14 lg:-bottom-5 sm:left-auto">
               <Image src={AnimationIcon} alt="icon"/>
               <h3 className="mt-1 text-white">Animation</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute bottom-4 -right-10 sm:top-1/2 sm:left-2 md:-left-24 xl:left-0">
               <Image src={ManagementIcon} alt="icon"/>
               <h3 className="mt-1 text-white">Management</h3>
            </div>
            <TeamMembers/>
         </div>
      </TeamSectionDiv>
   )
}

export default TeamSection