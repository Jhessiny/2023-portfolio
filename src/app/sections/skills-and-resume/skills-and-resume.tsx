import React from "react";
import { ResumeButton, SkillsIcons } from "./components";

export const SkillsAndResumeSection = () => {
  return (
    <>
      <SkillsIcons />
      <div className="py-24 flex justify-center items-center" id="resume">
        <ResumeButton />
      </div>
    </>
  );
};
