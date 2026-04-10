import HeroSection from "../components/HeroSection";
import { portfolioData } from "../data/portfolioData";

export default function HomePage() {
  return (
    <HeroSection
      name={portfolioData.name}
      headline={portfolioData.headline}
      location={portfolioData.location}
      cta={portfolioData.cta}
    />
  );
}
