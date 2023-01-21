import { Container, Divider } from "@/app/components";
import React from "react";
import { ProjectItem } from "./components";

import { projectsList } from "./constants";

export const ProjectsSection = () => {
  return (
    <div>
      <Container>
        <h2 className="font-bold text-secondary-dark text-3xl uppercase mb-4">
          Portfolio
        </h2>
      </Container>
      <Divider />
      <div className="bg-img bg-[url('/assets/trees-of-mystery.jpg')] bg-no-repeat bg-center bg-cover h-96  relative">
        <div className="bg-gradient-to-r from-backdrop to-backdrop w-full h-full py-20  ">
          <Container>
            <div className="flex justify-between items-stretch gap-2">
              {projectsList.map((item) => (
                <ProjectItem key={item.title} {...item} />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
