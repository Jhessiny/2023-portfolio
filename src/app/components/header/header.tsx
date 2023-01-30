import React from "react";
import { NavItem } from "../nav-item/nav-item";
import { RxDotFilled } from "react-icons/rx";

export const Header = () => {
  return (
    <nav className="flex justify-between px-2 py-4 absolute w-full max-w-ultraLargeDesktop z-10 translate-x-[-50%] left-[50%]">
      <h1 className="text-secondary-dark md:text-primary-light font-bold text-3xl uppercase tracking-widest">
        JOSM
      </h1>
      <ul className="hidden items-center animate-re-appear md:flex">
        <RxDotFilled color="#42404b" className="mr-5 hidden lg:block" />
        <NavItem href="/" text="Home" />
        <NavItem href="/" text="Experience" />
        <NavItem href="/" text="Portfolio" />
        <NavItem href="/" text="Resume" />
        <NavItem href="/" text="Blog" highlight />
        <RxDotFilled color="#42404b" className="ml-5 hidden lg:block" />
      </ul>
    </nav>
  );
};
