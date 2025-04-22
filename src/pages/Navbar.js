import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleScrollToSection = (e, sectionId) => {
        e.preventDefault();
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <nav className="navbar">
            <div className="logo">ActAware</div>
            <ul className="nav-links">
                <li>
                    <a href="/home" onClick={(e) => handleScrollToSection(e, "hero-section")}>Home</a>
                </li>
                <li>
                    <a href="/body" onClick={(e) => handleScrollToSection(e, "about-section")}>About Us</a>
                </li>
                <li>
                    <a href="/blogs" onClick={(e) => handleScrollToSection(e, "body-container")}>17 Goals</a>
                </li>
                <li>
                    <a href="/blogs" onClick={(e) => handleScrollToSection(e, "horizontal-scroll-stories")}>Stories</a>
                </li>
                <li>
                    <a href="http://localhost:3009/apply" onClick={() => window.location.href = "http://localhost:3009/apply"}>Sign Language</a>
                </li>
                <li className="theme-toggle-wrapper">
                    <button className="theme-toggle-btn" onClick={toggleTheme}>
                        {theme === "light" ? "☀️" :
                            theme === "dark" ? "🌙" :
                                theme === "blue" ? "🔵" :
                                    theme === "green" ? "🟢" :
                                        theme === "purple" ? "🟣" : "❓"}
                    </button>
                </li>
                <NavLink to="/signup">
                    <button className="signup-btn">Sign Up</button>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;