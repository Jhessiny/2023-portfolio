import React, { useEffect, useState } from "react";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";

import { ProjectItem } from "../";

import { projectsList, translateList } from "../../constants";
import { twMerge } from "tailwind-merge";

export const Carousel = () => {
  const [active, setActive] = useState(0);
  const handleNext = () => {
    setActive((prev) => {
      const newValue = prev + 1;
      if (newValue >= projectsList.length) return 0;
      return newValue;
    });
  };

  const handlePrev = () => {
    setActive((prev) => {
      const newValue = prev - 1;
      if (newValue < 0) return prev;
      return newValue;
    });
  };

  return (
    <>
      <div className="flex overflow-x-hidden pt-20">
        <div className="flex items-end">
          <h2
            className="font-bold text-text-dark text-5xl uppercase transform rotate-180 inline-block mr-6 z-20"
            style={{ writingMode: "vertical-rl" }}
          >
            Projects
          </h2>
        </div>
        <div>
          <div
            className={twMerge(
              `flex gap-8 duration-500 relative`,
              translateList[active]
            )}
          >
            {projectsList.map((item, index) => (
              <ProjectItem
                key={item.title}
                {...item}
                index={index}
                active={active}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-28 left-20">
        <div className="">
          <RxArrowLeft size={24} onClick={handlePrev} />
          <RxArrowRight size={24} onClick={handleNext} />
        </div>
        <div className="h-14 flex justify-between items-end w-14">
          {projectsList.map((item, index) => (
            <div
              key={index}
              className={twMerge(
                `w-1 h-3 bg-primary-dark ${index === active ? "h-10" : ""}`
              )}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
