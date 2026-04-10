import CertificationsSection from "../components/CertificationsSection";
import { portfolioData } from "../data/portfolioData";

export default function CertificationsPage() {
  return <CertificationsSection certifications={portfolioData.certifications} />;
}
