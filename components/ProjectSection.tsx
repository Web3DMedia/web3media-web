import styles from "../styles/section styles/Project.module.css"
import ProjectTxt from "../images/project.svg"
import Image from "next/image"
import Container from "./Cotainer"
import { projectsData } from "../data/projects"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  return (
    <Container>
      <div className={styles["project-container"]}>
        <div className={styles["project-header"]}>
          <div className={styles["img-wrapper"]}>
            <Image src={ProjectTxt} alt="txt" className={styles["img"]} />
          </div>
          <h5>Explore some of our web3 projects</h5>
        </div>
        <div className={styles["project-cards"]}>
          {projectsData.map(project => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ProjectSection
