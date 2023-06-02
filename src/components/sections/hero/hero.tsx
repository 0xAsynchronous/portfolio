import { motion, MotionConfig } from "framer-motion";
import "./hero.scss";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import useSound from "use-sound";
import snap2 from "@sounds/snap2.mp3";
import key2 from "@sounds/key2.mp3";
import HeroCard from "@sections/hero/heroCard";
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
  const comp = useRef(null);

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
      className={"heroSection relative z-10"}
      ref={comp}
    >
      <MotionConfig
        transition={{ duration: 1, ease: "easeIn", type: "spring" }}
      >
        <HeroCard>
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
        </HeroCard>
      </MotionConfig>
    </motion.section>
  );
};

export default Hero;
