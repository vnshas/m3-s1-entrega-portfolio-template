import { AboutMeSection } from "../../components/AboutMeSection"
import { BannerSection } from "../../components/BannerSection"
import { Header } from "../../components/Header"
import { PorjectsSection } from "../../components/ProjectsSection"
import { Footer } from "../../components/Footer"

export const HomePage = ()=>{
    return (
       <>
       <Header />
       <main>
        <BannerSection />
        <AboutMeSection />
        <PorjectsSection />
       </main>
       <Footer />
       </>
    )
}