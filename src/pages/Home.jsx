import React, { useState, useEffect } from "react";
import ContactForm from "../Components/ContactForm";
import BirthdayImg from "../images/eventImg/brithdays/birthday2.jpg";
import ConsertImg from "../images/eventImg/conserts/consert5.jpg";
import WeddingsImg from "../images/eventImg/weddings/wedding1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  const images = [BirthdayImg, ConsertImg, WeddingsImg];

  const shouldShowOneImage = window.innerWidth <= 400 || 700;

  return (
    <>
      <div className="home">
        <div className="img-container">
          {shouldShowOneImage ? (
            <img src={images[currentIndex]} alt="Event" />
          ) : (
            <>
              <img src={images[currentIndex]} alt="Birthday" />
              <img src={images[(currentIndex + 1) % 3]} alt="Concert" />
              <img src={images[(currentIndex + 2) % 3]} alt="Wedding" />
            </>
          )}
        </div>
        <h1>Experienced Photographer for Every Lifestyle</h1>
        <ContactForm />
      </div>
    </>
  );
}
