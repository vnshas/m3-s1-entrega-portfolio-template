import bannerImg from "../../assets/banner-img.png"

export const BannerSection = () =>{
    return (
      <section>
        <div className="container">
          <img src={bannerImg} alt="Imagem banner" />
        </div>
      </section>
    )
}