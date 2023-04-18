import React from "react";
import { motion } from "framer-motion";

const ScrollDownIndicator = () => {
  return (
    <motion.div
      className={"scrolldownContainer"}
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: -100, opacity: 0.8 }}
      transition={{
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          type: "tween",
          ease: "linear",
          duration: 1,
        },
        duration: 1,
        delay: 2,
      }}
    >
      <p className={"scrolldownText"}>Scroll Down</p>
      <motion.svg
        className={"scrolldownArrow"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19 12L12 19L5 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
};

export default ScrollDownIndicator;
