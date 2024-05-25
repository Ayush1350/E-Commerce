import "./Products.scss";
import React, { useState, useEffect } from "react";
import Product from "./Product/Product"
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = ({subpage,headingText}) => {

    const [products, setProducts] = useState([]);
    window.scrollTo(0, 0);
    const getAllProducts = async () => {
        try {
          const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
          setProducts(data.products);
        } catch (error) {
          console.log(error);
          toast.error("Something Went Wrong");
        }
      };

      useEffect(() => {
        
        getAllProducts();
      }, []);


    return <div className="Products-container">
 { !subpage &&   <div className="sec-heading">{headingText}</div>}
        <div className="products">

        {products.map((p) => (
           <Product 
           id={p._id}
           name={p.name}
           price={p.price}
           slug={p.slug}
           />
           ))}
        </div>
    </div>;
};

export default Products;
