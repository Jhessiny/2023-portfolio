import { Container, Divider } from "@/app/components";
import React from "react";

import { Carousel, MobileCarousel } from "./components";

import { useDimensions } from "@/app/hooks";

export const ProjectsSection = () => {
  const { width } = useDimensions();
  const showMobileSlide = width < 640;
  return (
    <div>
      <Divider />
      <div className="bg-img bg-[url('/assets/almond-tree-branch.jpg')] bg-no-repeat bg-left md:bg-right-bottom bg-cover relative overflow-hidden">
        <div className="bg-gradient-to-r from-backdrop to-backdrop w-full h-full pt-36 pb-28 ">
          <Container>
            {!showMobileSlide && <Carousel />}
            {showMobileSlide && <MobileCarousel />}
          </Container>
        </div>
      </div>
    </div>
  );
};
