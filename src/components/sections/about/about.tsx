import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";
import { MainContext } from "../../../contexts/MainContext";
import "./about.scss";
// @ts-ignore
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ctx = gsap.context(() => {});
  const aboutRef = useRef(null);
  const mainRef = useContext(MainContext);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"],
  });

  // const x = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  useEffect(() => {
    const sectionAnimation = () => {
      ctx.add(() => {
        gsap.fromTo(
          ".about",
          {},
          {
            duration: 1,
            ease: "power2.in",
            scrollTrigger: {
              trigger: ".about",
              start: "top top",
              end: "bottom bottom",
              toggleActions: "play none none reverse",
              pin: ".leftside",
            },
          }
        );
      });
    };

    const itemsAnimation = () => {
      ctx.add(() => {
        ScrollTrigger.batch(".reveals", {
          onEnter: (batch) => {
            console.log(batch);
            batch.forEach((card, index) => {
              gsap.fromTo(
                card.children,
                { opacity: 0, y: 100 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  stagger: 0.5,
                  delay: index * 0.3,
                  scrollTrigger: {
                    trigger: "#about-title",
                    start: "top top",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                  },
                }
              );
            });
          },
          once: true,
        });
      });
    };
    sectionAnimation();
    itemsAnimation();
  }, []);

  useLayoutEffect(() => {
    ctx.add(() => {
      gsap.to("#sphere", {
        scrollTrigger: {
          trigger: "#sphere",
          start: "center 50%",
          end: "center 0%",
          markers: true,
          scrub: true,
        },
        scale: 1.1,
      });
    });
  }, []);

  return (
    <motion.section
      ref={aboutRef}
      className={`about w-full px-40 mt-[-200px] relative z-20`}
    >
      <div className={"flex w-full gap-20"}>
        <div className={"reveals basis-2/3 leftside"}>
          <div className={"reveals"}>
            <div className={"wrapper"}>
              <h1
                id={"about-title"}
                className={"mx-auto text-6xl text-center py-20 lines"}
              >
                About
              </h1>
            </div>
          </div>
          <div className={"wrapper"}>
            <p className={"lines"}>
              Customizable responsive system engine La possibilité d'atteindre
              vos buts plus rapidement Programmable static knowledgebase
              Monitored well-modulated protocol Secured dedicated projection
              Re-contextualized zero administration initiative La possibilité de
              louer naturellement Team-oriented logistical matrix
              Business-focused multi-state intranet Upgradable 6thgeneration
              monitoring Secured methodical algorithm Intuitive value-added
              service-desk Universal foreground complexity Ergonomic high-level
              approach Vision-oriented tertiary hub Multi-lateral secondary
              ability Cross-platform zero-defect open system Managed
              5thgeneration matrices L'assurance de louer de manière sûre La
              liberté de louer avant-tout
            </p>
          </div>
          <div className={"wrapper h-full w-full"}>
            <motion.div
              id="sphere"
              className={"bg-black rounded-full mt-8 h-full w-full lines"}
            ></motion.div>
          </div>
        </div>
        <div
          className={"flex flex-col gap-[300px] basis-1/3 mt-[1000px] rightside"}
        >
          <div className={"reveals"}>
            <div className={"wrapper"}>
              <h2 className={"lines"}>Fullstack Development</h2>
            </div>
            <div className={"wrapper"}>
              <p className={"lines"}>
                integrate back-end platforms scale global e-services mesh
                intuitive applications implement distributed partnerships seize
                best-of-breed e-commerce aggregate next-generation ROI redefine
                robust bandwidth redefine bleeding-edge initiatives deploy
                frictionless deliverables utilize 24/7 interfaces
              </p>
            </div>
          </div>
          <div className={"reveals"}>
            <div className={"wrapper"}>
              <h2 className={"lines"}>Design</h2>
            </div>
            <p className={"lines"}>
              integrate back-end platforms scale global e-services mesh
              intuitive applications implement distributed partnerships seize
              best-of-breed e-commerce aggregate next-generation ROI redefine
              robust bandwidth redefine bleeding-edge initiatives deploy
              frictionless deliverables utilize 24/7 interfaces
            </p>
          </div>
          <div className={"reveals"}>
            <div className={"wrapper"}>
              <h2 className={"lines"}>Languages</h2>
            </div>
            <div className={"wrapper"}>
              <p className={"lines"}>
                integrate back-end platforms scale global e-services mesh
                intuitive applications implement distributed partnerships seize
                best-of-breed e-commerce aggregate next-generation ROI redefine
                robust bandwidth redefine bleeding-edge initiatives deploy
                frictionless deliverables utilize 24/7 interfaces
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
