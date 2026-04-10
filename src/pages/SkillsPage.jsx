import SkillsSection from "../components/SkillsSection";
import { portfolioData } from "../data/portfolioData";

export default function SkillsPage() {
  return <SkillsSection technical={portfolioData.skills.technical} soft={portfolioData.skills.soft} />;
}
