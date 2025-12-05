"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CTASection from "@/components/CTASection"

export default function Reviews() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Load Clutch widget script dynamically
    if (typeof window !== "undefined" && !document.querySelector('script[src="https://widget.clutch.co/static/js/widget.js"]')) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "https://widget.clutch.co/static/js/widget.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    // Trigger lazy loading observer
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
                lazyloadBackground.classList.add("e-lazyloaded")
              }
              lazyloadBackgroundObserver.unobserve(entry.target)
            }
          })
        },
        { rootMargin: "200px 0px 200px 0px" }
      )

      lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground)
      })
    }

    // Run immediately and also after a small delay
    lazyloadRunObserver()
    setTimeout(lazyloadRunObserver, 100)

    // Preload all review images
    const imageUrls = Array.from({ length: 20 }, (_, i) => `/images/Review${i + 1}.png`)
    imageUrls.push("/images/upwork-badge.png")

    // Force load images by creating Image objects
    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url
    })

    // Also trigger the elementor/lazyload/observe event
    const event = new Event("elementor/lazyload/observe")
    document.dispatchEvent(event)

    // Force all img tags to reload their src and ensure they're visible
    setTimeout(() => {
      const allImages = document.querySelectorAll(".elementor-709 img, .elementor-2824 img")
      allImages.forEach((img) => {
        const imgElement = img as HTMLImageElement
        if (imgElement.src) {
          // Force reload by temporarily removing and re-adding src
          const originalSrc = imgElement.src
          imgElement.src = ""
          imgElement.src = originalSrc
          // Ensure image is visible
          imgElement.style.display = ""
          imgElement.style.visibility = ""
          imgElement.style.opacity = ""
        }
      })
    }, 50)

    // Also check after a longer delay in case images load slowly
    setTimeout(() => {
      const allImages = document.querySelectorAll(".elementor-709 img, .elementor-2824 img")
      allImages.forEach((img) => {
        const imgElement = img as HTMLImageElement
        if (!imgElement.complete) {
          imgElement.onload = () => {
            imgElement.style.display = ""
            imgElement.style.visibility = ""
            imgElement.style.opacity = ""
          }
        }
      })
    }, 200)
  }, [])

  // Review images data
  const reviewImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Review${i + 1}`,
    image: `/images/Review${i + 1}.png`,
  }))

  return (
    <>
      <Header />
      <div
        data-elementor-type="single-page"
        data-elementor-id="709"
        className="elementor elementor-709 elementor-location-single post-2824 page type-page status-publish hentry"
        data-elementor-post-type="elementor_library"
      >
        {/* Page Title Section */}
        <div
          className="elementor-element elementor-element-724465f e-flex e-con-boxed e-con e-parent"
          data-id="724465f"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-161676e elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
              data-id="161676e"
              data-element_type="widget"
              data-widget_type="theme-post-title.default"
            >
              <div className="elementor-widget-container">
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      /*! elementor - v3.23.0 - 05-08-2024 */
                      .elementor-heading-title {
                        padding: 0;
                        margin: 0;
                        line-height: 1;
                      }
                      .elementor-widget-heading .elementor-heading-title[class*="elementor-size-"] > a {
                        color: inherit;
                        font-size: inherit;
                        line-height: inherit;
                      }
                      .elementor-widget-heading .elementor-heading-title.elementor-size-small {
                        font-size: 15px;
                      }
                      .elementor-widget-heading .elementor-heading-title.elementor-size-medium {
                        font-size: 19px;
                      }
                      .elementor-widget-heading .elementor-heading-title.elementor-size-large {
                        font-size: 29px;
                      }
                      .elementor-widget-heading .elementor-heading-title.elementor-size-xl {
                        font-size: 39px;
                      }
                      .elementor-widget-heading .elementor-heading-title.elementor-size-xxl {
                        font-size: 59px;
                      }
                    `,
                  }}
                />
                <h1 className="elementor-heading-title elementor-size-default">
                  Reviews
                </h1>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-29b444e elementor-widget__width-inherit elementor-absolute elementor-widget elementor-widget-html"
              data-id="29b444e"
              data-element_type="widget"
              data-settings='{"_position":"absolute"}'
              data-widget_type="html.default"
            >
              <div className="elementor-widget-container">
                <div className="bg-shape-1 bg-piece"></div>
                <div className="bg-shape-2 bg-piece"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div
          className="elementor-element elementor-element-1f37777 e-flex e-con-boxed e-con e-parent"
          data-id="1f37777"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <main
              className="elementor-element elementor-element-a455184 e-con-full e-flex e-con e-child"
              data-id="a455184"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-0b58a01 elementor-widget elementor-widget-theme-post-content"
                data-id="0b58a01"
                data-element_type="widget"
                id="post-content"
                data-widget_type="theme-post-content.default"
              >
                <div className="elementor-widget-container">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id="2824"
                    className="elementor elementor-2824"
                    data-elementor-post-type="page"
                  >
                    {/* Image Gallery Section */}
                    <div
                      className="elementor-element elementor-element-f6abbc7 e-flex e-con-boxed e-con e-parent"
                      data-id="f6abbc7"
                      data-element_type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-3dd9843 elementor-widget elementor-widget-image-gallery"
                          data-id="3dd9843"
                          data-element_type="widget"
                          data-widget_type="image-gallery.default"
                        >
                          <div className="elementor-widget-container">
                            <style
                              dangerouslySetInnerHTML={{
                                __html: `
                                  /*! elementor - v3.23.0 - 05-08-2024 */
                                  .elementor-image-gallery .gallery-item {
                                    display: inline-block;
                                    text-align: center;
                                    vertical-align: top;
                                    width: 100%;
                                    max-width: 100%;
                                    margin: 0 auto;
                                  }
                                  .elementor-image-gallery .gallery-item img {
                                    margin: 0 auto;
                                  }
                                  .elementor-image-gallery .gallery-item .gallery-caption {
                                    margin: 0;
                                  }
                                  .elementor-image-gallery figure img {
                                    display: block;
                                  }
                                  .elementor-image-gallery figure figcaption {
                                    width: 100%;
                                  }
                                  .gallery-spacing-custom .elementor-image-gallery .gallery-icon {
                                    padding: 0;
                                  }
                                  @media (min-width: 768px) {
                                    .elementor-image-gallery .gallery-columns-2 .gallery-item {
                                      max-width: 50%;
                                    }
                                    .elementor-image-gallery .gallery-columns-3 .gallery-item {
                                      max-width: 33.33%;
                                    }
                                    .elementor-image-gallery .gallery-columns-4 .gallery-item {
                                      max-width: 25%;
                                    }
                                    .elementor-image-gallery .gallery-columns-5 .gallery-item {
                                      max-width: 20%;
                                    }
                                    .elementor-image-gallery .gallery-columns-6 .gallery-item {
                                      max-width: 16.666%;
                                    }
                                    .elementor-image-gallery .gallery-columns-7 .gallery-item {
                                      max-width: 14.28%;
                                    }
                                    .elementor-image-gallery .gallery-columns-8 .gallery-item {
                                      max-width: 12.5%;
                                    }
                                    .elementor-image-gallery .gallery-columns-9 .gallery-item {
                                      max-width: 11.11%;
                                    }
                                    .elementor-image-gallery .gallery-columns-10 .gallery-item {
                                      max-width: 10%;
                                    }
                                  }
                                  @media (min-width: 480px) and (max-width: 767px) {
                                    .elementor-image-gallery .gallery.gallery-columns-2 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-3 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-4 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-5 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-6 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-7 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-8 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-9 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-10 .gallery-item {
                                      max-width: 50%;
                                    }
                                  }
                                  @media (max-width: 479px) {
                                    .elementor-image-gallery .gallery.gallery-columns-2 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-3 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-4 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-5 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-6 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-7 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-8 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-9 .gallery-item,
                                    .elementor-image-gallery .gallery.gallery-columns-10 .gallery-item {
                                      max-width: 100%;
                                    }
                                  }
                                `,
                              }}
                            />
                            <div className="elementor-image-gallery">
                              <div
                                id="gallery-1"
                                className="gallery galleryid-2824 gallery-columns-2 gallery-size-full"
                              >
                                {reviewImages.map((review, index) => (
                                  <figure key={review.id} className="gallery-item">
                                    <div className="gallery-icon landscape">
                                      <a
                                        data-elementor-open-lightbox="yes"
                                        data-elementor-lightbox-slideshow="3dd9843"
                                        data-elementor-lightbox-title={review.title}
                                        href={review.image}
                                      >
                                        <img
                                          width={1200}
                                          height={628}
                                          src={review.image}
                                          className="attachment-full size-full"
                                          alt=""
                                          decoding="async"
                                          loading={index === 0 ? "eager" : "lazy"}
                                          onLoad={(e) => {
                                            const img = e.target as HTMLImageElement
                                            img.style.display = ""
                                            img.style.visibility = ""
                                            img.style.opacity = ""
                                          }}
                                          onError={(e) => {
                                            const img = e.target as HTMLImageElement
                                            console.error("Image failed to load:", review.image)
                                          }}
                                        />
                                      </a>
                                    </div>
                                  </figure>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Clutch Widget Section - Only render on client to avoid hydration errors */}
                    {isClient && (
                      <div
                        className="elementor-element elementor-element-7d4c6dd e-flex e-con-boxed e-con e-parent"
                        data-id="7d4c6dd"
                        data-element_type="container"
                      >
                        <div className="e-con-inner">
                          <div
                            className="elementor-element elementor-element-78895f4 elementor-widget elementor-widget-html"
                            data-id="78895f4"
                            data-element_type="widget"
                            data-widget_type="html.default"
                          >
                            <div className="elementor-widget-container">
                              <div
                                className="clutch-widget"
                                data-url="https://widget.clutch.co"
                                data-widget-type="4"
                                data-height="auto"
                                data-nofollow="true"
                                data-expandifr="true"
                                data-scale="100"
                                data-reviews="269720,264299,259970,259402,257577"
                                data-clutchcompany-id="1840690"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </main>
            {/* Additional Sections After Main Content */}
            <div
              className="elementor-element elementor-element-9f5a2b2 e-con-full e-flex e-con e-child"
              data-id="9f5a2b2"
              data-element_type="container"
            >
              {/* Upwork Badge Section */}
              <div
                className="elementor-element elementor-element-130624d e-flex e-con-boxed e-con e-child"
                data-id="130624d"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-bef6566 elementor-widget elementor-widget-image"
                    data-id="bef6566"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <style
                        dangerouslySetInnerHTML={{
                          __html: `
                            /*! elementor - v3.23.0 - 05-08-2024 */
                            .elementor-widget-image {
                              text-align: center;
                            }
                            .elementor-widget-image a {
                              display: inline-block;
                            }
                            .elementor-widget-image a img[src$=".svg"] {
                              width: 48px;
                            }
                            .elementor-widget-image img {
                              vertical-align: middle;
                              display: inline-block;
                            }
                          `,
                        }}
                      />
                      <a
                        href="https://www.upwork.com/freelancers/eddymosk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          width={600}
                          height={603}
                          src="/images/upwork-badge.png"
                          className="attachment-large size-large wp-image-4175"
                          alt="Upwork Badge"
                          loading="lazy"
                          decoding="async"
                          onLoad={(e) => {
                            const img = e.target as HTMLImageElement
                            img.style.display = ""
                            img.style.visibility = ""
                            img.style.opacity = ""
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Services Section */}
              <div
                className="elementor-element elementor-element-24472bb e-flex e-con-boxed e-con e-child"
                data-id="24472bb"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-9d1c7f2 elementor-widget elementor-widget-heading"
                    data-id="9d1c7f2"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">
                        All Services
                      </h4>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-19382b4 elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu"
                    data-id="19382b4"
                    data-element_type="widget"
                    data-settings='{"layout":"vertical","submenu_icon":{"value":"<svg class=\"e-font-icon-svg e-fas-caret-down\" viewBox=\"0 0 320 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\"></path></svg>","library":"fa-solid"}}'
                    data-widget_type="nav-menu.default"
                  >
                    <div className="elementor-widget-container">
                      <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-background e--animation-fade">
                        <ul
                          id="menu-1-19382b4"
                          className="elementor-nav-menu sm-vertical"
                        >
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                            <a
                              href="https://3techy.com/artificial-intelligence-development-automation/"
                              className="elementor-item"
                            >
                              Artificial Intelligence Development & Automation
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-972">
                            <a
                              href="https://3techy.com/mobile-app-design-development/"
                              className="elementor-item"
                            >
                              Mobile App Design & Development
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-973">
                            <a
                              href="https://3techy.com/saas-design-development/"
                              className="elementor-item"
                            >
                              SaaS Design & Development
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-974">
                            <a
                              href="https://3techy.com/shopify-web-design-development/"
                              className="elementor-item"
                            >
                              Shopify Web Design & Development
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-975">
                            <a
                              href="https://3techy.com/ux-ui-design/"
                              className="elementor-item"
                            >
                              UX/UI Design
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1400">
                            <a
                              href="https://3techy.com/blockchain-web3-development/"
                              className="elementor-item"
                            >
                              Blockchain & Web3 Development
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1401">
                            <a
                              href="https://3techy.com/ios-application-development-design/"
                              className="elementor-item"
                            >
                              iOS Application Development & Design
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1402">
                            <a
                              href="https://3techy.com/android-application-development-design/"
                              className="elementor-item"
                            >
                              Android Application Development & Design
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1403">
                            <a
                              href="https://3techy.com/web-application-development/"
                              className="elementor-item"
                            >
                              Web Application Development
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1404">
                            <a
                              href="https://3techy.com/progressive-web-app-pwa-development/"
                              className="elementor-item"
                            >
                              Progressive Web App (PWA) Development
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1407">
                            <a
                              href="https://3techy.com/hubspot-web-design-development/"
                              className="elementor-item"
                            >
                              Hubspot Web Design & Development
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ready to Get Started Section */}
              <div
                className="elementor-element elementor-element-2c31914 e-flex e-con-boxed e-con e-child"
                data-id="2c31914"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-5d85fcb elementor-widget elementor-widget-heading"
                    data-id="5d85fcb"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">
                        Ready to get started?
                      </h4>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-9ce67b4 elementor-widget elementor-widget-text-editor"
                    data-id="9ce67b4"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <style
                        dangerouslySetInnerHTML={{
                          __html: `
                            /*! elementor - v3.23.0 - 05-08-2024 */
                            .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {
                              background-color: #69727d;
                              color: #fff;
                            }
                            .elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {
                              color: #69727d;
                              border: 3px solid;
                              background-color: transparent;
                            }
                            .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {
                              margin-top: 8px;
                            }
                            .elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {
                              width: 1em;
                              height: 1em;
                            }
                            .elementor-widget-text-editor .elementor-drop-cap {
                              float: left;
                              text-align: center;
                              line-height: 1;
                              font-size: 50px;
                            }
                            .elementor-widget-text-editor .elementor-drop-cap-letter {
                              display: inline-block;
                            }
                          `,
                        }}
                      />
                      <div className="text">
                        Ready to discuss your idea or initiate the process? Feel
                        free to email us, contact us, or call us, whichever you
                        prefer.
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-5412a71 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                    data-id="5412a71"
                    data-element_type="widget"
                    data-widget_type="icon-box.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <a
                            href="tel:03034498760"
                            className="elementor-icon elementor-animation-"
                          >
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-phone-alt"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                            </svg>
                          </a>
                        </div>
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <a href="tel:03034498760"> 03034498760 </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-b23955f elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box"
                    data-id="b23955f"
                    data-element_type="widget"
                    data-widget_type="icon-box.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <a
                            href="mailto:contact@3techy.com"
                            className="elementor-icon elementor-animation-"
                          >
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-far-envelope"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                            </svg>
                          </a>
                        </div>
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <a href="mailto:contact@3techy.com">
                              contact@3techy.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section Before Footer */}
      <CTASection isExternal={true} buttonUrl="https://3techy.com/get-quote/" />
      <Footer />
    </>
  )
}

