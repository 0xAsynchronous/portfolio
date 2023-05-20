import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import Hero from "@sections/hero/hero";
import About from "@sections/about/about";
import Projects from "@sections/projects/projects";
import Contact from "@sections/contact/contact";
import { useState } from "react";
import Preloader from "@components/preloader/preloader";
import "../index.scss";
import CustomCursorContext from "@components/CustomCursor/context/customCursorContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLocoScroll from "@hooks/useLocoScroll";
import { gsap } from "gsap";

export default function Home() {
  const mainRef = useRef(null);
  const [preloader, setPreloader] = useState(true);
  const { setType } = useContext(CustomCursorContext);
  // useLocoScroll(!preloader, mainRef);

  // Registers GSAP plugins
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Makes interactive elements change cursor type
  useEffect(() => {
    const interactiveElements = document.querySelectorAll(".cursor-pointer");

    const mouseEnterHandler = () => setType("pointer");
    const mouseLeaveHandler = () => setType("default");

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", mouseEnterHandler);
      element.addEventListener("mouseleave", mouseLeaveHandler);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", mouseEnterHandler);
        element.removeEventListener("mouseleave", mouseLeaveHandler);
      });
    };
  }, [preloader]);

  return (
    <>
      {preloader ? (
        <Preloader setPreloader={setPreloader} />
      ) : (
        <>
          <header></header>
          <main ref={mainRef} id={"main"}>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
