import ServicePageTemplate from "@/components/ServicePageTemplate";
import { services } from "@/lib/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blockchain & Web3 Development | 3Techy",
  description: services["blockchain-web3-development"].description,
};

export default function BlockchainWeb3Page() {
  return <ServicePageTemplate service={services["blockchain-web3-development"]} />;
}

