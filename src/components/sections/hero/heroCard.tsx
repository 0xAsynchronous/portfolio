import React, { PropsWithChildren, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const HeroCard = ({ children }: PropsWithChildren) => {

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {});
    const heroCardExit = () => {
      ctx.add(() => {
        gsap.to(`.heroBG`, {
          scrollTrigger: {
            trigger: ".heroBG",
            start: "bottom 97%",
            end: "bottom 0%",
            immediateRender: false,
            scrub: true,
          },
          width: "5%",
          borderRadius: 3,
          ease: "power2.out",
        });
      });
    };
    setTimeout(() => {
      heroCardExit();
    }, 800);

    return () => ctx.revert();
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default HeroCard;
