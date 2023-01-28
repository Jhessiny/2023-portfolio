import { Card } from "@/app/components";
import { ProjectModel } from "@/app/models/project-model";
import Image from "next/image";
import React from "react";

type Props = ProjectModel & {
  index: number;
  active: number;
};

export const ProjectItem = ({
  title,
  description,
  technologies,
  img,
  index,
  active,
}: Props) => {
  const activeClasses = active === index ? "-translate-y-5 scale-105" : "";
  const hideClass = active > index ? "opacity-0" : "";

  return (
    <Card
      className={`backdrop-blur-md min-h-[200px] w-[420px] bg-opacity-40 relative p-10 pt-20 ${activeClasses} ${hideClass}`}
    >
      <Image
        src={img}
        width={600}
        height={600}
        alt={title}
        className="object-cover w-32 h-24 absolute top-0 translate-y-[-50%] rounded-sm"
      />
      <p className="font-bold uppercase text-sm">{title}</p>
      <p className="mt-2">{description}</p>
      <p className="mt-2 font-bold">Techs: {technologies}</p>
    </Card>
  );
};
