import React from "react";
import axios from 'axios';

import { useContext } from "react"; 
import {TbSearch} from "react-icons/tb";
import {AiOutlineUser} from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import  Search  from './Search/Search';
import Cart from '../Cart/Cart';
import {context} from '../../utils/context';
import { Link } from "react-router-dom";
import "./Header.scss";
import { useAuth } from "../../context/auth";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate,useLocation } from 'react-router-dom';
import { Context } from "../../utils/context";
// import {useNavigate } from 'react-router-dom'; 


const Header = () => {

    const [scroll,setscroll] =React.useState(false)
    const [showcart,setshowcart]=React.useState(false)
    const [showsearch,setshowsearch]=React.useState(false)
    const [auth,setAuth]=useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const { cartItems } = useContext(Context);

    const Userhandler= async() =>{
        if(auth.isLogin){
       if(auth.user.role==1){
        navigate("/admin");
       }
       if (auth.user.role==0) {
        navigate("/user")
       } 
    }
       else{
        toast.error("signin require")
       }

    }


    const handleScroll = () =>{
        const offset =window.scrollY
        offset>200 ? setscroll(true):setscroll(false)
    }
    React.useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])

    const  logout =() =>{
        localStorage.removeItem("auth")
        setAuth({
            ...auth,
        user:"",
        token:"",
        isLogin:false

        })
        toast.success("Logout successfully")

    }


    const handlelogin=() =>{
        navigate('/login',{state: location.pathname})
    }
    const handlesignup=() =>{
        navigate('/re',{state:location.pathname})
    }
 
    return(
<>
    <div className={`main-header ${scroll?'stickey-header' : ''}`}>
       <div className="header-content">
           <ui className='left'>
            <li>
             <NavLink to="/" className="li">   Home </NavLink>
{/* {console.log(auth)} */}
            </li>
            <li>
             <NavLink to='/about' className="li">   About </NavLink>
            </li>
            <li>
             <NavLink to='/category/1' className="li">   Categories </NavLink>
            </li>
           </ui>
        <NavLink to='/' className="center">MINE</NavLink>
        <div className="right">
          <TbSearch onClick={()=>setshowsearch(true)}/>
          {/* <Search/> */}
          <AiOutlineUser   onClick={Userhandler}/>
          <span className="cart-icon" onClick={()=>setshowcart(true)}>
           <CgShoppingCart />
           <span >{cartItems.length}</span>
          </span>
     {
     !auth.user ? (<>   
      <button class="log" onClick={handlelogin}>Login</button> 
      <button class="reg" onClick={handlesignup}>Sign up</button> 
     </>) 
     : 
     (
        <>   
        <NavLink to='/login'> <button class="log" onClick={logout}>LogOut</button> </NavLink> 
        </>  
     ) 
    }
       </div>
     </div>
    </div>
     {showcart && <Cart setshowcart={setshowcart}/> }
     {showsearch && <Search setshowsearch={setshowsearch}/> }

    </>
    );
};

export default Header;
