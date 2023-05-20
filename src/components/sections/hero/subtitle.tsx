import React, { useLayoutEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import gsap from "gsap";
const Subtitle = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});
    const subtitleExit = () => {
      ctx.add(() => {
        gsap.to(`#subtitle`, {
          scrollTrigger: {
            trigger: "#main",
            start: "13% center",
            end: "20% center",
            immediateRender: false,
            scrub: true,
          },
          onStart: () => setIsAnimating(true),
          y: -200,
          opacity: 0,
          ease: "power2.out",
        });
      });
    };
    setTimeout(() => {
      subtitleExit();
    }, 800);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: -40, opacity: 1 }}
      className={`noselect justify-center flex gap-2 ${
        isAnimating ? null : "pointer-events-none"
      }`}
      id={"subtitle"}
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
