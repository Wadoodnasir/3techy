'use client'

import { useEffect } from 'react'

export default function ProjectsLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Update body class for portfolio page to match source
    document.body.className = 'archive post-type-archive post-type-archive-project wp-custom-logo wp-theme-hello-elementor wp-child-theme-hello-theme-child-master elementor-default elementor-template-full-width elementor-kit-6 elementor-page-1234'
  }, [])

  return <>{children}</>
}

