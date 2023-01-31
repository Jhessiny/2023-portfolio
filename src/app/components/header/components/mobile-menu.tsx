import React, { useState } from "react";
import { NavItem } from "../../nav-item/nav-item";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <div className="space-y-2" onClick={() => setIsOpen(true)}>
        <div className="w-8 h-0.5 bg-primary-light"></div>
        <div className="w-8 h-0.5 bg-primary-light"></div>
        <div className="w-8 h-0.5 bg-primary-light"></div>
      </div>
      {isOpen && (
        <div className="bg-primary-light sticky top-0 left-0">
          <ul className="items-center flex flex-col justify-center ">
            <NavItem href="/" text="Home" className="text-lg" />
            <NavItem href="/" text="Experience" className="text-lg" />
            <NavItem href="/" text="Portfolio" className="text-lg" />
            <NavItem href="/" text="Resume" className="text-lg" />
            <NavItem href="/" text="Blog" highlight className="text-lg" />
          </ul>
        </div>
      )}
    </div>
  );
};
