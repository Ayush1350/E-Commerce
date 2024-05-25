import React,{useContext,useState,useEffect} from "react";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs"
import { useNavigate,useLocation } from 'react-router-dom';
import "./Cart.scss";
import axios from "axios";
import CartItem from "./CartItem/CartItem"
import { Context } from "../../utils/context";



const Cart = ({setshowcart}) => {

    const navigate = useNavigate()
    const location =useLocation()
    const { cartItems, setShowCart, cartSubTotal } = useContext(Context);
    

   const handlereturn = ()=>{
navigate(location.state)
setshowcart(false)
   } 

  

    return <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=>setshowcart(false)}>
                    <MdClose />
                    <span className="text" >close</span>
                </span>
            </div>
           {!cartItems.length ? ( <div className="empty-cart">
                <BsCartX />
                <span>No Product Added</span>
                <button className="return-cta" onClick={handlereturn}>RETURN TO SHOPE</button>
               
            </div>):
            <>
          <CartItem/>
           
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal</span>
                    <span className="text-total">{cartSubTotal}</span>
                </div>
                <div className="button">
                    <button className="checkout-cta" onClick={()=> navigate('/payment')}>CheckOut</button>
                </div>
            </div>
             </>}
        </div>
    </div>;
};

export default Cart;
