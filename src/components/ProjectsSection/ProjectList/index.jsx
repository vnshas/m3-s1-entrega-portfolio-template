import {projects} from "../../../data/projects"
import {ProjectCard} from "./ProjectCard"
import styles from "./style.module.css"

export const ProjectList = ({children}) =>{
    return(
        <ul className={styles.GridBox}>
            {children}
        </ul>
    )
}