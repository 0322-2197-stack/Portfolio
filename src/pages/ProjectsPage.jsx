import FeaturedProjectSection from "../components/FeaturedProjectSection";
import { portfolioData } from "../data/portfolioData";

export default function ProjectsPage() {
  return <FeaturedProjectSection project={portfolioData.featuredProject} />;
}
