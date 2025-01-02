
export const NavBar = ({show}) =>{
    return (
      <div className={show ? "sidenav active" : "sidenav"}>
        <ul>
          <li className="navItem">
            <a className="title nav" href="">
              Home
            </a>
          </li>
          <li className="navItem">
            <a className="title nav" href="">
              Projetos
            </a>
          </li>
          <li className="navItem">
            <a className="title nav" href="">
              Contatos
            </a>
          </li>
          <li className="navItem">
            <a className="title nav" href="">
              Mídias Digitais
            </a>
          </li>
        </ul>
      </div>
    );
}