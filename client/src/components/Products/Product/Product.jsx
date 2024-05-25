import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import {NavLink} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Product = ({id,name,price,slug}) => {

    const [products, setProducts] = useState([]);

  

    return <NavLink to={`/product/${slug}`} className="product-cart">
         
        <div className="thumbnail">
        <img src ={`http://localhost:8080/api/v1/product/get-product-photo/${id}`} alt="img" />
        
        </div>
        <div className="prod-details">
            <span className="name">{name}</span>
            <span className="price">&#8377;{price}</span>
        </div>
        
    </NavLink >;
};

export default Product;
