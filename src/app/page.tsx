"use client";

import {
  IntroductionSection,
  ProjectsSection,
  SkillsAndResumeSection,
  SocialMediaAndLinksSection,
  WorkExperienceSection,
} from "./sections";

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <SkillsAndResumeSection />
      <SocialMediaAndLinksSection />
    </main>
  );
}
