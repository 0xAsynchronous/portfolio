import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const TiltingCard = ({ children }: PropsWithChildren) => {
  return (
    <Tilt
      className={"tilt"}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="white"
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      perspective={500}
    >
      <motion.div
        className={"heroBG"}
        initial={{
          width: "0vw",
          height: "0vh",
          top: "50%",
          left: "50%",
          borderRadius: "100%",
        }}
        animate={{
          width: "96vw",
          height: "94vh",
          top: "3%",
          left: "2%",
          borderRadius: "100px",
        }}
        transition={{
          delay: 0.6,
          duration: 1,
          type: "spring",
          bounce: 0.5,
        }}
      />
      <div className={"flex flex-col justify-between items-center"}>
        {children}
      </div>
    </Tilt>
  );
};

export default TiltingCard;
