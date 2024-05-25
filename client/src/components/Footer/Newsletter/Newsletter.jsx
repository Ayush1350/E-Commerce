import React from 'react';
import "./Newsletter.scss";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,} from 'react-icons/fa';   
const Newsletter = () => {
    return <div className='newsletter-section'>
        <div className="newsletter-content">
            <span className="small-text">NEWLETTER</span>
            <span className="big-text">Sign up for letest updates and offers</span>
            <div className="form">
                <input type="email" placeholder="<EMAIL>" />
                <button>Subscribe</button>
            </div>
            <div className="text">will be accordance with our Privacy Policy</div>
            <div className="social">
                <div className="icon"><FaFacebookF size={14}/></div>
                <div className="icon"><FaTwitter size={14}/></div>
                <div className="icon"><FaInstagram  size={14}/> </div>
                <div className="icon"><FaLinkedinIn size={14}/></div>
                
                
            </div>
        </div>
    </div>;
};

export default Newsletter;
