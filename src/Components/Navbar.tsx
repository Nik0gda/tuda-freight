import React from "react";
import LanguageDropdown from "./LanguageDropdown";
import { scroller } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="hidden rounded px-2 py-2.5 pt-8 sm:px-4 md:block">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo-text.png" className="mr-3 h-6 sm:h-9" />
        </a>
        <div
          className="hidden w-full md:flex md:w-auto md:gap-10"
          id="navbar-default"
        >
          <button
            className="text-md h-12 w-36 rounded-[40px] bg-aplly-button text-white"
            aria-current="page"
            onClick={() => {
              scroller.scrollTo("contact_us", {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            }}
          >
            Apply now
          </button>
          <LanguageDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
