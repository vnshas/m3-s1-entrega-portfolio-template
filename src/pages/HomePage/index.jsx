import { AboutMeSection } from "../../components/AboutMeSection"
import { BannerSection } from "../../components/BannerSection"
import { Header } from "../../components/Header"
import { ProjectsSection } from "../../components/ProjectsSection"
import { Footer } from "../../components/Footer"
import { ContactSection } from "../../components/ContactSection"

export const HomePage = ()=>{
    return (
       <>
       <Header />
       <main>
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
       </main>
       <Footer />
       </>
    )
}