import { useEffect, useState } from "react";

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  const handleDimensions = () =>
    setDimensions({ height: window?.innerHeight, width: window?.innerWidth });

  useEffect(() => {
    handleDimensions();
    window?.addEventListener("resize", handleDimensions);
    return () => {
      window?.removeEventListener("resize", handleDimensions);
    };
  }, []);

  return dimensions;
};
