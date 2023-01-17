import RootLayout from "../pages/layout";
import {
  IntroductionSection,
  ProjectsSection,
  SkillsAndResumeSection,
  SocialMediaAndLinksSection,
} from "./sections";

export default function Home() {
  return (
    <RootLayout>
      <main>
        <IntroductionSection />
        <ProjectsSection />
        <SkillsAndResumeSection />
        <SocialMediaAndLinksSection />
      </main>
    </RootLayout>
  );
}
