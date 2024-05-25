import "./Home.scss";
import "./Banner/Banner"
import Banner from "./Banner/Banner";
import Category from  "../Home/Category/Category"
import Products from "../Products/Products";
const Home = () => {
    return <div className="home">
        <Banner />
        <div className="main-contain">
            <div className="layout">
                <Category/>
                <Products  headingText="popular Products"/>
                
            </div>
        </div>
    </div>;
};

export default Home;
