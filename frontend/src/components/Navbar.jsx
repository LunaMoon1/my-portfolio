import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed flex w-full items-center justify-between border border-white/80 bg-white/75 py-4 px-8 backdrop-blur-sm">
      <div className="flex items-center justify-start">
        <img src={images.logo} alt="logo" className="h-5 w-24" />
      </div>
      <ul className="flex flex-1 items-center justify-center">
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

      <div>
        <HiMenu
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 p-2 fill-gray-100 cursor-pointer"
        />
        {isOpen && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed right-0 inset-y-0 w-4/5 h-screen bg-white flex flex-col justify-end items-end p-4 shadow-lg"
          >
            <img src={images.bgWhite} alt="Mobile Menu" className="object-cover bg-repeat absolute"/>
            <HiX onClick={() => setIsOpen(false)} className="relative cursor-pointer" />
            {["home", "about", "contact", "skills", "work", "testimonials"].map(
              (item) => (
                <span key={item} className="relative">
                  <a href={item}>{item}</a>
                </span>
              )
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
