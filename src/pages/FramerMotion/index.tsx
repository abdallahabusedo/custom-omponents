import React from "react";
import { motion } from "framer-motion";

const FramerMotion = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen relative overflow-hidden">
      <motion.div
        className="z-10"
        animate={{ y: 1000 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 3.5,
        }}
      >
        <motion.div
          className="z-10"
          animate={{ color: "#fff", zIndex: 100 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <motion.div
            className="z-10"
            animate={{
              scale: [
                1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 10,
              ],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              type: "tween",
              stiffness: 100,
            }}
          >
            Intella
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ y: 1000 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 3.5,
        }}
      >
        <motion.div
          className="bg-orange-500 absolute w-12 h-12 rounded-full z-0"
          initial={{ x: 170, y: 40, scale: 0 }}
          animate={{ scale: 15, x: -50, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            type: "tween",
            delay: 1.5,
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default FramerMotion;
