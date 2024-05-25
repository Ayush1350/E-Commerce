import React, { useState } from 'react';
import './Register.css';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (phone.length !== 10) {
                toast.error("Phone number should be 10 digits");
                return;
            }

            if (password.length < 6) {
                toast.error("Password should be at least 6 characters long");
                return;
            }

            if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }

            const res = await axios.post(`http://localhost:8080/api/v1/auth/register`, { name, email, phone, password, address });

            if (res.data.success) {
                console.log(res.data.message);
                toast.success("Registered successfully");
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                toast.error(res.data.message);
                console.log(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="title">Registration</div>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="user-details">
                        <input type="text"
                            placeholder="Enter your name"
                            className="input-box"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />

                        <input type="text"
                            placeholder="Enter your Address"
                            className="input-box"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required />

                        <input type="email"
                            placeholder="Enter your email"
                            className="input-box"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />

                        <input type="tel"
                            placeholder="Enter your number"
                            className="input-box"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required />

                        <input type="password"
                            placeholder="Enter your password"
                            className="input-box"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />

                        <input type="password"
                            placeholder="Confirm your password"
                            className="input-box"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required />
                    </div>

                    <div className="button">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
