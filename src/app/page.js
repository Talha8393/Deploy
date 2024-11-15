import styles from "./globals.css";
import satoshi from "./fonts/satoshi.css"
import Navbar from './Nav';
import Slider from './Slider';
import HomePage from "./HomePage";
import Benefits from "./Benefits"
import Work from './Work';
import Scope from './Scope';
import Pricing from './Pricing';
import Faq from './Faq';
import Footer2 from './Footer2';
import Head from "next/head";

export default function Home() {
  return (
   <>
    <div className="App" >
    <Navbar />
    <HomePage/>
    <Slider/>
    <Benefits/>
    <Work/>
    <Scope/>
    <Pricing/>
    <Faq/>
    <Footer2/>
  
  </div>
  </>
  );
}
