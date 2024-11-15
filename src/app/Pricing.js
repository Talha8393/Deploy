"use client"
import Image from "next/image";
import { useState } from "react";
import btnimg from "./images/btnimg.jpg"

export default function Pricing() {
  const [buttontoggle, setButtonToggle] = useState(true);
  const togglebutton = () => {
    setButtonToggle(!buttontoggle);
  };
  const Calendly = () => {
    window.open("https://calendly.com/talha0azhar5/30-min-free-meeting-with-me", "_blank"); 
  };

  return (
    <div id="pricing" className="text-container">
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
              <button className="ps-btn ps-btn1 btn-pricec1" onClick={Calendly}>
                <Image style={{ width: 32, height: 32, borderRadius: 50, marginRight: 10, }} src={btnimg} alt="jpg" />
                <span>Book a call</span></button>
            </div>
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
              <button className="ps-btn ps-btn2" onClick={Calendly}> 
                <Image style={{ width: 32, height: 32, borderRadius: 50, marginRight: 10, }} src={btnimg} alt="jpg" />
                <span>Book a call</span></button>
            </div>
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
            <p className="p-text" onClick={Calendly}>Book a call</p>
          </div>
          </>
    )}    
     
        </div>
        <div className="card-bottom"> 
                  </div>
      </>
    </div>
  )
}