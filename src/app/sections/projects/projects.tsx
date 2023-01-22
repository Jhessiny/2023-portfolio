import { Container, Divider } from "@/app/components";
import React from "react";
import { ProjectItem } from "./components";

import { projectsList } from "./constants";

export const ProjectsSection = () => {
  return (
    <div>
      <Divider />
      <div className="bg-img bg-[url('/assets/almond-tree-branch.jpg')] bg-no-repeat bg-right-bottom bg-cover relative overflow-hidden">
        <div className="bg-gradient-to-r from-backdrop to-backdrop w-full h-full pt-28 pb-20 ">
          <Container>
            <div className="flex">
              <div className="flex items-end">
                <h2
                  className="font-bold text-text-dark text-5xl uppercase transform rotate-180 inline-block"
                  style={{ writingMode: "vertical-rl" }}
                >
                  Portfolio
                </h2>
              </div>
              <div className="flex justify-between items-stretch gap-2 ">
                {projectsList.map((item) => (
                  <ProjectItem key={item.title} {...item} />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
