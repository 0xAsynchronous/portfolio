import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ScrollDownIndicator = () => {
  const [scrolling, setScrolling] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});
    const scrolldownIndicatorExit = () => {
      ctx.add(() => {
        gsap.to(`.scrolldownContainer`, {
          scrollTrigger: {
            trigger: "#main",
            start: "13% center",
            end: "20% center",
            immediateRender: false,
            scrub: true,
          },
          y: -200,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onStart: () => setScrolling(true),
        });
      });
    };
    setTimeout(() => {
      scrolldownIndicatorExit();
    }, 800);

    return () => ctx.revert();
  }, []);
  return (
    <motion.div
      className={"scrolldownContainer"}
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: -100, opacity: 0.8 }}
      transition={{
        y: {
          repeat: scrolling,
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
