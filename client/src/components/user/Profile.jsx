import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import './user.scss'
import { NavLink } from "react-router-dom";
import CategoryForm from "../admin/CategoryForm";
import { useAuth } from "../../context/auth";
import { Modal } from "antd";
const CreateCategory = () => {
    const [auth,setAuth]=useAuth()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
  
    //get user data
    useEffect(() => {
      const { email, name, phone, address } = auth?.user;
      setName(name);
      setPhone(phone);
      setEmail(email);
      setAddress(address);
    }, [auth?.user]);
  

    const handleSubmit = async (e) => {
        e.preventDefault();
    const id = auth.user._id;

        try {
    const { data } = await axios.post("http://localhost:8080/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
        id
      });
      console.log(data)
      if(password.length<6) 
      {
        toast.error("Something went wrong");
        return
      }
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

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
            <div className="col-md-8">
            <div className="form-container" style={{ marginTop: "-40px" }}>
              <form onSubmit={handleSubmit}>
                <h4 className="title">USER PROFILE</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email "
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Address"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
                
            </div>
        </div>
    
        </div>
      );
};

export default CreateCategory;