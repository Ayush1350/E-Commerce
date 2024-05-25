import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam suscipit voluptates voluptatem vitae consequuntur commodi incidunt necessitatibus, minus tenetur quia deleniti provident accusantium nisi facilis optio magnam! Saepe consequuntur necessitatibus praesentium ab incidunt totam facilis ipsum debitis.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    < FaLocationArrow/>
                    <div className="text">
                        pratham square,sahkari jin,himatnagar,sabarkantha,gujarat,383001
                    </div>
                </div>

                <div className="c-item">
                    < FaMobileAlt/>
                    <div className="text"> Phone:0277 024 9512</div>
                </div>

                <div className="c-item">
                    < FaEnvelope/>
                    <div className="text">Email:bmine@gmail.com</div>
                </div>

            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">HeadPhone</div>
                <div className="text">EarBuds</div>
                <div className="text">Speaker</div>
                <div className="text">Watches</div>
                <div className="text">home theater </div>
                <div className="text">projector</div>

            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    THIS WEBSITE IS CREATED BY BMINETECH.
                </div>
            <img src={Payment} alt="payment" />
            </div>
        </div>
    </footer>;
};

export default Footer;
