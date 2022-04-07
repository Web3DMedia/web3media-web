import {useState} from 'react'
import Image from 'next/image'
import ProjectTxt from '../public/images/ProjectTxt.svg';
import {projectsData} from '../public/data/projects'
import CircularGradientBtn from './CircularGradientBtn';
import {
   ProjectWrapper,
   ProjectCard,
   ImageContainer,
   CardCenter,
   CardBottom
} from '../styles/ProjectSection'

const ProjectSection = () => {
   const [onHover, setOnHover] = useState(false)

   return (
      <ProjectWrapper>
         <div className="mb-10 pl-3">
            <div>
               <Image src={ProjectTxt} alt="txt image" />
            </div>
            <h2 className="text-white font-light text-base sm:text-lg lg:text-2xl xl:text-3xl">Explore some of our web3 projects</h2>
         </div>
         <div className="flex flex-col items-center sm:flex-row overflow-x-scroll sm:h-650">
            {
               projectsData.map(project =>(
                  <ProjectCard
                     key={project.id} 
                     onMouseEnter={() => setOnHover(true)}
                     onMouseLeave={() => setOnHover(false)}
                  >  
                     <ImageContainer>
                        <Image
                           src={project.cardImg}
                           alt="card image"
                           layout='fill'
                           loading='lazy'
                           objectFit='cover'
                        />
                     </ImageContainer>
                     <CardCenter>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold lg:basis-1/2">{project.cardH2}</h2>
                        <p className="flex flex-wrap text-sm lg:text-base lg:basis-1/2">{project.cardP}</p>
                     </CardCenter>
                     <CardBottom onHover={onHover}>
                        <div className="cursor-pointer flex items-center">
                           <CircularGradientBtn img={project.btnIcon}/>
                           <h2 className="ml-3 text-sm xl:text-base">{project.btnTxt}</h2>
                        </div>
                     </CardBottom>
                  </ProjectCard>
               ))
            }
         </div>
      </ProjectWrapper>
   )
}


export default ProjectSection