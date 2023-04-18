import React, { useContext, useEffect } from "react";
import Hero from "@sections/hero/hero";
import About from "@sections/about/about";
import Projects from "@sections/projects/projects";
import Contact from "@sections/contact/contact";
import { useRef, useState } from "react";
import Preloader from "@components/preloader/preloader";
import useLocoScroll from "@hooks/useLocoScroll";
import "../index.scss";
import CustomCursorContext from "@components/CustomCursor/context/customCursorContext";

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  const { setType } = useContext(CustomCursorContext);
  const mainRef = useRef(null);
  useLocoScroll(!preloader, mainRef);

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
        <main ref={mainRef}>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      )}
    </>
  );
}
