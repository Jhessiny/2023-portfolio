import { NavItem } from "@/app/components";
import React from "react";
import { SiLinkedin, SiGithub, SiGoogle } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="bg-secondary-dark py-14">
      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/jhessiny-mattos/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin
            size={40}
            className="hover:text-[#0072b1] hover:scale-110 duration-300 text-white"
          />
        </a>
        <a href="https://github.com/Jhessiny" target="_blank" rel="noreferrer">
          <SiGithub
            size={40}
            className="hover:scale-110 duration-300 text-white"
          />
        </a>
        <a href="#" target="_blank">
          <SiGoogle
            size={40}
            className="hover:text-[#C71610] hover:scale-110 duration-300 text-white"
          />
        </a>
      </div>
      <ul className="block text-center sm:flex items-center justify-center text-primary-light mt-6">
        <NavItem href="/" text="Home" light />
        <NavItem href="/" text="Experience" light />
        <NavItem href="/" text="Portfolio" light />
        <NavItem href="/" text="Resume" light />

        <NavItem href="/" text="Blog" light />
      </ul>
      <p className="text-white text-center text-sm mt-4">
        <span>&copy;</span>Copyright. All rights reserved
      </p>
    </div>
  );
};
