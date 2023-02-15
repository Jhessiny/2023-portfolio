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
      <div className="flex overflow-x-hidden px-2 md:px-0 pt-20">
        <div className="flex items-end z-0">
          <h2
            className="font-bold text-text-dark text-5xl uppercase transform rotate-180 inline-block mr-6 z-20 hidden sm:block "
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
      <div className="absolute -bottom-28 left-[4.3rem]">
        <RxArrowLeft
          size={24}
          onClick={handlePrev}
          className={`${
            active === 0 ? "opacity-40 cursor-default" : "cursor-pointer"
          }`}
        />
        <RxArrowRight
          size={24}
          onClick={handleNext}
          className="cursor-pointer"
        />
        <div className="h-14 flex justify-between items-end w-14">
          {projectsList.map((_, index) => (
            <div
              onClick={() => setActive(index)}
              key={index}
              className={twMerge(
                `w-1 h-3 bg-primary-dark duration-300 rounded-t-sm cursor-pointer ${
                  index === active ? "h-10" : ""
                }`
              )}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
