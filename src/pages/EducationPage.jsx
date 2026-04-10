import EducationSection from "../components/EducationSection";
import { portfolioData } from "../data/portfolioData";

export default function EducationPage() {
  return <EducationSection education={portfolioData.education} />;
}
