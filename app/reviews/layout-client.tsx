'use client'

import { useEffect } from 'react'

export default function ReviewsLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Update body class for reviews page to match source
    document.body.className = 'wp-singular page-template-default page page-id-2824 wp-custom-logo wp-theme-hello-elementor wp-child-theme-hello-theme-child-master elementor-default elementor-kit-6 elementor-page elementor-page-2824 elementor-page-709'
  }, [])

  return <>{children}</>
}

