"use client"
import Image from 'next/image'
import { useState } from 'react';
import logopic from './images/BrightUI.svg'


const Navbar = () =>
   {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    
    const Calendly = () => {
      window.open("https://calendly.com/talha0azhar5/30-min-free-meeting-with-me", "_blank");  
    };
   
    return(
      <>
      
  <nav className={`navbar ${isMenuOpen ? 'show' : ''}`} >
    <a href="#top">
      <Image className="logo"  src={logopic} alt="BrightUI" /> 
      </a>
    <ul className ={`ullist ${isMenuOpen ? 'show' : ''}`}>
      <li><a className="selected" href="#benefits">Benefits</a></li>
      <li><a className="selected" href="#recentWork">Work </a></li>
      <li><a className="selected" href="#scope">Scope</a></li>
      <li><a className="selected" href="#pricing">Pricing</a></li>
      <li><a className="selected" href="#faq">FAQ</a></li>
      
    </ul>
    <button  className={`btn-signup ${isMenuOpen ? 'show' : 'hide'}`}  onClick={Calendly}>Let's Talk</button>
    <button className="btn-toggle" onClick={toggleMenu}>
        ☰
      </button>
  </nav>
  </>
    )
  }
 
export default Navbar;