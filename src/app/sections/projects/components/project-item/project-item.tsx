import { Card } from "@/app/components";
import { useDimensions } from "@/app/hooks";
import { ProjectModel } from "@/app/models/project-model";
import Image from "next/image";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SlRocket } from "react-icons/sl";
import { twMerge } from "tailwind-merge";

type Props = ProjectModel & {
  index: number;
  active?: number;
  isMobile?: boolean;
};

export const ProjectItem = ({
  title,
  isMobile,
  description,
  technologies,
  img,
  index,
  active,
  deployLink,
  githubRepo,
}: Props) => {
  const activeClasses =
    typeof active === "number" && active === index
      ? "md:-translate-y-5 md:scale-105 bg-opacity-60"
      : "";

  const hideClass =
    typeof active === "number" && active > index ? "opacity-0" : "";

  const widthClass = isMobile ? "w-full" : "w-[26.25rem]";

  return (
    <Card
      className={twMerge(
        "backdrop-blur-md min-h-[25rem] sm:min-h-[25rem] md:min-h-full bg-opacity-40 relative px-5 md:px-10 pt-16 pb-10 duration-300 z-10 flex flex-col justify-between",
        activeClasses,
        hideClass,
        widthClass
      )}
    >
      <Image
        src={img}
        width={600}
        height={600}
        alt={title}
        className="object-cover w-[10rem] h-[6rem] absolute top-0 translate-y-[-50%] rounded-sm"
      />
      <p className="font-bold uppercase text-sm">{title}</p>
      <p className="mt-2">{description}</p>
      <p className="mt-2 font-bold">Techs: {technologies}</p>
      <div className="flex justify-around mt-4 gap-4">
        <a
          href={githubRepo}
          target="_blank"
          className="bg-primary-dark border-transparent text-white border-2 rounded-sm border-solid py-1 flex items-center gap-2 hover:scale-105 duration-300 hover:shadow-lg hover:-translate-y-[2px] flex-1 justify-center"
          rel="noreferrer"
        >
          <SiGithub /> see code
        </a>
        <a
          href={deployLink}
          target="_blank"
          className="bg-primary-dark border-transparent text-white border-2 rounded-sm border-solid py-1 flex items-center gap-2 hover:scale-105 duration-300 hover:shadow-lg hover:-translate-y-[2px]  flex-1 justify-center"
          rel="noreferrer"
        >
          <SlRocket />
          see deploy
        </a>
      </div>
    </Card>
  );
};
