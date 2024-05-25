import React from "react";
import './user.scss'
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
const User = () => {

  const [auth,setAuth]=useAuth()
console.log(auth)
  return (
    <div className="main">
    <div className="sidebar">
        <h2>User Panel</h2>
        <ul className="nav-list">
            <li><NavLink to="/user/profile" className="item">Profile</NavLink></li>
        </ul>
        <ul className="nav-list">
            <li><NavLink to="/user/orders" className="item">Orders</NavLink></li>
        </ul>
    </div>
    <div className="content">
        <div className="detail">
            <h2>Name:{auth.user.name}</h2>
            <h2>Email:{auth.user.email}</h2>
            
        </div>
    </div>

    </div>
  );
};

export default User;