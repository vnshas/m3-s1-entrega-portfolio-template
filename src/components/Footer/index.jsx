import PesonalPhoto from "../../assets/me.png"

export const Footer = () =>{
    return (
      <footer>
        <img src={PesonalPhoto} alt="Foto pessoal" />
        <h3>Thank you!</h3>
        <p>Follow me on my social networks and let's talk</p>
        <a href="#">facebook</a>
        <a href="#">instagram</a>
        <a href="#">linkedin</a>
      </footer>
    );
}