import AboutSection from "../components/AboutSection";
import { portfolioData } from "../data/portfolioData";

export default function AboutPage() {
  return <AboutSection text={portfolioData.about} />;
}
