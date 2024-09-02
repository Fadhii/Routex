import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-section", 
        start: "top center",
        end: "bottom top", 
        toggleActions: "play none none reverse", 
      },
    });

    gsap.set("#about, #more, #readmore", { opacity: 0, y: 10 });

    timeline
      .to("#about", { opacity: 1, y: 0, duration: 1 })
      .to("#more", { opacity: 1, y: 0, duration: 1 }, "-=0.3")
      .to("#readmore", { opacity: 1, y: 0, duration: 1 });

  }, []); 

  return (
    <section id="about-section" className="bg-white py-16 px-4 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
       
        <div id="about" className="lg:w-1/2 w-full lg:pr-8 mb-8 lg:mb-0">
          <img src="/10+.png" alt="About Us" className="w-full rounded-lg" />
        </div>

        <div className="lg:w-1/2 w-full lg:pl-8">
          <p className="font-bold mb-4 text-green-900 text-xs">
            ABOUT US{" "}
            <i className="fa-solid fa-paper-plane" style={{ color: "#0d7d29" }}></i>
          </p>
          <h1 id="about" className="text-green-900 mb-6 font-bold text-4xl">
            Unknown Wanderlust Your Journey into
          </h1>
          <p className="text-gray-700 text-xs mb-3 font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            suscipit accusamus est nostrum repel.
          </p>
          <div id="more" className="flex gap-3">
            <div>
              <div className="flex gap-2 text-sm mr-7">
                <i className="fa-solid fa-square-check text-sm" style={{ color: "#03d307" }}></i>
                <h6 className="text-xs font-bold text-green-900">Safety Guides</h6>
                <br />
              </div>
              <div className="text-xs font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div>
              <div className="flex gap-2 text-sm">
                <i className="fa-solid fa-square-check text-sm" style={{ color: "#03d307" }}></i>
                <h6 className="text-xs font-bold text-green-900">Passport Assistance</h6>
                <br />
              </div>
              <div className="text-xs font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="mt-4">
            <a id="readmore" href="#services" className="bg-lime-500 hover:bg-lime-700 text-white text-xs py-2 px-3 rounded-full">
              Read More <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
