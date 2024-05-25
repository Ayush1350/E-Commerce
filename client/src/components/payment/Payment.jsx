import React,{useContext,useState,useEffect} from "react";
import axios from "axios";
import DropIn from "braintree-web-drop-in-react";
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { Context } from "../../utils/context";


const Payment = () => {
  const [auth, setAuth] = useAuth();
    const [clientToken, setClientToken] = useState("");
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(false);
    const { cartItems, setShowCart, cartSubTotal } = useContext(Context);
    const [cart,setCart]=useState()
const navigate = useNavigate()
    

const handlePayment =async()=>{
  try {
    let total = 0;
    cartItems.map((i) => {
      total += i.price;
    });
    console.log(total)
    let _id = auth.user._id
    console.log(cartItems)

    setLoading(true);
    const { nonce } = await instance.requestPaymentMethod();
    const { data } = await axios.post("http://localhost:8080/api/v1/product/braintree/payment", {
      nonce,
      cartItems,
      _id
    });
    console.log("data1")
    setLoading(false);
    // localStorage.removeItem("cart");
    // setCart([]);
    navigate("/user/orders");
    toast.success("Payment Completed Successfully ");
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
}
    const getToken = async () => {
        try {
          const { data } = await axios.get("http://localhost:8080/api/v1/product/braintree/token");
          setClientToken(data.clientToken);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getToken();
      },[]);

  return (
    <div>
       <div className="mt-2">
  
               { clientToken?    <DropIn
                      options={{
                        authorization:clientToken,
                        paypal: {
                          flow: "vault",
                        },  
                      }}
                      onInstance={instance => setInstance(instance)}
                    />:""}

                    <button
                      className="btn btn-primary"
                      onClick={handlePayment}
                      
                    >
                      {loading ? "Processing ...." : "Make Payment"}
                    </button>
      
              </div>
    </div>
  )
}

export default Payment
