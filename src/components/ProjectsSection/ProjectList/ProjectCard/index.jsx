import styles from "./style.module.css"
import githubProject from "../../../../assets/githubProject.png"
import applicationProject from "../../../../assets/aplicationProject.png"

export const ProjectCard = ({project}) =>{
    return (
        <li className={styles.ProjectList}>
            <h2 className="title md">{project.name}</h2>
            <p className="paragraph gray3">Linguagens: <span className={styles.Card}>{project.linguagem}</span></p>
            <p className="paragraph gray3">{project.description}</p>
            <div className={styles.GitApp}>
                <a href="#"><img src={githubProject} alt="Github image" /></a>
                <a href="#"><img src={applicationProject} alt="App image" /></a>
            </div>
        </li>
    )
}