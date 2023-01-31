import React, { useEffect, useState } from "react";
import { NavItem } from "../../nav-item/nav-item";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";

export const MobileMenu = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerColor = isScrolled ? "bg-primary-light" : "bg-secondary-dark";

  useEffect(() => {
    if (isOpen) document.querySelector("body")!.style.overflow = "hidden";
    else document.querySelector("body")!.style.overflow = "auto";
  }, [isOpen]);

  return (
    <div className="block md:hidden">
      <div className="space-y-2" onClick={() => setIsOpen(true)}>
        <div className={twMerge("w-8 h-0.5", hamburgerColor)}></div>
        <div className={twMerge("w-8 h-0.5", hamburgerColor)}></div>
        <div className={twMerge("w-8 h-0.5", hamburgerColor)}></div>
      </div>
      {isOpen && (
        <div className="bg-primary-light fixed top-0 left-0 w-[100vw] h-[100vh] z-50 overflow-hidden">
          <IoMdClose
            size={40}
            className="absolute top-2 right-2 cursor-pointer z-10"
            onClick={() => setIsOpen(false)}
            color="black"
          />
          <ul className="items-center flex flex-col justify-center h-full gap-10">
            <NavItem href="#home" text="Home" className="text-3xl" />
            <NavItem
              href="#experience"
              text="Experience"
              className="text-3xl"
            />
            <NavItem href="#projects" text="Portfolio" className="text-3xl" />
            <NavItem href="#resume" text="Resume" className="text-3xl" />
            <NavItem href="/blog" text="Blog" highlight className="text-3xl" />
          </ul>
        </div>
      )}
    </div>
  );
};
