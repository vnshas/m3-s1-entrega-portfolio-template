import { AboutMeSection } from "../../components/AboutMeSection"
import { BannerSection } from "../../components/BannerSection"
import { Header } from "../../components/Header"
import { PorjectsSection } from "../../components/ProjectsSection"
import { Footer } from "../../components/Footer"
import { ContactSection } from "../../components/ContactSection"

export const HomePage = ()=>{
    return (
       <>
       <Header />
       <main>
        <AboutMeSection />
        <PorjectsSection />
        <ContactSection />
       </main>
       <Footer />
       </>
    )
}