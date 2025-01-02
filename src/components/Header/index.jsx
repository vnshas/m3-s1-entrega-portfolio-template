import { NavBar } from "./NavBar"
import styles from "./style.module.css"
import mobileMenu from "../../assets/NavBar.png"
import { useState } from "react"

export const Header =() =>{
    const [showNav, setShowNav] = useState(false)
    return(
        <header className="section-gray0">
            <div className="container">
                <div className={styles.FlexBox}>
                    <h3 className="title sm">Anna</h3>
                    <nav className={styles.Menu}>
                        <ul>
                        <li><a className="title nav" href="">Home</a></li>
                        <li><a className="title nav" href="">Projetos</a></li>
                        <li><a className="title nav" href="">Contatos</a></li>
                        <li><a className="title nav" href="">Mídias Digitais</a></li>
                        </ul>
                    </nav>
                    <img className="mobileMenu" src={mobileMenu} alt="Menu mobile" onClick={() => setShowNav(!showNav)} />
                </div>
                
                
                <NavBar show={showNav}/>
            </div>
        </header>
    )
}