import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import gsap from "gsap";
import { MainContext } from "../../../contexts/MainContext";
const Subtitle = () => {
  const mainRef = useContext(MainContext);
  const subtitleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});

    const subtitleExit = () => {
      ctx.add(() => {
        gsap.to("#subtitle", {
          scrollTrigger: {
            trigger: "#root",
            start: "top top",
            end: "+=800",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
          y: -200,
          opacity: 0,
          ease: "power2.inOut",
          display: "none",
        });
      });
    };

    setTimeout(() => {
      subtitleExit();
    }, 1800);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={subtitleRef}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: -40, opacity: 1 }}
      className={`noselect justify-center flex gap-2`}
      id={"subtitle"}
      transition={{
        delay: 1,
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
