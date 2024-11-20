"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import i1 from "./images/i1.jpg"
import i2 from "./images/i2.jpg"
import i3 from "./images/i3.jpg"
import i4 from "./images/i4.jpg"
import i5 from "./images/i5.jpg"
import i6 from "./images/i6.jpg"
import i7 from "./images/i7.jpg"
import imgLogo from "./images/logo1.jpg"

export default function Slider() {

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollValue = window.scrollY;
        sliderRef.current.style.setProperty("--scroll", scrollValue);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const descriptions = [
    "Website design for B-protocol",
    "Website design for Digital Assets",
    "Website design for Block Sauce",
    "Website design for Shi Beach",
    "Website design for 021",
    "Website design for Door Ways",
    "Website design for Sergy",
  ];
  return (
    <div className="sl-container">
      <div className="slider-container" ref={sliderRef}>
      {[i1, i2, i3, i4, i5, i6, i7,i3, i4, i5,i2,i6].map((image, index) => (
          <div className="slide-img" key={index}>
            <Image src={image} alt={`design${index + 1}`} width={280} height={240} />
            <div className="overlay">
              <Image src={imgLogo} alt="logo" className="img-logo" />
              <p className="image-text">{descriptions[index]}</p>
            </div>
          </div>
        ))} 

{/* 
        <div className="slide-img">
          <Image src={i1} alt="design1" width={280} height={240} loading="lazy"/>
          <div className="overlay">
            <Image src={imgLogo} alt="logo" className="img-logo" />
            <p className="image-text">Website design for B-protocol</p>
          </div>
        </div>
        <div className="slide-img">
          <Image src={i2} alt="design2" width={280} height={240}  loading="lazy"/>
          <div className="overlay">
            <Image src={imgLogo} alt="logo" className="img-logo" />
            <p className="image-text">Website design for Digital Assets</p>
          </div>
        </div><div className="slide-img">
          <Image src={i3} alt="design3" width={280} height={240} loading="lazy"/>
          <div className="overlay">
            <Image src={imgLogo} alt="logo" className="img-logo" />
            <p className="image-text">Website design for Block Sauce</p>
          </div>
        </div><div className="slide-img">
          <Image src={i4} alt="design4" width={280} height={240} loading="lazy"/>
          <div className="overlay">
            <Image src={imgLogo} alt="logo" className="img-logo" />
            <p className="image-text">Website design for Shi Beach</p>
          </div>
        </div>
        <div className="slide-img">
          <Image src={i5} alt="design5" width={280} height={240} loading="lazy"/>
          <div className="overlay">
            <Image src={imgLogo} alt="logo" className="img-logo" />
            <p className="image-text">Website design for 021</p>
          </div>
        </div><div className="slide-img">
          <Image src={i6} alt="design6" width={280} height={240} loading="lazy"/>
          <div className="overlay">
            <Image src={imgLogo} alt="logo" className="img-logo" />
            <p className="image-text">Website design for Door Ways</p>
          </div>
        </div><div className="slide-img">
          <Image src={i7} alt="design7" width={280} height={240} loading="lazy"/>
          <div className="overlay">
            <Image src={imgLogo} alt="logo" className="img-logo" />
            <p className="image-text">Website design for Sergy</p>
          </div>
        </div>
 
        
        <div className="slide-img">
          <Image src={i1} alt="design1" width={280} height={240} loading="lazy"/>
          <div className="overlay">
    <Image src={imgLogo} alt="logo" className="img-logo" />
    <p className="image-text">Website design for B-protocol</p>
  </div>
        </div>
        <div className="slide-img">
          <Image src={i2} alt="design2" width={280} height={240} loading="lazy"/>
          <div className="overlay">
    <Image src={imgLogo} alt="logo" className="img-logo" />
    <p className="image-text">Website design for Digital Assets</p>
  </div>
        </div><div className="slide-img">
          <Image src={i3} alt="design3" width={280} height={240} loading="lazy"/>
          <div className="overlay">
    <Image src={imgLogo} alt="logo" className="img-logo" />
    <p className="image-text">Website design for Block Sauce</p>
  </div>
        </div><div className="slide-img">
          <Image src={i4} alt="design4" width={280} height={240} loading="lazy"/>
          <div className="overlay">
    <Image src={imgLogo} alt="logo" className="img-logo" />
    <p className="image-text">Website design for Shi Beach</p>
  </div>
        </div><div className="slide-img">
          <Image src={i5} alt="design5" width={280} height={240} loading="lazy"/>
          <div className="overlay">
    <Image src={imgLogo} alt="logo" className="img-logo" />
    <p className="image-text">Website design for 021</p>
  </div>
        </div><div className="slide-img">
          <Image src={i6} alt="design6" width={280} height={240} loading="lazy"/>
          <div className="overlay">
    <Image src={imgLogo} alt="logo" className="img-logo" />
    <p className="image-text">Website design for Door Ways</p>
  </div>
        </div><div className="slide-img">
          <Image src={i7} alt="design7" width={280} height={240} loading="lazy"/>
          <div className="overlay">
    <Image src={imgLogo} alt="logo" className="img-logo" />
    <p className="image-text">Website design for Sergy</p>
  </div>
        </div> */}

      </div>
    </div>
  );
}
