import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import key1 from "../../assets/sounds/key1.mp3";
import key2 from "../../assets/sounds/key2.mp3";

const Preloader: React.FC<{ setPreloader: Function }> = ({ setPreloader }) => {
  const [fontFamily, setFontFamily] = useState("Brush Script MT");
  const [fontWeight, setFontWeight] = useState("600");
  const [textTransform, setTextTransform] = useState("uppercase");
  const [intervalValue, setIntervalValue] = useState(50);
  const [backgroundColor, setBackgroundColor] = useState("#FFE793");
  const [fontSize, setFontSize] = useState("15vw");
  const [playKey1] = useSound(key1, { volume: 0.2 });
  const [playKey2] = useSound(key2, { volume: 0.2 });

  // change font every 100 ms
  useEffect(() => {
    const interval = setInterval(() => {
      const fonts = [
        "Brush Script MT",
        "Inter",
        "Luminari",
        "Times New Roman",
        "Copperplate",
        "Lucida Sans Typewriter",
        "Papyrus",
      ];
      const textColors = [
        "#2F2F2F",
        "#5700FF",
        "#f26d7a",
        "#6e7763",
        "#FF3E6C",
        "#5433cc",
      ];
      setFontSize(Math.floor(Math.random() * 6 + 10).toString() + "vw");
      setFontWeight(Math.floor(Math.random() * 900).toString());
      const textDecorations = ["lowercase", "uppercase"];
      setTextTransform(
        textDecorations[Math.floor(Math.random() * textDecorations.length)]
      );
      setIntervalValue(intervalValue * 1.2);
      setFontFamily(fonts[fonts.indexOf(fontFamily) + 1] || fonts[0]);
      setBackgroundColor(
        textColors[textColors.indexOf(backgroundColor) + 1] || textColors[0]
      );
      Math.random() > 0.5 ? playKey1() : playKey2();
    }, intervalValue);
    return () => clearInterval(interval);
  }, [intervalValue]);

  // remove preloader after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 2900);
  }, [setPreloader]);

  return (
    <div
      className={
        "fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center"
      }
    >
      <h1
        id="loader-text"
        className={"text-center text-9xl"}
        style={{
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          textTransform: textTransform as "uppercase" | "lowercase",
          fontSize: fontSize,
          color: backgroundColor,
        }}
      >
        async
      </h1>
    </div>
  );
};

export default Preloader;
