import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ScrollDownIndicator = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});
    const scrolldownIndicatorExit = () => {
      ctx.add(() => {
        gsap.to(`.scrolldownContainer`, {
          scrollTrigger: {
            trigger: "#root",
            start: "top top",
            end: "+=800",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
          y: -200,
          opacity: 0,
          ease: "power2.in",
          display: "none",
        });
      });
    };
    setTimeout(() => {
      scrolldownIndicatorExit();
    }, 3400);

    return () => ctx.revert();
  }, []);
  return (
    <motion.div
      className={"scrolldownContainer"}
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: -100, opacity: 0.8 }}
      transition={{
        y: {
          type: "tween",
          ease: "linear",
          duration: 1,
        },
        duration: 1,
        delay: 2,
      }}
    >
      <p className={"scrolldownText text-white text-opacity-50"}>Scroll Down</p>
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
