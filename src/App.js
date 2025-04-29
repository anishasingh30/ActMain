import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Goal from './pages/Goal';
import Footer from './pages/Footer';
import ApplicationForm from "./components/Auth/ApplictionForm";
import Login from "./components/Auth/LoginForm";
import Register from './pages/RegisterForm';
import DonationPage from './pages/DonationForm'
import './App.css';

function App() {
    const userId = localStorage.getItem("userId");

    return (
        <ThemeProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/goal/:id" element={<Goal />} />
                    <Route
                        path="/apply"
                        element={<ApplicationForm userId={userId} />}
                    />
                    <Route
                        path="/signup"
                        element={<Login userId={userId} />}
                    />
                    <Route
                        path="/register"
                        element={<Register userId={userId} />}
                    />
                    <Route
                        path="/create-order"
                        element={<DonationPage />}
                    />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider >
    );
}

export default App;
