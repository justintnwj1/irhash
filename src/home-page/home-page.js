import React from 'react';
import Navigation from "../navigation/nav";
import Home from "../pages/home/home";
import Project from "../pages/projects/projects";
import About from "../pages/about/about";
import SkillsCert from "../pages/s_c/s_c";
import Experience from "../pages/experience/experience";

function HomePage() {
    return (
        <main>
            {/* Setiap section memiliki id sesuai dengan path URL */}
            <Navigation />

            <section id="home">
                <Home />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <Project />
            </section>

            <section id="skills-certificate">
                <SkillsCert />
            </section>

            <section id="experience">
                <Experience />
            </section>
        </main>
    );
}

export default HomePage;