import { ProjectList } from "./ProjectList"
import styles from "./style.module.css"
import {projects} from "../../data/projects"
import {ProjectCard} from "./ProjectList/ProjectCard/index"

export const ProjectsSection = () =>{
    return (
      <section className="section-padding">
        <div className="container">
          <div className= {styles.FlexBox}>
            <div className={styles.Title}>
              <h3 className="title sm">My projects</h3>
              <p className="paragraph sm gray3">Projects created at<span className={styles.Kenzie}> Kenzie Academy</span></p>
            </div>
            <ProjectList>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project}/>
            ))}
            </ProjectList>
          </div>
        </div>
      </section>
    )
}