import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence Development & Automation | 3Techy",
  description: services["artificial-intelligence-development-automation"].description,
};

export default function AIDevelopmentPage() {
  return <ServicePageTemplate service={services["artificial-intelligence-development-automation"]} />;
}

