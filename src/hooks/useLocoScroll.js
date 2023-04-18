import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function useLocoScroll(start, ref) {
  useEffect(() => {
    if (!start) return;
    const scrollEl = ref.current;
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
  }, [start]);
}
