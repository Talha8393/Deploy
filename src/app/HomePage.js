"use client"
import Image from "next/image";
import img2 from './images/img2.png'
import star from './images/star.svg'
import btnimg from "./images/btnimg.jpg"
import b1 from "./images/b1.jpg"
import b2 from "./images/b2.jpg"
import b3 from "./images/b3.jpg"
import b4 from "./images/b4.jpg"
import b5 from "./images/b5.jpg"
import b6 from "./images/b6.jpg"
import b9 from "./images/b9.jpg"
import Head from "next/head";


const Calendly = () => {
    window.open("https://calendly.com/talha0azhar5/30-min-free-meeting-with-me", "_blank"); 
  };
const HomePage = () => (
   
    <>
   
           <div className="section2">  
        <div className="reviews " id='head'>
       
            <Image className="clients-image" src={img2} alt="reviews" />
            <div className="star-container">
                <div className='stars'>
                    <Image className='star-img' src={star} alt="rating" />
                    <Image className='star-img' src={star} alt="rating" />
                    <Image className='star-img' src={star} alt="rating" />
                    <Image className='star-img' src={star} alt="rating" />
                    <Image className='star-img' src={star} alt="rating" />
                </div>

            </div>
        </div>
        <div >
            <p className='cl-para'>trusted by partners worldwide</p>
        </div>
        <div className='text-container'>
            <h1 className='heading1' >
            Trusted On-Demand Source For Expert Design Services
            </h1>
            <p className="p1">Get Professional Web and App Design Services <span> Without the Cost </span> 
            of Hiring In-House Designers. We Create Custom Solutions That Drive<span> Business Growth</span>.</p>
        </div>
        <div className="btn-container">
            <button className="btn-book" onClick={Calendly} >
                <Image style={{ width: 32, height: 32, borderRadius: 50, marginRight: 10, }} src={btnimg} alt="jpg" />
                <span>Book a call</span>
            </button>
            <div className="pbtn-container">
            <a href="#pricing" className="see-pricing-btn">
                <span>View plans & pricing</span>
              </a>
            </div>
        </div>
       
        <div className="bimg-container ">
            <Image src={b1} alt="b1" />
            <Image src={b2} alt="b2" />
            <Image src={b3} alt="b3" />
            <Image src={b4} alt="b2" />
            <Image src={b5} alt="b3" />
            <Image src={b6} alt="b1" />
            <Image src={b9} alt="b3" />
            <Image src={b1} alt="b1" />
            <Image src={b2} alt="b2" />
            <Image src={b3} alt="b3" />
            <Image src={b4} alt="b2" />
            <Image src={b5} alt="b3" />
        </div>
    
        </div>
      
    </>
)

export default HomePage;