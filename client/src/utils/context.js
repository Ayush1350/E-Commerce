import React,{ useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation ,useNavigate} from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
// import React from "react";
import axios from "axios";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [catproducts,setcatProducts] =React.useState()
    const navigate = useNavigate()
    const location = useLocation();
    const [auth,setAuth]=useAuth();


    const cathandler =async (category) =>{
        
        
        try {
            const { data } = await axios.post("http://localhost:8080/api/v1/product/product-filters", {
              category
            });
            setcatProducts(data.products);
            console.log(products)
            navigate('/category')
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        let count = 0;
        cartItems.map((item) => (count += item.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.price * item.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        console.log(auth.isLogin)
        if(auth.isLogin){
        let items = [...cartItems];
        let index = items.findIndex((p) => p._id === product._id);
        if (index !== -1) {
            items[index].quantity += quantity;
        } else {
            product.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
        console.log(cartItems)
    }
    else{
        toast.error("signin require")
    }
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p._id !== product._id);
        setCartItems(items);
    };

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p._id === product._id);
        if (type === "inc") {
            items[index].quantity += 1;
        } else if (type === "dec") {
            if (items[index].quantity === 1) return;
            items[index].quantity -= 1;
        }
        setCartItems(items);
    };

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                categories,
                setCategories,
                cartItems,
                setCartItems,
                handleAddToCart,
                cartCount,
                handleRemoveFromCart,
                showCart,
                setShowCart,
                handleCartProductQuantity,
                cartSubTotal,
                catproducts,
                setcatProducts,
                cathandler
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;