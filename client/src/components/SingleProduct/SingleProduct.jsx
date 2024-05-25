 import "./SingleProduct.scss";
 import React, { useContext } from "react"
 import RelatedProducts from "./RelatedProducts/RelatedProducts"
 import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterest,FaCartPlus} from "react-icons/fa";
 import img from '../../assets/products/watch-prod-1.webp';
 import Cart from "../Cart/Cart";
 import axios from "axios";
import toast from "react-hot-toast";
import {useParams} from "react-router-dom";
import { useAuth } from "../../context/auth";
import {Context} from "../../utils/context"

const SingleProduct = () => {

    const params = useParams();
    const [quantity,setquantity] = React.useState(1)
    const [product,setproduct] =React.useState([])
    const [category,setcategory] =React.useState([])
    const id=product._id
    const {handleAddToCart}= useContext(Context)

    const increment = () =>{      
                      setquantity(quantity+1) 
} 

const decrement = () =>{      
   quantity==0 ?setquantity(quantity) : setquantity(quantity-1) ;
} 
    
const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/v1/product/get-product/${params.slug}`);

 setproduct(data.product);
 setcategory(data.product.category);
  
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  console.log(product)
  React.useEffect(() => {
    getAllProducts();
  }, [params]);


    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={`http://localhost:8080/api/v1/product/get-product-photo/${id}`} alt="img" />
                </div>
                <div className="right">
                    <span className="name">{product.name}</span>
                    <span className="price">&#8377;{product.price}</span>
                    <span className="desc">{product.description}</span>
                  <div className="cart-buttons">
                    <div className="quantity-buttons">
                      <span onClick={decrement}>-</span>
                      <span>{quantity}</span>
                      <span onClick={increment}>+</span>
                    </div>
                    <button className="add-to-cart-button" onClick={()=>{{handleAddToCart(product,quantity)}setquantity(1)}}>
                        <FaCartPlus size={20} />
                        add to cart
                    </button>
                    </div> 
                    
                            <span className="divider" />
                            <div className="info-item">
                                <span className="text-bold">Category:
                                <span>{category
.name}</span>
                                </span>
                                <span className="text-bold">Share:
                                <span className="social-items">
                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaLinkedinIn size={16}/>
                                    <FaPinterest size={16}/>
                                </span>
                                </span>
                                
                            </div>
                    
                   
                </div>
            </div>
                <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
