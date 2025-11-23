"use client";

import { useEffect } from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Update body class for project detail page to match source
    document.body.className =
      "wp-singular project-template-default single single-project wp-custom-logo wp-theme-hello-elementor wp-child-theme-hello-theme-child-master elementor-default elementor-kit-6 elementor-page";
  }, []);

  return <>{children}</>;
}

