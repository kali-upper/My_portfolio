import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='FOTE Portfolio Logo' className='w-9 h-9 object-contain' />
            <p className='text-[18px] font-bold cursor-pointer flex'>
              <span className='green-text-gradient'>FOTE</span> &nbsp;
              <span className='sm:block hidden text-white'> | Freelancer</span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`relative group ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a 
                  href={`#${nav.id}`}
                  className="relative inline-block py-2 px-1 transition-all duration-300 ease-in-out group-hover:text-white"
                >
                  {nav.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2AD083] to-[#00B4D8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <button
              className='bg-transparent border-0 p-0'
              onClick={() => setToggle(!toggle)}
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
            >
              <img
                src={toggle ? close : menu}
                alt={toggle ? "Close menu" : "Open menu"}
                className='w-[28px] h-[28px] object-contain'
              />
            </button>

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              role="menu"
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`relative group ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                    role="menuitem"
                  >
                    <a 
                      href={`#${nav.id}`}
                      className="relative inline-block py-1 transition-all duration-300 ease-in-out group-hover:text-white"
                    >
                      {nav.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2AD083] to-[#00B4D8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
