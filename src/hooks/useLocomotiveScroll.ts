"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-revealed",
      reloadOnContextChange: true,
      lerp: 0.1, // Linear interpolation value (smoothness)
    });

    // Update scroll on window resize
    window.addEventListener("resize", () => {
      scroll.update();
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return scrollRef;
};
