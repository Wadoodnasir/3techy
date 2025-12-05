import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX/UI Design | 3Techy",
  description: services["ux-ui-design"].description,
};

export default function UXUIDesignPage() {
  return <ServicePageTemplate service={services["ux-ui-design"]} />;
}

