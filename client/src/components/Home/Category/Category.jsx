import "./Category.scss";
import cart1 from "../../../assets/category/cat-1.jpg"
import cart2 from "../../../assets/category/cat-2.jpg"
import cart3 from "../../../assets/category/cat-3.jpg"
import cart4 from "../../../assets/category/cat-4.jpg"
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";
import React,{useContext, useEffect} from "react";
import { Context } from "../../../utils/context";

const Category = () => {
    // const navigate = useNavigate()
 const {cathandler} =useContext(Context);


    return <div className="shop-by-category">
        <div className="categories">

            <div className="category">
                <img src={cart1} alt="Headphone" onClick={()=>{cathandler("6517d69eb6c1bbe0a0ef11b4")}}/>
            </div>

            <div className="category">
                <img src={cart2} alt="img" onClick={()=>{cathandler("654145446aa2b96c52f887c4")}}/>
            </div>

            <div className="category">
                <img src={cart3} alt="Smartwatches" onClick={()=>{cathandler("6517db0cb6c1bbe0a0ef11da")}}/>
            </div>

            <div className="category">
                <img src={cart4} alt="img" onClick={()=>{cathandler("6541454e6aa2b96c52f887c8")}}/>
            </div>
        </div>
    </div>;
};

export default Category;
