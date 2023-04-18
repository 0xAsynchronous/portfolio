import { motion, MotionConfig } from "framer-motion";
import "./hero.scss";
import React, { useEffect } from "react";
import useSound from "use-sound";
import snap2 from "@sounds/snap2.mp3";
import key2 from "@sounds/key2.mp3";
import TiltingCard from "@sections/hero/tiltingCard";
import ScrollDownIndicator from "@sections/hero/scrolldownIndicator";
import TitleLetter from "@sections/hero/titleLetter";
import Subtitle from "@sections/hero/subtitle";
import gsap from "gsap";

const title = {
  hidden: {
    opacity: 0,
    drag: false,
  },
  visible: {
    opacity: 1,
    drag: "y",
  },
};

const Hero = () => {
  const [playSnap2] = useSound(snap2, { volume: 0.2 });
  const [playKey2] = useSound(key2, { volume: 0.2 });

  useEffect(() => {
    // gsap.to(".titleContainer", {
    //   scrollTrigger: {
    //     trigger: ".testies",
    //     start: "top 80%",
    //   },
    //   opacity: 0,
    //   y: 600,
    //   ease: "power2.inOut",
    //   duration: 2,
    // });
  }, []);

  //  plays key on load
  useEffect(() => {
    playKey2();
  }, [playKey2]);

  // plays snap on load after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      playSnap2();
    }, 400);
    return () => clearTimeout(timer);
  }, [playSnap2]);

  return (
    <motion.section
      className={"heroSection"}
      style={{ background: "white" }}
      data-scroll-section
    >
      <MotionConfig
        transition={{ duration: 1, ease: "easeIn", type: "spring" }}
      >
        <TiltingCard>
          <div className={"centerContainer"}>
            <div className={"flex flex-col justify-between py-8"}>
              <motion.div
                className={"titleContainer"}
                initial={"hidden"}
                animate={"visible"}
                variants={title}
              >
                <TitleLetter letter={"a"} />
                <TitleLetter letter={"s"} />
                <TitleLetter letter={"y"} />
                <TitleLetter letter={"n"} />
                <TitleLetter letter={"c"} />
              </motion.div>
            </div>
            <Subtitle />
          </div>
          <ScrollDownIndicator />
        </TiltingCard>
      </MotionConfig>
    </motion.section>
  );
};

export default Hero;