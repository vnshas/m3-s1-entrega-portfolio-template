import {projects} from "../../../data/projects"
import {ProjectCard} from "./ProjectCard"
import styles from "./style.module.css"

export const ProjectList = () =>{
    return(
        <ul className={styles.GridBox}>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project}/>
            ))}
        </ul>
    )
}