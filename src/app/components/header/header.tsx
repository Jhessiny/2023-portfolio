import React, { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";
import { DefaultMenu, MobileMenu } from "./components";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const checkScroll = () => {
    if (window?.scrollY > 5) setIsScrolled(true);
    else setIsScrolled(false);
  };
  useEffect(() => {
    window?.addEventListener("scroll", checkScroll);
    return window?.removeEventListener("scroll", checkScroll);
  }, []);

  const bgScrolledClasses = isScrolled
    ? "fixed bg-secondary-dark bg-opacity-80 backdrop-blur-lg"
    : "";
  const titleScrolledClasses = isScrolled
    ? "text-primary-light"
    : "text-secondary-dark md:text-primary-light";
  return (
    <div
      className={twMerge(
        `absolute w-full z-10 translate-x-[-50%] left-[50%] duration-300 `,
        bgScrolledClasses
      )}
    >
      <nav
        className={twMerge(
          `flex justify-between px-2 py-4 w-full max-w-ultraLargeDesktop mx-auto`,
          titleScrolledClasses
        )}
      >
        <h1
          className={twMerge(" font-bold text-3xl uppercase tracking-widest")}
        >
          JOSM
        </h1>

        <DefaultMenu isScrolled={isScrolled} />
        <MobileMenu />
      </nav>
    </div>
  );
};
