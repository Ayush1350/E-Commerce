import "./CartItem.scss";
import { useContext } from "react";
import {MdClose} from "react-icons/md"

import { Context } from "../../../utils/context";
const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =useContext(Context);

    return <div className="cart-products">
          {cartItems?.map((item) => (

         <div className="cart-product">
            <div className="img-container">
                <img src={`http://localhost:8080/api/v1/product/get-product-photo/${item._id}`} alt="img" />
            </div>
            <div className="prod-details">
                <span className="name">{item.name}</span>
                <MdClose className="close-btn"  onClick={() => handleRemoveFromCart(item)}/>
                <div className="quantity-buttons" >
                <span onClick={() =>handleCartProductQuantity("dec", item)}>-</span>
                      <span>{item.quantity}</span>
                      <span onClick={() =>handleCartProductQuantity("inc", item)}>+</span>
                    </div>
                    <div className="text">
                    <span>{item.quantity}</span>
                      <span>x</span>
                      <span className="highlight">&#8377;{item.price}</span>
                    </div>
            </div>
        </div>
          ))}
        
    </div>;
};

export default CartItem;
