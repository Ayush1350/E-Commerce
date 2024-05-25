import React from "react";
import './AdminMenu.scss'
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
const AdminMenu = () => {

  const [auth,setAuth]=useAuth()

  return (
    <div className="main">
    <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul className="nav-list">
            <li><NavLink to="/admin/create-product" className="item">Create Product</NavLink></li>
            <li><NavLink to="/admin/create-category" className="item">Create category</NavLink></li>
            <li><NavLink to="/admin/users" className="item">User</NavLink></li>
            <li><NavLink to="/admin/products" className="item">Products</NavLink></li>
            <li><NavLink to="/admin/orders" className="item">Orders</NavLink></li>
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

export default AdminMenu;