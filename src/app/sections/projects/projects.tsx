import { Container, Divider } from "@/app/components";
import React from "react";

import "swiper/css";
import { Carousel } from "./components/carousel/carousel";

export const ProjectsSection = () => {
  return (
    <div>
      <Divider />
      <div className="bg-img bg-[url('/assets/almond-tree-branch.jpg')] bg-no-repeat bg-right-bottom bg-cover relative overflow-hidden">
        <div className="bg-gradient-to-r from-backdrop to-backdrop w-full h-full pt-36 pb-28 ">
          <Container>
            <Carousel />
          </Container>
        </div>
      </div>
    </div>
  );
};
