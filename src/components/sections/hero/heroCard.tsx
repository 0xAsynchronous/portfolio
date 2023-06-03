import React, { PropsWithChildren, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const HeroCard = ({ children }: PropsWithChildren) => {
  const ctx = gsap.context(() => {});
  const herobgRef = useRef(null);

  const hideHeroSection = () => {
    const heroContainer = document.querySelector(".heroSection");
    heroContainer?.classList.add("opacity-0");
  };

  useLayoutEffect(() => {
    const heroSectionExit = () => {
      ctx.add(() => {
        gsap.to(".heroSection", {
          scrollTrigger: {
            trigger: "#root",
            start: "1px top",
            end: "+=800",
            toggleActions: "play none none reverse",
            scrub: true,
          },
          opacity: 0,
          ease: "power2.in",
        });
      });
    }

    const heroCardExit = () => {
      ctx.add(() => {
        gsap.to(`.heroBG`, {
          scrollTrigger: {
            trigger: "#root",
            start: "1px top",
            end: "+=800",
            toggleActions: "play none none reverse",
            pin: ".heroSection",
            pinSpacing: false,
          },
          opacity: 0,
          borderRadius: 500,
          duration: 0.6,
          ease: "power2.in",
        });
      });
    };
    // delay 1 second
    setTimeout(() => {
      heroCardExit();
      heroSectionExit();
    }, 800);
    return () => ctx.revert();
  }, []);

  return (
    <div className={"flex justify-center items-center"}>
      <motion.div
        ref={herobgRef}
        className={"heroBG"}
        initial={{
          width: "0vw",
          height: "0vh",
          top: "50vh",
          left: "50vw",
          borderRadius: "100%",
        }}
        animate={{
          width: "96vw",
          height: "94vh",
          top: "0px",
          left: "0px",
          borderRadius: "100px",
          transform: "translate(2%, 3%)",
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
