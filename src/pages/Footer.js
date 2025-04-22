import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css"; // Make sure to import the styles

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h1>ActAware</h1>
                    <p>Empowering change through action and awareness.</p>
                </div>

                <div className="footer-links">
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/donate">Donate</a></li>
                            <li><a href="/learn-sign-language">Sign Language</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Connect</h3>
                        <ul className="footer-socials">
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="mailto:hello@actaware.org"><FaEnvelope /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} ActAware. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
