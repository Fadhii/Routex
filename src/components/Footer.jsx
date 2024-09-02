import React from "react";

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center mb-4">
           
              <img src="https://static.vecteezy.com/system/resources/thumbnails/021/286/390/small/aeroplane-airplane-icon-on-transparent-background-free-png.png" alt="Routex Logo" className="h-10 w-16" />
              <h3 className="text-2xl font-bold">RouteX</h3>
            </div>
        
            <p className="text-gray-400 font-thin text-xs px-4">
              123 Routex Street,<br />
              City, Country, 12345
            </p>
          </div>

         
          <div className="text-xs">
            <h4 className="text-lg font-semibold mb-4">Service Menu</h4>
            <ul className="text-gray-400">
              <li className="flex items-center mb-2">
                <i className="fa-solid fa-check text-lime-500 mr-2"></i>
                Mistakes To Avoid
              </li>
              <li className="flex items-center mb-2">
                <i className="fa-solid fa-check text-lime-500 mr-2"></i>
                Your Startup
              </li>
              <li className="flex items-center mb-2">
                <i className="fa-solid fa-check text-lime-500 mr-2"></i>
                Knew About Fonts
              </li>
              <li className="flex items-center mb-2">
                <i className="fa-solid fa-check text-lime-500 mr-2"></i>
                Knew About Fonts
              </li>
            </ul>
          </div>

          
          <div className="text-xs">
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="text-gray-400">
              <li className="flex items-center mb-2">
                <i className="fa-solid fa-angle-right text-lime-500 mr-2"></i>
                Latest News
              </li>
              <li className="flex items-center mb-2">
                <i className="fa-solid fa-angle-right text-lime-500 mr-2"></i>
                Careers
              </li>
              <li className="flex items-center mb-2">
                <i className="fa-solid fa-angle-right text-lime-500 mr-2"></i>
                General Inquiries
              </li>
              <li className="flex items-center mb-2">
                <i className="fa-solid fa-angle-right text-lime-500 mr-2"></i>
                Case Studies
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4">Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              <img src="https://media.gettyimages.com/id/1254092294/photo/travelling-together.jpg?s=612x612&w=0&k=20&c=aGht2RAqjsexqTA-B1EjJhoadqWznIwLvIeYPAPfEhk=" alt="Gallery Image 1" className="w-full h-auto rounded-lg" />
              <img src="https://media.gettyimages.com/id/1473319745/photo/solo-traveler.jpg?s=612x612&w=0&k=20&c=eLjnOTAMREeYuiPVA1Tje6I3VqprMS42iKtCTVjfX8I=" alt="Gallery Image 2" className="w-full h-auto rounded-lg" />
              <img src="https://media.istockphoto.com/id/1161906433/photo/woman-using-smart-phone-on-vacations-in-athens.jpg?s=612x612&w=0&k=20&c=H5tlfcFgEpGd23kFYiHOckYO4NQMk5Dotw2-bgrbc9Y=" alt="Gallery Image 2" className="w-full h-auto rounded-lg" />
              <img src="https://media.gettyimages.com/id/1292251389/photo/mature-couple-hike-above-lake-lugano-in-the-morning.jpg?s=612x612&w=0&k=20&c=lEA9E9-O-pV05ZzvrR6UJKJdU-fnRNeyabTqsNzg0tA=" alt="Gallery Image 2" className="w-full h-auto rounded-lg" />
              <img src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=612x612&w=0&k=20&c=lctMEC3mxw_T1N1rk1eAx5c9NRddxUj8ncaMxtBpIDU=" alt="Gallery Image 2" className="w-full h-auto rounded-lg" />
              <img src="https://media.gettyimages.com/id/1357530144/photo/young-family-having-fun-traveling-together.jpg?s=612x612&w=0&k=20&c=9n0yR3q7w4ReuTiNA1k8D4BOl7__ZJ9K4ixT4kNhYZ8=" alt="Gallery Image 2" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 font-thin border-t border-lime-800 pt-4 text-gray-400 text-xs">
          <p>&copy; 2024 Routex. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#terms" className="hover:text-white">Terms and Conditions</a>
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#contact" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
