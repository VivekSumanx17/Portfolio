import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FaBars, FaTimes } from "react-icons/fa";
function Header() {

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={scrolled ? "header scroll" : "header"}>
            <div className="logo">
                <h1><span>V</span>ivek</h1>
            </div>

            <ul className={menuOpen ? "links active" : "links"}>
                <li>
                    <a href="#hero" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>
                </li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#certificate">Certification</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <ul className="icons">
                <li><a href="https://github.com/VivekSumanx17"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/in/vivek-suman/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://www.instagram.com/viveksuman_x17/"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
            <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </header>
    )
}

export default Header