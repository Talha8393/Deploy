import { useState } from 'react';
import logo from './images/BrightUI.svg'

import {Helmet} from "react-helmet";

const Navbar = () =>
   {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return(
      <>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home-UI/UX Design Services</title>
                <link rel="canonical" href="https://design-agency-lime.vercel.app/#top" />
                <meta name="description" content="Welcome to Design Agency. Experience high-quality, productized UI/UX design services. Our customized design packages are crafted for businesses of all sizes." />
                <meta name="keywords" content="UI/UX, Design Agency, Web Design, App Design" />
            </Helmet>
  <nav className={`nav ${isMenuOpen ? 'show' : ''}`} >
    <a href="#top">
      <img  className="logo"  src={logo} alt="logo" /> 
      </a>
    <ul className ={`ullist ${isMenuOpen ? 'show' : ''}`}>
      <li><a className="selected" href="#benefits">Benefits</a></li>
      <li><a className="selected" href="#recentWork">Recent work </a></li>
      <li><a className="selected" href="#scope">Scope</a></li>
      <li><a className="selected" href="#pricing">Pricing</a></li>
      <li><a className="selected" href="#faq">FAQ</a></li>
      
    </ul>
    <button  className={`btn-signup ${isMenuOpen ? 'show' : 'hide'}`}>Let's Talk</button>
    <button className="btn-toggle" onClick={toggleMenu}>
        ☰
      </button>
  </nav>
  </>
    )
  }
 
export default Navbar;