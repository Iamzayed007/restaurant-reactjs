import React from 'react';
import logo from '../../image/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="bg-dark text-white footer-section">
            <div>
                <img
                    height="60px"
                    width="200px"
                    src={logo} alt="logo" />
            </div>
            <div>
                <div>
                    <ul className="footer-text">
                        <ul>About Online Food</ul>
                        <ul>About Online Food</ul>
                        <ul>About Online Food</ul>
                    </ul>
                </div>
                <div>
                    <ul className="footer-text">
                        <ul>About Online Food</ul>
                        <ul>About Online Food</ul>
                        <ul>About Online Food</ul>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;