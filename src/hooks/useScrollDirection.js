import { useState, useEffect } from "react";

let lastScroll = 0;
let change = 0;
export default function useScrollDirection(elemRef) {
  //true : up , false : down
  const [scrollDir, setScrollDir] = useState(true);

  useEffect(() => {
    const thresholdUp = 10;
    const thresholdDown = 100;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (scrollDir && Math.abs(scrollY - lastScrollY) < thresholdDown) {
        ticking = false;
        return;
      }
      if (!scrollDir && Math.abs(scrollY - lastScrollY) < thresholdUp) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
  return scrollDir;
}
