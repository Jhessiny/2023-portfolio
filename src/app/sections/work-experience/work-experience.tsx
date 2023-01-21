import { Container } from "@/app/components";
import React, { useCallback, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ExperienceItem } from "./components";

export const WorkExperienceSection = () => {
  const observer = useRef<IntersectionObserver>();
  const [animation, setAnimation] = useState<string>("");
  const sectionRef = useCallback((node: any) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        console.log(entries[0]);
        if (entries[0].isIntersecting) {
          setAnimation("animate-appearSlideToTop");
        }
      },
      { rootMargin: "-5%" }
    );
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className="py-60">
      <Container>
        <div
          className={twMerge("flex justify-between items-center", animation)}
          ref={sectionRef}
        >
          <div>
            <h3 className="text-primary-main font-bold text-3xl uppercase leading-7">
              <span className="block">My</span>
              <span className="block">Work</span>
              <span className="block">Experience</span>
            </h3>
            <h3 className="text-primary-main font-bold text-3xl uppercase leading-7 opacity-20">
              <span className="block">Experience</span>
              <span className="block">Work</span>
              <span className="block">My</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <ExperienceItem
              title="Frontend Developer"
              company="SOFTO"
              date="2022 - current"
              description="Development of projects features, creating components and testing using React, Typescript, Redux, Clean Architecture, Jest, testing-library"
            />
            <ExperienceItem
              title="Frontend Developer"
              company="SOFTO"
              date="2022 - current"
              description="Development of projects features, creating components and testing using React, Typescript, Redux, Clean Architecture, Jest, testing-library"
            />
            <ExperienceItem
              title="Frontend Developer"
              company="SOFTO"
              date="2022 - current"
              description="Development of projects features, creating components and testing using React, Typescript, Redux, Clean Architecture, Jest, testing-library"
            />
            <ExperienceItem
              title="Frontend Developer"
              company="SOFTO"
              date="2022 - current"
              description="Development of projects features, creating components and testing using React, Typescript, Redux, Clean Architecture, Jest, testing-library"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
