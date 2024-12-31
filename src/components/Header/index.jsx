import styles from "./style.module.css"

export const Header =() =>{
    return(
        <header>
            
            <div className="container">
                <div className={styles.FlexBox}>
                    <h3 className="title sm">Anna</h3>
                    <nav>
                        <ul>
                        <li><a className="title nav" href="">Home</a></li>
                        <li><a className="title nav" href="">Projetos</a></li>
                        <li><a className="title nav" href="">Contatos</a></li>
                        <li><a className="title nav" href="">Mídias Digitais</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}