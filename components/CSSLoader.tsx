'use client'

import { useEffect } from 'react'

export default function CSSLoader() {
  useEffect(() => {
    // Load Google Fonts
    const googleFontsLink = document.createElement('link')
    googleFontsLink.rel = 'stylesheet'
    googleFontsLink.href = 'https://fonts.googleapis.com/css?family=Rubik:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic|Titillium+Web:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap'
    document.head.appendChild(googleFontsLink)

    // Load all CSS files in order (using the downloaded files)
    const cssFiles = [
      '/css/wp-content/themes/hello-elementor/style.min.css',
      '/css/wp-content/themes/hello-elementor/theme.min.css',
      '/css/wp-content/plugins/elementor/assets/css/frontend-lite.min.css',
      '/css/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css',
      '/css/wp-content/uploads/elementor/css/post-6.css',
      '/css/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min.css',
      '/css/wp-content/uploads/elementor/css/post-2745.css',
      '/css/wp-content/uploads/elementor/css/post-703.css',
      '/css/wp-content/uploads/elementor/css/post-706.css',
      '/css/wp-includes/css/dashicons.min.css',
      '/css/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/css/view/general.min.css',
      '/css/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css',
      '/css/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css',
      '/css/wp-content/plugins/elementor-pro/assets/css/widget-carousel.min.css',
      '/css/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css',
      '/css/wp-content/plugins/elementor-pro/assets/css/widget-posts.min.css',
    ]

    // Function to load CSS with error handling
    const loadCSS = (href: string, id?: string): Promise<boolean> => {
      return new Promise((resolve) => {
        // Check if already loaded
        if (id && document.getElementById(id)) {
          resolve(true)
          return
        }

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        link.media = 'all'
        if (id) link.id = id

        link.onload = () => resolve(true)
        link.onerror = () => {
          console.warn(`Failed to load CSS: ${href}`)
          resolve(false) // Don't reject, just warn
        }

        document.head.appendChild(link)
      })
    }

    // Load CSS files sequentially to maintain order
    cssFiles.reduce<Promise<boolean>>((promise, href, index) => {
      return promise.then(() => {
        const id = `elementor-css-${index}`
        return loadCSS(href, id)
      })
    }, Promise.resolve(true))
  }, [])

  return null
}
