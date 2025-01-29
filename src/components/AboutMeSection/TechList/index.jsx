import {technologies} from "../../../data/technologies"
import { TechCard } from "./TechCard"
import styles from "./style.module.css"

export const TechList = ({children}) =>{
    return(
        <ul className={styles.TechList}>
            {children}
        </ul>
    )
}