import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lahore Software Consultant: SaaS Development & Planning Service",
  description: services["saas-design-development"].description,
};

export default function SaaSDesignDevelopmentPage() {
  return <ServicePageTemplate service={services["saas-design-development"]} />;
}

