'use client'

import { useEffect } from 'react'
import { initAnalyticsStubs } from '@/lib/analytics-stubs'
import Script from 'next/script'

export default function Scripts() {
  useEffect(() => {
    console.log('Scripts component mounted')
    // Initialize analytics stubs
    initAnalyticsStubs()

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top')
    if (backToTopBtn) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          backToTopBtn.classList.add('visible')
        } else {
          backToTopBtn.classList.remove('visible')
        }
      }

      window.addEventListener('scroll', handleScroll)

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.elementor-menu-toggle')
    const mainMenu = document.querySelector('.elementor-nav-menu--main')
    const dropdownMenu = document.querySelector('.elementor-nav-menu--dropdown')

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
        menuToggle.setAttribute('aria-expanded', (!isExpanded).toString())
        
        if (dropdownMenu) {
          if (isExpanded) {
            dropdownMenu.classList.remove('menu-open')
            dropdownMenu.setAttribute('aria-hidden', 'true')
          } else {
            dropdownMenu.classList.add('menu-open')
            dropdownMenu.setAttribute('aria-hidden', 'false')
          }
        }
      })
    }

    // Handle submenu toggles on mobile
    const submenuParents = document.querySelectorAll('.menu-item-has-children > a')
    submenuParents.forEach((parent) => {
      parent.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault()
          const submenu = parent.nextElementSibling as HTMLElement
          if (submenu && submenu.classList.contains('sub-menu')) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'
          }
        }
      })
    })

    // Desktop dropdown with 5-second delay
    let dropdownTimeout: NodeJS.Timeout | null = null
    
    const initDropdown = () => {
      console.log('initDropdown called')
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        console.log('Looking for menu items...')
        const servicesMenuItems = document.querySelectorAll('.menu-item-has-children')
        console.log('Found menu items:', servicesMenuItems.length)
        
        servicesMenuItems.forEach((menuItem) => {
          const submenu = menuItem.querySelector('.sub-menu') as HTMLElement
          if (!submenu) {
            console.log('No submenu found')
            return
          }

          console.log('Setting up dropdown for:', menuItem)

          // Ensure dropdown starts hidden
          submenu.classList.remove('dropdown-visible')
          submenu.style.display = 'none'

          const showDropdown = () => {
            console.log('Showing dropdown')
            if (dropdownTimeout) {
              clearTimeout(dropdownTimeout)
              dropdownTimeout = null
            }
            submenu.classList.add('dropdown-visible')
            submenu.style.display = 'block'
            submenu.style.setProperty('display', 'block', 'important')
          }

          const hideDropdown = () => {
            if (dropdownTimeout) {
              clearTimeout(dropdownTimeout)
            }
            dropdownTimeout = setTimeout(() => {
              console.log('Hiding dropdown')
              submenu.classList.remove('dropdown-visible')
              submenu.style.display = 'none'
              dropdownTimeout = null
            }, 5000) // 5 seconds delay
          }

          // Show dropdown on hover over Services
          menuItem.addEventListener('mouseenter', showDropdown)
          
          // Hide dropdown with delay when leaving Services
          menuItem.addEventListener('mouseleave', (e) => {
            // Check if mouse is moving to dropdown
            const mouseEvent = e as MouseEvent
            const relatedTarget = mouseEvent.relatedTarget as HTMLElement
            if (relatedTarget && (submenu.contains(relatedTarget) || relatedTarget === submenu)) {
              return // Don't hide if moving to dropdown
            }
            hideDropdown()
          })

          // Keep dropdown open when hovering over it
          submenu.addEventListener('mouseenter', showDropdown)
          
          // Hide dropdown with delay when leaving dropdown
          submenu.addEventListener('mouseleave', (e) => {
            const mouseEvent = e as MouseEvent
            const relatedTarget = mouseEvent.relatedTarget as HTMLElement
            if (relatedTarget && (menuItem.contains(relatedTarget) || relatedTarget === menuItem)) {
              return // Don't hide if moving back to Services
            }
            hideDropdown()
          })
        })
      }, 100)
    }

    // Initialize dropdown on load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initDropdown)
    } else {
      initDropdown()
    }

    // Lazy loading for background images
    const lazyloadRunObserver = () => {
      const lazyloadBackgrounds = document.querySelectorAll(
        `.e-con.e-parent:not(.e-lazyloaded):not(.e-no-lazyload)`
      )
      
      if (lazyloadBackgrounds.length === 0) return

      const lazyloadBackgroundObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const lazyloadBackground = entry.target as HTMLElement
              if (lazyloadBackground) {
                lazyloadBackground.classList.add('e-lazyloaded')
              }
              lazyloadBackgroundObserver.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '200px 0px 200px 0px' }
      )
      
      lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground)
      })
    }

    // Run lazy loading
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', lazyloadRunObserver)
    } else {
      lazyloadRunObserver()
    }

    // Sticky header functionality
    let lastScroll = 0
    const header = document.getElementById('header')
    if (header) {
      const handleStickyScroll = () => {
        const currentScroll = window.pageYOffset
        if (currentScroll > 400) {
          header.classList.add('sticky')
        } else {
          header.classList.remove('sticky')
        }
        lastScroll = currentScroll
      }

      window.addEventListener('scroll', handleStickyScroll)
      return () => {
        window.removeEventListener('scroll', handleStickyScroll)
      }
    }
  }, [])

  return (
    <>
      {/* Essential Blocks Localize - Stub */}
      <Script id="essential-blocks-localize" strategy="afterInteractive">
        {`
          var eb_conditional_localize = [];
          var EssentialBlocksLocalize = {
            "eb_plugins_url": "https://xyz.com/wp-content/plugins/essential-blocks/",
            "image_url": "https://xyz.com/wp-content/plugins/essential-blocks/assets/images",
            "eb_wp_version": "6.8",
            "eb_version": "5.7.3",
            "eb_admin_url": "https://xyz.com/wp-admin/",
            "rest_rootURL": "https://xyz.com/wp-json/",
            "ajax_url": "https://xyz.com/wp-admin/admin-ajax.php",
            "responsiveBreakpoints": {"tablet": 1024, "mobile": 767}
          };
        `}
      </Script>

      {/* EAEL General Localize - Stub */}
      <Script id="eael-general-localize" strategy="afterInteractive">
        {`
          var localize = {
            "ajaxurl": "https://xyz.com/wp-admin/admin-ajax.php",
            "nonce": "61b669e907",
            "page_permalink": "https://xyz.com/",
            "el_breakpoints": {
              "mobile": {"label": "Mobile Portrait", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true},
              "tablet": {"label": "Tablet Portrait", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true}
            }
          };
        `}
      </Script>

      {/* HubSpot Conversations Script */}
      <Script
        src="https://js.hs-scripts.com/24167596.js?integration=WordPress&ver=11.1.75"
        id="leadin-script-loader-js-js"
        strategy="afterInteractive"
      />
    </>
  )
}
