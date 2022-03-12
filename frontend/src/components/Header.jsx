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
    <div className="flex-1 flex-col w-full h-full items-center justify-center py-24 2xl:py-32  px-8 bg-cover bg-repeat" style={{ backgroundImage: `url(${images.bgIMG})` }}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <div className="w-full flex flex-col items-end">
          <div className="flex items-center py-8 px-6 bg-white rounded-md shadow-md">
            <span className="text-3xl">👋</span>
            <div className="ml-5">
              <p className="text-sm font-light text-gray-500">Hi, I am</p>
              <h1 className="text-5xl font-light text-gray-600">Anindya</h1>
            </div>
          </div>
          <div className="flex flex-col items-end py-4 px-6 bg-white rounded-md shadow-md mt-8 uppercase text-sm">
            <p className="py-2">
              Software Developer
            </p>
            <p className="py-2">
              Aspiring Blockchain Developer
            </p>
          </div>
        </div>
      </motion.div>

      
      {/* <motion.div
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
            <div key={`circle-${index}`}>
              <img src={circle} alt="tech" />
            </div>
          )
        }
      </motion.div> */}
    </div>
  );
};

export default Header;
