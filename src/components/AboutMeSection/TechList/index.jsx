import {technologies} from "../../../data/technologies"
import { TechCard } from "./TechCard"
import styles from "./style.module.css"

export const TechList = () =>{
    return(
        <ul className={styles.TechList}>
            {technologies.map(tech => (
                <TechCard key={tech.id} tech={tech}/>
            ))}
        </ul>
    )
}