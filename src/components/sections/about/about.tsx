import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useOnScreen from "@hooks/useOnScreen";
import gsap from "gsap";
import cn from "classnames";

const About = () => {
  const ref = useRef(null);

  const reveal = useOnScreen(ref, 0.6);

  useLayoutEffect(() => {
    if (reveal) {
      gsap.to("#about-title", {
        duration: 1,
        y: -80,
        opacity: 1,
        ease: "power2.in",
      });
    }
  }, [reveal]);

  return (
    <section
      className={"about h-screen w-full flex flex-col justify-center"}
      ref={ref}
    >
      <h1
        id={"about-title"}
        className={cn("mx-auto text-9xl opacity-0", { "is-reveal": reveal })}
      >
        About
      </h1>
    </section>
  );
};

export default About;
