export const ProjectCard = ({project}) =>{
    return (
        <li>
            <h2 className="title md">{project.name}</h2>
            <p className="paragraph gray3">{project.description}</p>
        </li>
    )
}