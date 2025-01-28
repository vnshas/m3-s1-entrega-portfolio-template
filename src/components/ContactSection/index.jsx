import mail from "../../assets/MailContact.png"
import phone from "../../assets/wpp.png"
import linkedIn from "../../assets/lkdIn.png"
import styles from "./style.module.css"

export const ContactSection = () =>{
    return (
      <section className="section-gray05 section-padding">
        <div className="container">
          <div className={styles.FlexBox}>
            <div className="container sm">
              <h2 className="title md">
                Let's set up a conversation and{" "}
                <span className="purple">develop our creativity</span> together?
              </h2>
              <p className="paragraph gray3">
                Advertise your brand organically within Dribbble's design
                inspiration feed.
              </p>
            </div>
            <div className={styles.Contacts}>
              <div className={styles.Contact}>
                <img src={phone} alt="My phone" />
                <div className={styles.Text}>
                  <h3 className="title sm">My phone</h3>
                  <p className="paragraph gray3 sm">
                    I'm available for a voice chat, let's about creativity
                    together?
                  </p>
                  <a className="paragraph gray2" href="">Call Now</a>
                </div>
              </div>

              <div className={styles.Contact}>
                <img src={mail} alt="My email" />
                <div className={styles.Text}>
                  <h3 className="title sm">My email</h3>
                  <p className="paragraph gray3 sm">
                    Send me an email reporting feedbacks, suggestions and ideas
                  </p>
                  <a className="paragraph gray2" href="">Send email now</a>
                </div>
              </div>
              <div className={styles.Contact}>
                <img src={linkedIn} alt="My linkedIn" />
                <div className={styles.Text}>
                  <h3 className="title sm">My LinkedIn</h3>
                  <p className="paragraph gray3 sm">
                    We can create more constant interactions as well as a
                    sharing network
                  </p>
                  <a className="paragraph gray2" href="">Go to Telegram now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}