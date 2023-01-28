import React, { useEffect, useState } from "react";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";

import { ProjectItem } from "../";

import { projectsList } from "../../constants";
import { twMerge } from "tailwind-merge";

export const Carousel = () => {
  const [active, setActive] = useState(0);
  const handleNext = () => {
    console.log("oi");
    setActive((prev) => {
      console.log({ prev });
      const newValue = prev + 1;
      if (newValue >= projectsList.length) return 0;
      console.log({ newValue });
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

  const translateList = active * 436;

  return (
    <>
      <div className="flex overflow-x-hidden pt-20">
        <div className="flex items-end">
          <h2
            className="font-bold text-text-dark text-5xl uppercase transform rotate-180 inline-block mr-4"
            style={{ writingMode: "vertical-rl" }}
          >
            Projects
          </h2>
        </div>
        <div>
          <div
            className={`flex gap-4 -translate-x-[${translateList}px] duration-300`}
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
