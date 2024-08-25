import logo from './images/logo.jpg'

export default function footer(){
    return(
        <>
 <div className="footer">

  <ul>
    <li><a href="*"></a>Sign in</li>
    <li><a href="*"></a>Book a call</li>
    <li><a href="*"></a>Contact us</li>
    <li><a href="*"></a>Leave a review</li>
  </ul>

  <ul>
    <li><a href="*"></a>Visit Store</li>
    <li><a href="*"></a>Read newsletter</li>
    <li><a href="*"></a>Buy this template</li>
    <li><a href="*"></a>Browse recent work</li>
  </ul>

  <ul>
    <li><a href="*"></a>Privacy Policy</li>
    <li><a href="*"></a>Cookie settings</li>
    <li><a href="*"></a>Terms of Service</li>
    <li><a href="*"></a>Security capabilites</li>
  </ul>
 </div>

  <div className='fend'>
    <p>© 2024 Bring to front LLC. All rights reserved.</p>
  <img  className="foot-logo"  src={logo} alt="logo" /> 
  <p>30 North Gould St • Sheridan, WY 82801 • US</p>
  </div>
  </>
    )
}