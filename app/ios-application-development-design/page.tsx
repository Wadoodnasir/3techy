import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iOS Application Development & Design | 3Techy",
  description: services["ios-application-development-design"].description,
};

export default function iOSDevelopmentPage() {
  return <ServicePageTemplate service={services["ios-application-development-design"]} />;
}

