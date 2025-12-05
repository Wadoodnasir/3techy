import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Application Development | 3Techy",
  description: services["web-application-development"].description,
};

export default function WebApplicationDevelopmentPage() {
  return <ServicePageTemplate service={services["web-application-development"]} />;
}

