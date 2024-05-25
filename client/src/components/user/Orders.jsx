import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth(); // Destructure auth directly
  
  const getOrders = async () => {
    try {
      const userId = auth.user._id;
      const response = await axios.get(`http://localhost:8080/api/v1/auth/orders`, {
        params: { userId }
      });
      setOrders(response.data);
      setLoading(false);
      console.log(userId);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false); // Stop loading indicator in case of error
    }
  };

  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);

  return (
    <div className="main">
      <div className="sidebar">
        <h2>User Panel</h2>
        <ul className="nav-list">
          <li><NavLink to="/user/profile" className="item">Profile</NavLink></li>
          <li><NavLink to="/user/orders" className="item">Orders</NavLink></li>
        </ul>
      </div>
      <div className="content">
        {loading ? (
          <p>Loading orders...</p>
        ) : (
          <div className="detail">
            {orders.length > 0 ? (
              <ul>
                {orders.map((order, index) => (
                  <li key={index}>{JSON.stringify(order)}</li>
                ))}
              </ul>
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
