import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectNotFound() {
  return (
    <>
      <Header />
      <div className="elementor elementor-1133 elementor-location-single">
        <div className="elementor-element elementor-element-803f346 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-7904f48 e-flex e-con-boxed e-con e-child">
              <div className="e-con-inner">
                <h1 className="elementor-heading-title elementor-size-default">
                  Project Not Found
                </h1>
                <p>The project you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/projects" className="elementor-button elementor-button-link">
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

