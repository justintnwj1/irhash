import { useLocation, Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const [linkActive, setLinkActive] = useState("/");

    // Toggle burger menu
    const handleBurgerClick = () => {
        setIsActive(!isActive);
    };

    // Close menu when clicking on a link
    const handleLinkClick = () => {
        setIsActive(false);
    };

    useEffect(() => {
        if (location.pathname === '/projects') {
            setLinkActive('projects');
        } else if (location.pathname === '/skills-certificate') {
            setLinkActive('skills-certificate');
        } else if (location.pathname === '/about') {
            setLinkActive('about');
        }
        else if (location.pathname === '/experience') {
            setLinkActive('experience');
        } else if (location.pathname === '/') {
            setLinkActive('home');
        }
    }, [location.pathname]); // Run when location.pathname changes

    return (
        <header className={`${isActive ? 'active' : ''}`}>
            <div className={`logo ${isActive ? 'active' : ''}`}>
                Electrical Engineer <FontAwesomeIcon icon={faBolt} />
            </div>
            <nav className={isActive ? 'active' : ''}>
                <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                    <div className="nav-links-li" onClick={handleLinkClick}>
                        <Link to="/"><li className={linkActive === 'home' ? 'linkActive' : ''}>Home</li></Link>
                        <Link to="/about"> <li className={linkActive === 'about' ? 'linkActive' : ''}>About</li></Link>
                        <Link to="/projects"><li className={linkActive === 'projects' ? 'linkActive' : ''}>Projects</li></Link>
                        <Link to="/skills-certificate"><li className={linkActive === 'skills-certificate' ? 'linkActive' : ''}>Skills & Certificate</li></Link>
                        <Link to="/experience"><li className={linkActive === 'experience' ? 'linkActive' : ''}>Experience</li></Link>
                    </div>
                </ul>
            </nav>
            <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleBurgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </header>
    );
};

export default Nav;
