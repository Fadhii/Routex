import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-1">
      <nav className="flex items-center justify-between flex-wrap ">
        <div className="text-green-900 text-xl font-bold flex">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/021/286/390/small/aeroplane-airplane-icon-on-transparent-background-free-png.png"
            alt="Logo"
            style={{ maxHeight: "25px" }}
          />
          <a href="/">RouteX</a>
        </div>
        <button
          className="text-black block lg:hidden focus:outline-none"
          onClick={toggleNavbar}
        >
          ☰
        </button>
        <ul
          className={`lg:flex text-xxs font-bold  lg:items-center lg:space-x-6 ${
            isOpen ? "block" : "hidden"
          } w-full lg:w-auto mt-1 lg:mt-0`}
        >
          <li>
            <a
              href="/"
              className="block text-green-900 py-2 lg:py-0 hover:text-green-400"
            >
              HOME<i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-green-900 py-2 lg:py-0 hover:text-gray-400"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block text-green-900 py-2 lg:py-0 hover:text-gray-400"
            >
              STORY<i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block text-green-900 py-2 lg:py-0 hover:text-gray-400"
            >
              VISA<i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block text-green-900 py-2 lg:py-0 hover:text-gray-400"
            >
              BLOG<i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block text-green-900 py-2 lg:py-0 hover:text-gray-400"
            >
              PAGE<i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block text-green-900 py-2 lg:py-0 hover:text-gray-400"
            >
              CONTACT
            </a>
          </li>
          <li>
    <div className="lg:hidden self-center flex items-center space-x-2 mr-4 rounded-md">
        <i className="fa-regular fa-comments text-green-950 text-2xl"></i>
        <div>
            <p className="text-xs font-thin text-black">Need help?</p>
            <p className="text-sm font-semibold text-green-950">(307) 555-0133</p>
        </div>
    </div>
</li>

        </ul>
       
        <div className="hidden lg:flex items-center space-x-2 mr-4 rounded-md">
    <i className="fa-regular fa-comments text-green-950 text-2xl"></i>
    <div>
        <p className="text-xs font-thin text-black">Need help?</p>
        <p className="text-sm font-semibold text-green-950">(307) 555-0133</p>
    </div>
</div>

      </nav>
    </header>
  );
}

export default Header;
