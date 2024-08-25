import { useState } from "react";
import star from './images/star.svg';
import pic1 from "./images/pic1.jpg"
import btnimg from "./images/btnimg.jpg"


export default function Faq() {
  const faqs = [
    {
      question: "Where can I request designs?",
      answer: "At DesignHopper, we provide partners with a unique, tailor-made dashboard where they can request designs directly or invite other team members. Communication is generally done entirely through the dashboard, Slack is optional.",
    },
    {
      question: "How fast designs?",
      answer: "It typically takes 1-3 business days depending on the complexity of the request.",
    },
    {
      question: "How does the pause feature work?",
      answer: "We offer a subscription-based pricing model with options for different levels of service.",
    },
    {
      question: "What if I only have a single request?",
      answer: "Yes, revisions are included in the service, and you can request them directly through the dashboard.",
    },
    {
      question: "Can I make as many requests as I want?",
      answer: "You can request a wide variety of designs, including logos, branding materials, marketing collateral, and more.",
    },
    {
      question: "Couldn't I just hire a designer full-time?",
      answer: "You can request a wide variety of designs, including logos, branding materials, marketing collateral, and more.",
    },
    {
      question: "How can you deliver such quick results?",
      answer: "You can request a wide variety of designs, including logos, branding materials, marketing collateral, and more.",
    },
    {
      question: "Why wouldn't I go to Fiver,Upwork etc.?",
      answer: "You can request a wide variety of designs, including logos, branding materials, marketing collateral, and more.",
    },
    {
      question: "If I don't like the design, what should I do?",
      answer: "You can request a wide variety of designs, including logos, branding materials, marketing collateral, and more.",
    },
    {
      question: "Can I get a refund if I don't like the service?",
      answer: "You can request a wide variety of designs, including logos, branding materials, marketing collateral, and more.",
    }
  ];

  const [openFaqs, setOpenFaqs] = useState(Array(faqs.length).fill(false));

  const toggleAnswer = (index) => {
    setOpenFaqs((prevOpenFaqs) =>
      prevOpenFaqs.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <>
      <div id="faq">
        <div className="text-container">
          <p className="R-heading1">Additional answers</p>
          <p className="faq-heading2">
            If you still have the questions, the answers might be here. You can always find out more by asking us.
          </p>
        </div>

        <div className="wrapper">
          {faqs.map((faq, index) => (
            <div className="faq" key={index}>
              <button
                className={`accordian ${openFaqs[index] ? "answer" : ""}`}
                onClick={() => toggleAnswer(index)}
              >
                <i className={`fa-solid ${openFaqs[index] ? "fa-xmark" : "fa-plus"}`}></i>
                {faq.question}
              </button>
              <div
                className={`panel ${openFaqs[index] ? "p-display" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="faq-container">
        
        <div className="faq-card">
          <div className="faq-star-container">
            <div className='faq-stars'>
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
            </div>
          </div>
          <p className="faq-p">“ They designed and developed a personal website for me, and Framer allows for easy website management.
             <span>The whole experience was great, and the process was smooth, well worth it. </span> ”</p>
          <div className="faq-p2">
            <img className="fpic1" src={pic1} alt="pic1" />
            <p className="fp1">Samraib Hamza</p>
            <p className="fp2">Engineer at Emilfy Frey Digital</p>
          </div>
        </div>

        <div className="faq-card">
          <div className="faq-star-container">
            <div className='faq-stars'>
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
            </div>
          </div>
          <p className="faq-p">“ They designed and developed a personal website for me, and Framer allows for easy website management.
             <span>The whole experience was great, and the process was smooth, well worth it. </span> ”</p>
          <div className="faq-p2">
            <img className="fpic1" src={pic1} alt="pic1" />
            <p className="fp1">Samraib Hamza</p>
            <p className="fp2">Engineer at Emilfy Frey Digital</p>
          </div>
        </div>
        <div className="faq-card">
          <div className="faq-star-container">
            <div className='faq-stars'>
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
            </div>
          </div>
          <p className="faq-p">“ They designed and developed a personal website for me, and Framer allows for easy website management.
             <span>The whole experience was great, and the process was smooth, well worth it. </span> ”</p>
          <div className="faq-p2">
            <img className="fpic1" src={pic1} alt="pic1" />
            <p className="fp1">Samraib Hamza</p>
            <p className="fp2">Engineer at Emilfy Frey Digital</p>
          </div>
        </div>
        
        <div className="faq-card">
          <div className="faq-star-container">
            <div className='faq-stars'>
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
            </div>
          </div>
          <p className="faq-p">“ They designed and developed a personal website for me, and Framer allows for easy website management.
             <span>The whole experience was great, and the process was smooth, well worth it. </span> ”</p>
          <div className="faq-p2">
            <img className="fpic1" src={pic1} alt="pic1" />
            <p className="fp1">Samraib Hamza</p>
            <p className="fp2">Engineer at Emilfy Frey Digital</p>
          </div>
        </div>
        <div className="faq-card">
          <div className="faq-star-container">
            <div className='faq-stars'>
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
            </div>
          </div>
          <p className="faq-p">“ They designed and developed a personal website for me, and Framer allows for easy website management.
             <span>The whole experience was great, and the process was smooth, well worth it. </span> ”</p>
          <div className="faq-p2">
            <img className="fpic1" src={pic1} alt="pic1" />
            <p className="fp1">Samraib Hamza</p>
            <p className="fp2">Engineer at Emilfy Frey Digital</p>
          </div>
        </div>
        <div className="faq-card">
          <div className="faq-star-container">
            <div className='faq-stars'>
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
            </div>
          </div>
          <p className="faq-p">“ They designed and developed a personal website for me, and Framer allows for easy website management.
             <span>The whole experience was great, and the process was smooth, well worth it. </span> ”</p>
          <div className="faq-p2">
            <img className="fpic1" src={pic1} alt="pic1" />
            <p className="fp1">Samraib Hamza</p>
            <p className="fp2">Engineer at Emilfy Frey Digital</p>
          </div>
        </div>
        <div className="faq-card">
          <div className="faq-star-container">
            <div className='faq-stars'>
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
              <img className='fstar-img' src={star} alt="rating" />
            </div>
          </div>
          <p className="faq-p">“ They designed and developed a personal website for me, and Framer allows for easy website management.
             <span>The whole experience was great, and the process was smooth, well worth it. </span> ”</p>
          <div className="faq-p2">
            <img className="fpic1" src={pic1} alt="pic1" />
            <p className="fp1">Samraib Hamza</p>
            <p className="fp2">Engineer at Emilfy Frey Digital</p>
          </div>
        </div>
      </div>

      <div className="faq-book">
     
          <p className="faq-heading1">You seem either very interested or have questions.</p>

          <div className="btn-container">
            <button className="btn-book">
                <img style={{ width: 32, height: 32, borderRadius: 50, marginRight: 10, }} src={btnimg} alt="jpg" />
                <span>Book a call</span>
            </button>
        </div>
        <p className="fp3"><i className="fa-solid fa-circle-dot fa-beat ficon-style" ></i> Spots available for August</p>
      </div>

    </>
  );
}
