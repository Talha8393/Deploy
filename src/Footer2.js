import usa from "./images/usa.png";
import uk from "./images/uk.png";


export default function Footer2(){

    return(
        <div className="footer">
            <div className="footin">
                <div className="footer-left">
                    <p>Talha Mughal Crafting UI/UX is sculpting the bridge between users and technology, fostering a connection that is intuitive, delightful, and unforgettable.</p>
                   <div className="footer-list">                    
                    <ul>
                        <li><a  href=""><i class="icons  dribble fa-brands fa-dribbble"></i></a></li>
                        <li><a href=""><i class="icons behance fa-brands fa-behance"></i></a></li>
                        <li><a href=""><i class="icons twitterx fa-brands fa-x-twitter"></i></a></li>
                        <li><a href=""><i class="icons facebook fa-brands fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="icons linkedin fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href=""><i class="icons instagram fa-brands fa-instagram"></i></a></li>
                    </ul>
                    </div>
                </div>
              <div className="foot-right">
                <div className="foot-rightup">
                   <div className="flag-icon">
                    <img style={{height:"20px", width:"auto",}} src={usa} alt="usa-flag"/><span>USA</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, reprehenderit.</p>
                </div>
                <div className="foot-rightdown">
                <div className="flag-icon">
                    <img style={{height:"30px", width:"auto",}} src={uk} alt="uk-flag"/><span>UK</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, consequatur.</p>
                </div>
              </div> 
            </div>

            <div className="footer-links">
                <ul>
                    <li><a href="">Design Blog</a></li>
                    <li><a href="">Case Study</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>

                <div className="rights">
                    <span>© 2024 Design Studio UI UX | All Rights Reserved</span>
                </div>
                </div> 

                <hr />
                <div className="design">
                    <p>design</p>
                    </div> 
        </div>
    );
};