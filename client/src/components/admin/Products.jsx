import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"; 
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
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
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`http://localhost:8080/api/v1/product/get-product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>       
        </div>
    </div>

    </div>
        
      </div>
  );
};

export default Products;