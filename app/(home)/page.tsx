import AboutSection from "./AboutSection";
import Experience from "./ExperienceSection";
import { Footer } from "./Footer";
import SoftwareProjects from "./SoftwareProjectsSection";

export default function Home() {
  // const portfolioEntries =  await getPorfolioEntries()

  return (
    <div className="pt-[6rem]">

      <AboutSection />
      <Experience />
      <SoftwareProjects />
      <Footer />

    </div>
  );
}
