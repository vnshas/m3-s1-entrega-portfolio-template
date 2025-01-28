import PesonalPhoto from "../../assets/me.png"
import styles from "./style.module.css"
import face from "../../assets/Bt-Circle-Facebook.png"
import insta from "../../assets/Bt-Circle-Instagram.png"
import linkedIn from "../../assets/Bt-linkedIn.png"

export const Footer = () =>{
    return (
      <footer className={styles.footer}>
        <div className="container ">
          <div className={styles.flexBox}>
            <div className={styles.Me}>
              <img src={PesonalPhoto} alt="Foto pessoal" />
              <div>
                <h3 className="title sm">Thank you!</h3>
                <p className="paragraph sm gray3">Follow me on my social networks and let's talk</p>
              </div>
            </div>
            <div className={styles.Icons}>
              <a href="#"><img src={face} alt="Facebook" /></a>
              <a href="#"><img src={insta} alt="Instagram" /></a>
              <a href="#"><img src={linkedIn} alt="LinkedIn" /></a>
            </div>
                    </div>
          </div>
      </footer>
    )
}