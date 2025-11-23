import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Design & Development | 3Techy",
  description: services["mobile-app-design-development"].description,
};

export default function MobileAppDesignPage() {
  return <ServicePageTemplate service={services["mobile-app-design-development"]} />;
}

