import React, { useEffect, useState } from "react";

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", () =>
      setDimensions({ height: window.innerHeight, width: window.innerWidth })
    );
    window.addEventListener("load", () =>
      setDimensions({ height: window.innerHeight, width: window.innerWidth })
    );
    return () => {
      window.removeEventListener("resize", () =>
        setDimensions({ height: window.innerHeight, width: window.innerWidth })
      );
      window.removeEventListener("load", () =>
        setDimensions({ height: window.innerHeight, width: window.innerWidth })
      );
    };
  }, []);

  return dimensions;
};
