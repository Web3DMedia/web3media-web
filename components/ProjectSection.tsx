
import Image from 'next/image'
import ProjectTxt from '../public/images/projectTxt.svg';
import {projectsData} from '../public/data/projects'
import CircularGradientBtn from './CircularGradientBtn';

type DataItem= {
   id: number,
   cardH2: string,
   cardP: string,
   cardImg: string,
   btnIcon: string,
   btnTxt: string
}
const ProjectSection = () => {

   return (
      <div className="min-h-screen bg-black px-10 xl:p-0">
         <div className="mb-10">
            <div>
               <Image src={ProjectTxt} alt="txt image" />
            </div>
            <h2 className="text-white font-light text-base sm:text-lg lg:text-2xl xl:text-3xl">Explore some of our web3 projects</h2>
         </div>
         <div className="flex flex-col items-center sm:flex-row overflow-x-scroll py-20">
            {
               projectsData.map(project =>(
                  <div key={project.id} className="cursor-pointer text-white my-5 mx-5 w-335 lg:w-628 xl:720 relative">
                     <div className="w-335 lg:w-628 xl:720">
                        <Image src={project.cardImg} alt="cardImage" />
                     </div>
                     <div className="flex justify-between flex-col lg:flex-row">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold lg:basis-1/2">{project.cardH2}</h2>
                        <p className="flex flex-wrap  text-base lg:text-lg lg:basis-1/2">{project.cardP}</p>
                     </div>
                     <div className="my-5 flex xl:hidden">
                        <div className="cursor-pointer flex items-center">
                           <CircularGradientBtn img={project.btnIcon}/>
                           <h2 className="ml-3 text-sm xl:text-base">{project.btnTxt}</h2>
                        </div>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default ProjectSection