import React from "react";
import { motion } from "framer-motion";

import images from "../constants/images";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="flex-1 flex-col w-full h-full items-center justify-center py-24 2xl:py-32 2xl:flex 2xl:flex-row px-8 bg-cover bg-repeat" style={{ backgroundImage: `url(${images.bgIMG})` }}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <div className="w-full flex flex-col items-start font-light text-gray-500">
          <div className="flex items-center py-8 px-6 bg-white rounded-md shadow-lg">
            <span className="text-4xl">👋</span>
            <div className="ml-5">
              <p className="text-sm">Hi, I am</p>
              <h1 className="text-3xl">Anindya Dey</h1>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 px-6 bg-white rounded-md shadow-lg mt-8 uppercase text-sm">
            <p className="py-2">
              Full-stack Developer
            </p>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={images.profile} alt="profile bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        transition={{ duration: 0.75 }}
      >
        {
          [images.flutter, images.redux, images.sass].map((circle, index) => 
            <div key={`circle-${index}`} className="h-12 w-12 my-4 p-2 rounded-full bg-white shadow-lg">
              <img src={circle} alt="tech" />
            </div>
          )
        }
      </motion.div>
    </div>
  );
};

export default Header;
