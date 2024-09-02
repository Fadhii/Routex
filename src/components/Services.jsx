import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#services-section", 
        start: "top center", 
        end: "bottom top", 
        toggleActions: "play none none reverse",
      },
    });


    gsap.set("#title, #cards > div", { opacity: 0, y: 20 });


    timeline
      .to("#title", { opacity: 1, y: 0, duration: 1 })
      .to("#cards > div", { opacity: 1, y: 0, duration: 1, stagger: 0.2 });

  }, []);

  return (
    <section id="services-section" className="relative bg-yellow-50 py-16 px-4">
      
      <div
        className="hidden lg:flex absolute right-0 top-0 h-full w-1/3 bg-cover bg-no-repeat rounded-3xl opacity-60"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/184940708/photo/travel-background.jpg?s=612x612&w=0&k=20&c=6esEwq6G5Sl50ZfNYeAYvn1D4ZEObmZwesTBDkEv4Sg=)",
        }}
      ></div>
      
      <div className="container mx-auto relative z-10">
        <div id="title" className="flex justify-between">
          <div>
            <p className="font-bold mb-4 text-green-900 text-xs">
              OUR SERVICES{" "}
              <i className="fa-solid fa-paper-plane" style={{ color: "#0d7d29" }}></i>
            </p>
            <h2 className="text-3xl font-bold mb-8 text-green-900">
              Adventure Unleashed <br />
              Discover Your Next
            </h2>
          </div>
          <div className="flex gap-3 self-end mb-4">
            <div className="mb-3">
              <a
                id="readmore"
                href="#services"
                className="bg-transparent border-black border-1 hover:bg-lime-700 text-black text-xs py-1.5 px-2 rounded-full"
              >
                <i className="fa-solid fa-arrow-left text-xs"></i>
              </a>
            </div>
            <div className="mb-3">
              <a
                id="readmore"
                href="#services"
                className="bg-transparent border-black border-1 hover:bg-lime-700 text-black text-xs py-1.5 px-2 rounded-full"
              >
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
        <div id="cards" className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div className="bg-white p-6 rounded-lg shadow-md text-center items-center">
            <div className="bg-lime-600 rounded-full w-fit m-auto mb-4">
              <i className="fa-solid fa-earth-americas text-5xl p-3" style={{ color: "#ffffff" }}></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-green-900">
              Food and Wine Tours
            </h3>
            <p className="text-gray-700 font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              hic quae, debitis impedit error assumenda minima.
            </p>
          </div>
        
          <div className="bg-white p-6 rounded-lg shadow-md text-center items-center">
            <div className="bg-lime-600 rounded-full w-fit m-auto mb-4">
              <i className="fa-solid fa-passport text-5xl p-3" style={{ color: "#ffffff" }}></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-green-900">
              Travel Opportunities
            </h3>
            <p className="text-gray-700 font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              hic quae, debitis impedit error assumenda minima.
            </p>
          </div>
         
          <div className="bg-white p-6 rounded-lg shadow-md text-center items-center">
            <div className="bg-lime-600 rounded-full w-fit m-auto mb-4">
              <i className="fa-solid fa-ticket text-5xl p-3" style={{ color: "#ffffff" }}></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-green-900">
              Solo Travel Planning
            </h3>
            <p className="text-gray-700 font-thin">
              We provide top-notch web development services using the latest
              technologies to build scalable and robust web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
