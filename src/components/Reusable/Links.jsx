import React, { useEffect, useState } from 'react'
import { navlinks } from './Navbar'
import { categories } from '../Home/CategorySwiper'
import { useLocation } from 'react-router-dom';

const Links = ({ className, type, linksStyles }) => {
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Function to check which section is in view
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Loop through sections and check if they are in view
            navlinks.forEach(link => {
                const element = document.getElementById(link.path.slice(1));
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 0) {
                        setActiveSection(link.path);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex ${className}`}>
            {type !== 'category' ?
                navlinks.map((link, i) => (
                    <a key={i} href={link.path}
                        className={`${activeSection === link.path ? 'text-primary' : 'text-white'}  hover:text-primary ${linksStyles}`}>
                        {link.title}
                    </a>
                ))
                :
                categories.map((link, i) => (
                    <a key={i} href={link.path} className=" text-white hover:text-primary">{link.main}</a>
                ))
            }
        </div>
    )
}

export default Links