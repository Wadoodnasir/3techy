import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progressive Web App (PWA) Development | 3Techy",
  description: services["progressive-web-app-pwa-development"].description,
};

export default function PWADevelopmentPage() {
  return <ServicePageTemplate service={services["progressive-web-app-pwa-development"]} />;
}

