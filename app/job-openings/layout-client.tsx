'use client'

import { useEffect } from 'react'

export default function CareersLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Update body class for careers page to match source
    document.body.className = 'wp-singular page-template-default page page-id-6274 wp-custom-logo wp-theme-hello-elementor wp-child-theme-hello-theme-child-master elementor-default elementor-kit-6 elementor-page elementor-page-6274 elementor-page-709'
  }, [])

  return <>{children}</>
}

