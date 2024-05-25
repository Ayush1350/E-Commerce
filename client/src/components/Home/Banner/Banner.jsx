import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content"> 
            <h1>SALE</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque nam ipsum, nulla qui vel dolorum dicta, et ullam modi rem nostrum asperiores quo.
            </p>

            
        <div className="btn">
            <div className="banner-btn">Read More</div>
            <div className="banner-btnv2">Shop Now</div>
        </div>
        </div>
        <img  className="banner-img" src={BannerImg} alt="img"/>
        </div>
    </div>
};

export default Banner;
