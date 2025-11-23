import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Android Application Development & Design | 3Techy",
  description: services["android-application-development-design"].description,
};

export default function AndroidDevelopmentPage() {
  return <ServicePageTemplate service={services["android-application-development-design"]} />;
}

