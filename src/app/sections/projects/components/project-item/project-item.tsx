import { Card } from "@/app/components";
import { ProjectModel } from "@/app/models/project-model";
import Image from "next/image";
import React from "react";

export const ProjectItem = ({
  title,
  description,
  technologies,
  img,
}: ProjectModel) => {
  return (
    <Card className="backdrop-blur-md min-h-[200px] bg-opacity-40 relative w-[400px] p-8 pt-16">
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
