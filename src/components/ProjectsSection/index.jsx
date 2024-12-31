import { ProjectList } from "./ProjectList";
import styles from "./style.module.css"

export const PorjectsSection = () =>{
    return (
      <section className="section-padding">
        <div className="container">
          <div className= {styles.FlexBox}>
            <div className={styles.Title}>
              <h3 className="title sm">My projects</h3>
              <p className="paragraph sm gray3">Projects created at<span> Kenzie Academy</span></p>
            </div>
            <ProjectList />
          </div>
        </div>
      </section>
    );
}