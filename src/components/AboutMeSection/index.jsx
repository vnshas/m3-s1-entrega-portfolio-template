import { TechList } from "./TechList";
import PesonalPhoto from "../../assets/me.png"
import gitIcon from "../../assets/Bt-Circle-github.png"
import bannerImg from "../../assets/banner-img.png"
import styles from "./style.module.css"

export const AboutMeSection = () =>{
    return (
      <section className="section-gray05 section-padding">
        <div className="container">
          <div className={styles.FlexBox}>
            <div className={styles.About}>
              <div className={styles.Me}>
                <img src={PesonalPhoto}alt="Foto Pessoal" />
                <p className="paragraph gray3">Hello, my name is Anna</p>
              </div>
              <h1 className="title lg">I <span className="purple">love</span> creating and <span className="purple">developing</span> projects</h1>
              <span className="paragraph gray2">Discover here in this environment, created especially for you, all my projects and technologies</span>
              <div className={styles.Projects}>
                <button className="btn purple">See Projects</button>
                <img src={gitIcon} alt="Icone GitHub" />
              </div>
              <TechList />
            </div>
            <img src={bannerImg} alt="Imagem banner" />
          </div>
        </div>
      </section>
    );
}