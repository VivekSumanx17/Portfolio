import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Vivek Suman • Built with React</p>

        <div className="social-icons">

          <a href="https://github.com/VivekSumanx17"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/vivek-suman/"><FaLinkedin/></a>
          <a href="https://www.instagram.com/viveksuman_x17/"><FaInstagram/></a>

        </div>

      </div>
 
    </footer>

  )

}

export default Footer;