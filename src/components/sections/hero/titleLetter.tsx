import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import gsap from "gsap";
import { random } from "gsap/gsap-core";

interface TitleLetterProps {
  letter: string;
}

const TitleLetter = ({ letter }: TitleLetterProps) => {
  const translateLetter = letter === "y" ? -40 : -20;
  const [yPos, setYPos] = useState(0);
  const [xPos, setXPos] = useState(0);
  const [rotation, setRotation] = useState(0);

  const position = {
    a: { x: -200, y: 0 },
    s: { x: 0, y: -200 },
    y: { x: 0, y: 200 },
    n: { x: 0, y: -200 },
    c: { x: 200, y: 0 },
  };
  const variants = () => {
    return {
      hidden: position[letter as keyof typeof position],
      visible: {
        x: 0,
        y: 0,
      },
    };
  };

  const animateTap = () => {
    // animate letter to its position
    setXPos(position[letter as keyof typeof position].x);
    setYPos(position[letter as keyof typeof position].y);
    setRotation(Math.random() > 0.5 ? 90 : -90);

    // return it to its original position
    setTimeout(() => {
      setXPos(0);
      setYPos(0);
      setRotation(0);
    }, 1000);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});
    const letterExit = () => {
      ctx.add(() => {
        gsap.to(`#letter${letter}`, {
          scrollTrigger: {
            trigger: "#main",
            start: "13% center",
            end: "20% center",
            immediateRender: false,
            scrub: true,
          },
          x: position[letter as keyof typeof position].x,
          y: position[letter as keyof typeof position].y,
          rotation: random([90, -90]),
          opacity: 0,
          ease: "power2.out",
        });
      });
    };
    setTimeout(() => {
      letterExit();
    }, 800);

    return () => ctx.revert();
  }, []);

  return (
    <motion.h1
      whileHover={{ translateY: translateLetter }}
      variants={variants()}
      animate={{
        x: xPos,
        y: yPos,
        rotate: rotation,
        transition: { type: "spring", stiffness: 250, damping: 20 },
      }}
      onTap={() => animateTap()}
      transition={{ duration: 1, ease: "easeIn", type: "spring" }}
      className={"noselect"}
      id={`letter${letter}`}
    >
      {letter}
    </motion.h1>
  );
};

export default TitleLetter;
