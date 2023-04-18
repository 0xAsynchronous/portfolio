import React from "react";
import { motion, MotionConfig } from "framer-motion";
const Subtitle = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: -40, opacity: 1 }}
      className={"noselect justify-center flex gap-2"}
      transition={{
        delay: 0.6,
        duration: 0.6,
      }}
    >
      <MotionConfig transition={{ duration: 0.3 }}>
        <motion.h6
          className={"cursor-pointer"}
          whileHover={{ color: "#f26d7a" }}
        >
          Developer
        </motion.h6>
        <h6>&</h6>
        <motion.h6
          className={"cursor-pointer"}
          whileHover={{ color: "#f5c48c" }}
        >
          Designer
        </motion.h6>
      </MotionConfig>
    </motion.div>
  );
};

export default Subtitle;
