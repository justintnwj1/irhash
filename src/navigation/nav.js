import { useLocation, Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [linkActive, setLinkActive] = useState("/");
    const dropdownRef = useRef(null);
    const navRef = useRef(null);
    const [activeModal, setActiveModal] = useState(null);
    // Toggle burger menu
    const handleBurgerClick = () => {
        setIsActive(!isActive);
    };

    // Close menu when clicking on a link
    const handleLinkClick = () => {
        setIsActive(false);
    };

    // Toggle dropdown
    const handleDropdownToggle = (e) => {
        e.preventDefault();
        setIsDropdownActive(!isDropdownActive);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsActive(false); // Close the burger menu when clicking outside
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (location.pathname === '/projects') {
            setLinkActive('projects');
        } else if (location.pathname === '/skills-certificate') {
            setLinkActive('skills-certificate');
        }else if (location.pathname === '/experience') {
            setLinkActive('experience');
        } else if (location.pathname === '/') {
            setLinkActive('home');
        }
    }, [location.pathname]); // Run when location.pathname changes

    return (
        <header>
            <div className="logo">
                Electrical Engineer <FontAwesomeIcon icon={faBolt} />
            </div>
            <nav ref={navRef}>
                <ul>
                    <div className="nav-links-li" onClick={handleLinkClick}>
                        <Link to="/"><li className={linkActive === 'home' ? 'linkActive' : ''}>Home</li></Link>
                        <Link to="/about"> <li className={linkActive === 'about' ? 'linkActive' : ''}>About</li></Link>
                        <Link to="/projects"><li className={linkActive === 'projects' ? 'linkActive' : ''}>Projects</li></Link>
                        <Link to="/skills-certificate"><li className={linkActive === 'skills-certificate' ? 'linkActive' : ''}>Skills & Certificate</li></Link>
                        <Link to="/experience"><li className={linkActive === 'experience' ? 'linkActive' : ''}>Experience</li></Link>
                    </div>
                </ul>
            </nav>
            <div class="hamburger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </header>
    );
};

export default Nav;