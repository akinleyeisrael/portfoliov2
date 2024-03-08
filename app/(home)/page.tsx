import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { LayoutGrid } from "@/components/ui/layout-grid";
import SoftwareProjects from "./SoftwareProjectsSection";
import Experience from "./ExperienceSection";
import AboutSection from "./AboutSection";

export default function Home() {
  // const portfolioEntries =  await getPorfolioEntries()

  return (
    <div className="pt-[8rem]">
      <AboutSection />
      <Experience />
      <SoftwareProjects />
    </div>
  );
}
