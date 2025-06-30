import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import './i18n';
import '../styles.css'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} /> {/* Esta línea es necesaria */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
