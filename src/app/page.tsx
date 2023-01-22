"use client";

import {
  IntroductionSection,
  ProjectsSection,
  SkillsAndResumeSection,
  WorkExperienceSection,
} from "./sections";

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <SkillsAndResumeSection />
    </main>
  );
}
