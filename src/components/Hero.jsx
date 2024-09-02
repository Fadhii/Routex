import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section", 
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    
    gsap.set("#title, #para, #btn", { opacity: 0, y: 20 });

    
    timeline
      .to("#title", { opacity: 1, y: 0, duration: 1 })
      .to("#para", { opacity: 1, y: 0, duration: 1, stagger: 0.2 })
      .to("#btn", { opacity: 1, y: 0, duration: 1 });

  }, []); 

  return (
    <section
      id="hero-section"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://wallpapers.com/images/hd/flight-iiy89hzowuexzvqy.jpg)' }}
    >
      <div className="absolute inset-0 bg-green-950 bg-opacity-50"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 id="title" className="text-4xl lg:text-6xl font-bold mb-4">
  Journey with Confidence
  <span className="block">
    <span className="text-lime-500">Migrate</span> with Us
  </span>
</h1>

        <p id="para" className="text-lg lg:text-xl opacity-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis
        </p>
        <p id="para" className="text-lg lg:text-xl mb-6">
          quidem ipsam repudiandae voluptatem cumque
        </p>
        <a
          id="btn"
          href="#services"
          className="bg-lime-500 hover:bg-lime-700 text-white py-2 px-4 rounded-full"
        >
          Learn More <i className="fa-solid fa-arrow-right text-sm"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
