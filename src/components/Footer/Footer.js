import React from 'react';
import logo from '../../image/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="bg-dark text-white footer-section mt-5 p-3">
            <div>
                <img
                    height="60px"
                    width="200px"
                    src={logo} alt="logo" />
            </div>
            <div className="container w-75">
                <div className="row">
                    <div className="col w-50">
                        <ul className="">
                            <ul>About Online Food</ul>
                            <ul>Read our blog</ul>
                            <ul>Sign up too deliver</ul>
                            <ul>Add your restaurant</ul>
                        </ul>
                    </div>
                    <div className="col w-50">
                        <ul className="">
                            <ul>Get Help</ul>
                            <ul>Read FAQs</ul>
                            <ul>View all cities</ul>
                            <ul>Restaurants near me</ul>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end policy">
                <a href="#"> © Zayed</a>



            </div>


        </footer>
    );
};

export default Footer;