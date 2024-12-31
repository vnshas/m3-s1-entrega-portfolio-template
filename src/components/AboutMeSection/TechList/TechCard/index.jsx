import styles from "./style.module.css"

export const TechCard = ({tech}) =>{
    return(
        <li className={styles.TechItem}>
            <img src={tech.img} alt={tech.name} />
        </li>
    )
}