import { useState } from 'react';
import logo from './images/logo.jpg'

const Navbar = () =>
   {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return(
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
    )
  }
 
export default Navbar;