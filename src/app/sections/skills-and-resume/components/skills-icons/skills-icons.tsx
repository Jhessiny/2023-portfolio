import React from "react";
import {
  SiTypescript,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
} from "react-icons/si";
import { BaseIcon } from "@/app/components/base-icon/base-icon";

export const SkillsIcons = () => {
  return (
    <div className="bg-primary-light mb-2 py-10">
      <h2 className="text-center font-semibold text-text-dark uppercase text-sm mb-4">
        Main technologies
      </h2>
      <div className="flex justify-center gap-4">
        <BaseIcon icon={<SiTypescript />} hoverColor="#007acc" />
        <BaseIcon icon={<SiReact />} hoverColor="#61dbfb" />
        <BaseIcon icon={<SiRedux />} hoverColor="#764abc" />
        <BaseIcon icon={<SiHtml5 />} hoverColor="#e34c26" />
        <BaseIcon icon={<SiCss3 />} hoverColor="#2494f4" />
        <BaseIcon icon={<SiJavascript />} hoverColor="#f0db4f" />
        <BaseIcon icon={<SiGit />} hoverColor="#F1502F" />
      </div>
    </div>
  );
};
