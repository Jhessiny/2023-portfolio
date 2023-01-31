import { Container } from "@/app/components";
import React, { useCallback, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ExperienceItem } from "./components";
import { experiences } from "./constants";

export const WorkExperienceSection = () => {
  const observer = useRef<IntersectionObserver>();
  const [animation, setAnimation] = useState<string>("opacity-0");
  const sectionRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimation("animate-appearSlideToTop");
        }
      },
      { rootMargin: "-5%" }
    );
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className="py-28 md:py-40 px-4" id="experience">
      <Container>
        <div
          className={twMerge(
            "grid grid-cols-1 md:grid-cols-experiencesMd lg:grid-cols-experiencesLg justify-between items-center",
            animation
          )}
          ref={sectionRef}
        >
          <div>
            <h3 className="text-primary-main font-bold text-5xl leading-none mb-6 md:mb-0 md:text-3xl uppercase md:leading-7">
              <span className="block">My</span>
              <span className="block">Work</span>
              <span className="block">Experience</span>
            </h3>
            <h3 className="text-primary-main font-bold text-3xl uppercase leading-7 opacity-20 hidden md:block">
              <span className="block">Experience</span>
              <span className="block">Work</span>
              <span className="block">My</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ExperienceItem {...experiences[0]} />
            <ExperienceItem {...experiences[1]} />
            <ExperienceItem {...experiences[2]} />
            <ExperienceItem {...experiences[3]} />
          </div>
        </div>
      </Container>
    </div>
  );
};
