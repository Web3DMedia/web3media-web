import Image from 'next/image'
import TeamTxt from '../public/images/TeamTxt.svg'
import EngineeringIcon from '../public/images/engineeringIcon.svg'
import DesignIcon from '../public/images/designIcon.svg'
import AnimationIcon from '../public/images/animationIcon.svg'
import ManagementIcon from '../public/images/managementIcon.svg'
import TeamMembers from './TeamMembers'

const TeamSection = () => {

   return (
      <div className="text-white py-10 px-10 relative">
         <div className="">
            <div className="xl:w-10/12">
               <Image src={TeamTxt} alt="team image"/>
            </div>
            <p className="hidden sm:flex sm:flex-wrap lg:w-5/6 xl:w-3/6 sm:text-lg lg:text-xl">
               A team of highly motivated super heroes with super powers in designs, art, animation, engineering and product.
            </p>
            <p className="flex flex-wrap sm:hidden">
               Explore some of our web3 projects
            </p>
         </div>
         <div className="relative h-50vh sm:h-80vh xl:h-screen flex flex-col items-center justify-center mt-5">
            <div className="flex flex-col items-center w-28 h-20 absolute top-4 left-4 sm:top-2 sm:left-auto">
               <Image src={EngineeringIcon} alt="icon"/>
               <h3 className="mt-1">Engineering</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute top-4 right-4 sm:top-1/2 sm:right-2">
               <Image src={DesignIcon} alt="icon"/>
               <h3 className="mt-1">Design</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute bottom-4 left-4 sm:-bottom-2 sm:left-auto">
               <Image src={AnimationIcon} alt="icon"/>
               <h3 className="mt-1">Animation</h3>
            </div>

            <div className="flex flex-col items-center w-28 h-20 absolute bottom-4 right-4 sm:top-1/2 sm:left-2">
               <Image src={ManagementIcon} alt="icon"/>
               <h3 className="mt-1">Management</h3>
            </div>
            <TeamMembers/>
         </div>
      </div>
   )
}

export default TeamSection