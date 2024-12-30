import {projects} from "../../../data/projects"
import {ProjectCard} from "./ProjectCard"

export const ProjectList = () =>{
    return(
        <ul>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project}/>
            ))}
        </ul>
    )
}