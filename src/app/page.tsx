import {
  IntroductionSection,
  ProjectsSection,
  SkillsAndResumeSection,
  SocialMediaAndLinksSection,
} from "./sections";

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <ProjectsSection />
      <SkillsAndResumeSection />
      <SocialMediaAndLinksSection />
    </main>
  );
}
