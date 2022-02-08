import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";
import tailwindConfig from "../../tailwind.config";

export default function useWindowArea() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
    });
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (
    windowSize.width <
    Number(tailwindConfig.theme.screens.mobile.replace("px", ""))
  ) {
    return "mobile";
  }
  if (
    windowSize.width <
    Number(tailwindConfig.theme.screens.tablet.replace("px", ""))
  ) {
    return "tablet";
  }
  if (
    windowSize.width <
    Number(tailwindConfig.theme.screens.laptop.replace("px", ""))
  ) {
    return "laptop";
  }
  if (windowSize.width < 4000) {
    return "desktop";
  }
  return null;
}
