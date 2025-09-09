import React from "react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from "./pages/ProjectDetail";
import Footer from './components/Footer';
import Experience from './pages/Experience';
import { useTranslation } from 'react-i18next';
import './i18n';
import '../styles.css';

const OnePage = () => {
    return (
        <div>
            <Navbar />
            <section id="home">
                <Home />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <ProjectDetail />
            </section>

            <section id="experience">
                <Experience />
            </section>

            <Footer />
        </div>
    );
}

export default OnePage;
