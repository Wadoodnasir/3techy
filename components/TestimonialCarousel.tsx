'use client'

import { useEffect, useRef } from 'react'

export default function TestimonialCarousel() {
  const swiperRef = useRef<HTMLDivElement>(null)
  const swiperInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Load Swiper JS dynamically
    const loadSwiper = async () => {
      // Check if Swiper is already loaded
      if (typeof window !== 'undefined' && (window as any).Swiper) {
        setTimeout(initSwiper, 100)
        return
      }

      // Check if script is already being loaded
      const existingScript = document.querySelector('script[src="/js/swiper.min.js"]')
      if (existingScript) {
        existingScript.addEventListener('load', () => {
          setTimeout(initSwiper, 100)
        })
        return
      }

      // Load Swiper from local file
      const script = document.createElement('script')
      script.src = '/js/swiper.min.js'
      script.async = true
      script.onload = () => {
        setTimeout(initSwiper, 100)
      }
      script.onerror = () => {
        // Fallback to CDN if local file fails
        const cdnScript = document.createElement('script')
        cdnScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
        cdnScript.async = true
        cdnScript.onload = () => {
          setTimeout(initSwiper, 100)
        }
        document.head.appendChild(cdnScript)
      }
      document.head.appendChild(script)
    }

    const initSwiper = () => {
      if (!swiperRef.current) {
        console.warn('Swiper ref not available')
        return
      }

      const Swiper = (window as any).Swiper
      if (!Swiper) {
        console.warn('Swiper not available, retrying...')
        setTimeout(() => {
          if ((window as any).Swiper) {
            initSwiper()
          }
        }, 500)
        return
      }

      // Destroy existing instance if any
      if (swiperInstanceRef.current) {
        try {
          swiperInstanceRef.current.destroy(true, true)
        } catch (e) {
          console.warn('Error destroying Swiper:', e)
        }
      }

      // Initialize Swiper with settings from data-settings
      try {
        swiperInstanceRef.current = new Swiper(swiperRef.current, {
          slidesPerView: 4,
          spaceBetween: 30,
          speed: 500,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          loop: true,
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          },
        })
        console.log('Swiper initialized successfully')
      } catch (error) {
        console.error('Error initializing Swiper:', error)
      }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadSwiper)
    } else {
      setTimeout(loadSwiper, 100)
    }

    return () => {
      if (swiperInstanceRef.current) {
        try {
          swiperInstanceRef.current.destroy(true, true)
        } catch (e) {
          console.warn('Error destroying Swiper on cleanup:', e)
        }
      }
    }
  }, [])

  return (
    <div
      className="elementor-element elementor-element-a7bddc9 elementor-testimonial--align-left elementor-testimonial--skin-default elementor-testimonial--layout-image_inline elementor-widget elementor-widget-testimonial-carousel"
      data-id="a7bddc9"
      data-element_type="widget"
      data-settings='{"slides_per_view":"4","space_between":{"unit":"px","size":30,"sizes":[]},"slides_per_view_tablet":"1","speed":500,"autoplay":"yes","autoplay_speed":5000,"loop":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","space_between_tablet":{"unit":"px","size":10,"sizes":[]},"space_between_mobile":{"unit":"px","size":10,"sizes":[]}}'
      data-widget_type="testimonial-carousel.default"
    >
      <div className="elementor-widget-container">
        <div className="elementor-swiper">
          <div className="elementor-main-swiper swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {/* Testimonial 1 */}
              <div className="swiper-slide">
                <div className="elementor-testimonial">
                  <div className="elementor-testimonial__content">
                    <div className="elementor-testimonial__text">
                      Our experience with Bee Techy was beyond exceptional.
                      They understood our vision, refined it, and translated
                      it into a software solution that has significantly
                      streamlined our operational workflows. The team was
                      professional, highly skilled, and delivered well
                      within the agreed timelines.
                    </div>
                  </div>
                  <div className="elementor-testimonial__footer">
                    <cite className="elementor-testimonial__cite">
                      <span className="elementor-testimonial__name">
                        Melissa Stevens
                      </span>
                      <span className="elementor-testimonial__title">
                        Director of Operations
                      </span>
                    </cite>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="swiper-slide">
                <div className="elementor-testimonial">
                  <div className="elementor-testimonial__content">
                    <div className="elementor-testimonial__text">
                      The technical expertise and innovative approach of
                      Eddy&apos;s team were nothing short of remarkable. They
                      took our rough idea and turned it into a robust,
                      scalable software that is now the backbone of our
                      business. Their ongoing support and advice have been
                      invaluable.
                    </div>
                  </div>
                  <div className="elementor-testimonial__footer">
                    <cite className="elementor-testimonial__cite">
                      <span className="elementor-testimonial__name">
                        Aaron Wallace
                      </span>
                      <span className="elementor-testimonial__title">
                        SBO
                      </span>
                    </cite>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="swiper-slide">
                <div className="elementor-testimonial">
                  <div className="elementor-testimonial__content">
                    <div className="elementor-testimonial__text">
                      We tasked Bee Techy with developing a complex
                      healthcare application within a tight timeframe. Not
                      only did they deliver on time, but the quality of the
                      software exceeded our expectations. The communication
                      was clear and prompt throughout the project, making
                      the entire process smooth and stress-free.
                    </div>
                  </div>
                  <div className="elementor-testimonial__footer">
                    <cite className="elementor-testimonial__cite">
                      <span className="elementor-testimonial__name">
                        Emily Patterson
                      </span>
                      <span className="elementor-testimonial__title">
                        Founder
                      </span>
                    </cite>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="swiper-slide">
                <div className="elementor-testimonial">
                  <div className="elementor-testimonial__content">
                    <div className="elementor-testimonial__text">
                      Their dedicated team was instrumental in transitioning
                      our legacy systems to a modern, cloud-based
                      infrastructure. Their attention to detail, technical
                      acumen, and strong project management ensured a
                      seamless migration with minimal downtime. We couldn&apos;t
                      have asked for a better partner.
                    </div>
                  </div>
                  <div className="elementor-testimonial__footer">
                    <cite className="elementor-testimonial__cite">
                      <span className="elementor-testimonial__name">
                        Jordan Smith
                      </span>
                      <span className="elementor-testimonial__title">
                        Manager
                      </span>
                    </cite>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="swiper-slide">
                <div className="elementor-testimonial">
                  <div className="elementor-testimonial__content">
                    <div className="elementor-testimonial__text">
                      We reached out Eddy and his team for a custom CRM
                      system, and they delivered a solution that has not
                      only improved our customer engagement but has also
                      provided us with valuable insights into our marketing
                      efforts. The project was a huge success and we look
                      forward to collaborating on future endeavors.
                    </div>
                  </div>
                  <div className="elementor-testimonial__footer">
                    <cite className="elementor-testimonial__cite">
                      <span className="elementor-testimonial__name">
                        Natalie Brown
                      </span>
                      <span className="elementor-testimonial__title">
                        Co-founder
                      </span>
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

