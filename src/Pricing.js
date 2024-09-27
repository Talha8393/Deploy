import { useState } from "react";
import stripelogo from "./images/stripe.jpg"
import btnimg from "./images/btnimg.jpg"
import { Helmet } from "react-helmet";

export default function Pricing() {
  const [buttontoggle, setButtonToggle] = useState(true);
  const togglebutton = () => {
    setButtonToggle(!buttontoggle);
  };


  return (
    <div id="pricing" className="text-container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Pricing-UI/UX Design Services</title>
                <link rel="canonical" href="https://design-agency-lime.vercel.app/#pricing" />
                <meta name="description" content="Welcome to Design Agency. Experience high-quality, productized UI/UX design services. Our customized design packages are crafted for businesses of all sizes." />
                <meta name="keywords" content="UI/UX, Design Agency, Web Design, App Design" />
            </Helmet>
      <p className="R-heading1">Simple pricing options</p>
      <p className="P-heading2">Not every project is the same, that's why we offer more flexible options. It is possible to get started without booking a call.</p>

      <div className="subs" >
        <button className={`subs-btn1 ${buttontoggle ? 'show' : ''}`} onClick={togglebutton}>Subscription</button>
        <button className={`subs-btn2 ${buttontoggle ? '' : 'show'}`} onClick={togglebutton}>One-time projet</button>
      </div>
      <>
        <div className="cards">

    { buttontoggle ? ( 
      <>
          {/* -----------Card 1------------ */}



          <div className="subscription-card">
            <div className="header">
              <h2 className="heading">Design Weekly</h2>
              <span className="type-badge">PERFECT START</span>
            </div>
            <div className="price-container">
              <span className="price">$599</span>
              <span className="per-week">/ week</span>
            </div>
            <ul className="features-list">
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Senior designer
              </li>
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Unlimited requests
              </li>
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Async communication
              </li>
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Updates every other day
              </li>
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Framer development included
              </li>
            </ul>
            <div className="pbtn-container">
              <button className="ps-btn ps-btn1">
                <img style={{ width: 32, height: 32, borderRadius: 50, marginRight: 10, }} src={btnimg} alt="jpg" />
                <span>Book a call</span></button>
            </div>
            <p className="or">-or-</p>
            <p className="p-text">Get started now</p>
          </div>

          {/* ---------------Card 2--------------- */}

          <div className="subscription-card subscription-card2">
            <div className="header">
              <h2 className="heading">Design Monthly</h2>
              <span className="type-badge">MOST POPULAR</span>
            </div>
            <div className="price-container">
              <span className="price">$1999</span>
              <span className="per-week">/ month</span>
            </div>
            <ul className="features-list">
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Senior designer
              </li>
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Unlimited requests
              </li>
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Async communication
              </li>
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Updates every other day
              </li>
              <li className="feature-item">
                <i className="fa-solid fa-circle-check p-icon"></i>
                Framer development included
              </li>
            </ul>
            <div className="pbtn-container">
              <button className="ps-btn ps-btn2">
                <img style={{ width: 32, height: 32, borderRadius: 50, marginRight: 10, }} src={btnimg} alt="jpg" />
                <span>Book a call</span></button>
            </div>
            <p className="or">-or-</p>
            <p className="p-text">Get started now</p>
          </div>
          
          </>
    ):(
      <>
          {/* -----------------Card 3----------------- */}
          <div className="subscription-card">
            <div className="header">
              <h2 className="heading">Design Project</h2>
              <span className="type-badge">MOST FLEXIBLE</span>
            </div>
            <div className="price-container">
              <span className="price">One-Time</span>
            </div>
            <ul className="features-list pfeatures-list ">
              <input className="p-inputs" type="text" name="name" id="name"  placeholder="Name"/>
              <input className="p-inputs" type="email" name="email" id="email"  placeholder="Email address"/>
              <input className="p-inputs" type="text" name="name" id="name"  placeholder="Website or social"/>
              <textarea className="p-inputs" rows={4} name="textarea" id="textarea" placeholder="What do you need help with?"></textarea>
            </ul>
            <div className="pbtn-container">
              <button className="ps-btn ps-btn1">
                <span>Request a quote</span></button>
            </div>
            <p className="or">-or-</p>
            <p className="p-text">Book a call</p>
          </div>
          </>
    )}    
     
        </div>
        <div className="card-bottom"> 
        <p className="card-text">Transaction fees included. Payments secured by</p>
        <img className="card-text-logo" src={stripelogo} alt="Stripe-logo" />
        </div>
      </>
    </div>
  )
}