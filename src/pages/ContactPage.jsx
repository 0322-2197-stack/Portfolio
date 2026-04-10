import ContactFooter from "../components/ContactFooter";
import { portfolioData } from "../data/portfolioData";

export default function ContactPage() {
  return <ContactFooter contact={portfolioData.contact} />;
}
