import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from "./pages/ProjectDetail"; 
import Footer from './components/Footer';
import Experience from './pages/Experience';
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
                <Route path="/projects/:id" element={<ProjectDetail/>}/>
                <Route path="/experience" element={<Experience/>}/>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
