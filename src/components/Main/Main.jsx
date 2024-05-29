import React, { useEffect } from "react";
import CardMain from "../CardMain/CardMain";
import SocialBar from "../SocialBar/SocialBar";
import ContactForm from "../ContactForm/ContactForm";
import "./Main.css";

const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-scroll");
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      sections.forEach((section, index) => {
        if (
          scrollPosition >= index * viewportHeight &&
          scrollPosition < (index + 1) * viewportHeight
        ) {
          window.scrollTo({
            top: index * viewportHeight,
            behavior: "smooth",
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-scroll">
      <div className="section-scroll">
        <CardMain />
      </div>
      <div className="section-scroll margin-bottom">
        <ContactForm />
      </div>
      <div className="social-bar">
        <SocialBar />
      </div>
    </div>
  );
};

export default Main;
