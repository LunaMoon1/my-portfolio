import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="py-4 flex items-center justify-center">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <div className="">
          <div className="flex">
            <span className="text-3xl">👋</span>
            <div className="ml-5">
              <p className="text-sm font-light text-gray-500">Hi, I am</p>
              <h1 className="text-5xl font-light text-gray-700">Anindya</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
