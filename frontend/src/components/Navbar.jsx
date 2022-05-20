import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 flex w-full items-center justify-between border border-white/80 bg-white/75 py-4 px-8 backdrop-blur-sm">
      <div className="flex items-center justify-start">
        <img src={images.logo} alt="logo" className="h-5 w-24" />
      </div>
      <ul className="hidden md:flex md:flex-1 md:items-center md:justify-center">
        {["home", "about", "contact", "skills", "work", "testimonials"].map(
          (item) => (
            <li
              key={`link-${item}`}
              className="group mx-4 flex cursor-pointer flex-col items-center justify-center"
            >
              <div className="mb-[5px] h-1 w-1 rounded-full bg-transparent group-hover:bg-blue-500"></div>
              <a
                href={item}
                className="font-medium uppercase text-gray-400 transition-all duration-200 ease-in-out group-hover:text-blue-500"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      <div className="md:hidden">
        <HiMenu
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-500 fill-gray-100 p-2"
        />
        {isOpen && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            onViewportLeave={{ x: [0, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 flex h-screen w-4/5 flex-col bg-white bg-cover p-4 shadow-lg"
            style={{ backgroundImage: `url("${images.bgWhite}")` }}
          >
            <HiX
              onClick={() => setIsOpen(false)}
              className="relative mr-4 h-10 w-10 cursor-pointer self-end rounded-full bg-blue-500 fill-gray-100 p-2"
            />
            <ul className="mx-4 flex w-full flex-col items-start justify-start">
              {[
                "home",
                "about",
                "contact",
                "skills",
                "work",
                "testimonials",
              ].map((item) => (
                <li key={item} className="relative my-2">
                  <a
                    href={item}
                    className="font-medium uppercase text-gray-400 transition-all duration-200 ease-in-out hover:text-blue-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
