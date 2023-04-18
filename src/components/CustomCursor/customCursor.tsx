import React, { useContext, useEffect, useRef, useState } from "react";
import "./customCursor.scss";
import CustomCursorContext, {
  CursorLookType,
} from "@components/CustomCursor/context/customCursorContext";

function detectLeftButton(event: MouseEvent) {
  if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
    return false;
  } else if ("buttons" in event) {
    return event.buttons === 1;
  } else if ("which" in event) {
    // @ts-ignore
    return event.which === 1;
  } else {
    // @ts-ignore
    return event.button == 1 || event.type == "click";
  }
}

const CustomCursor = () => {
  const mainCursor = useRef<HTMLDivElement>(null);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const { type, setType } = useContext(CustomCursorContext);

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      const mouseX = clientX;
      const mouseY = clientY;

      if (mainCursor.current && secondaryCursor.current) {
        positionRef.current.mouseX =
          mouseX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY =
          mouseY - secondaryCursor.current.clientHeight / 2;
        mainCursor.current.style.transform = `translate3d(${
          mouseX - mainCursor.current.clientWidth / 2
        }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (detectLeftButton(e)) {
        setType("clicking");
      }
    });
    document.addEventListener("mouseup", () => setType("default"));
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      secondaryCursor.current!.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);

  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className={"main-cursor"} ref={mainCursor}>
        <div className={"main-cursor-background"} />
      </div>
      <div className={"secondary-cursor"} ref={secondaryCursor}>
        <div className={"secondary-cursor-background"} />
      </div>
    </div>
  );
};

export default CustomCursor;
