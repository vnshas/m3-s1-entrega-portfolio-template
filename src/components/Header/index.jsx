import PesonalPhoto from "../../assets/me.png"

export const Header =() =>{
    return(
        <header>
            <img src={PesonalPhoto}alt="Foto Pessoal" />
            <h3>Anna</h3>
            <nav>
                <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Projetos</a></li>
                <li><a href="">Contatos</a></li>
                <li><a href="">Mídias Digitais</a></li>
                </ul>
            </nav>
        </header>
    )
}