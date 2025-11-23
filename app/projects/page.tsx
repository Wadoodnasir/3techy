"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/projects";

export default function Projects() {
  // Force images to load on client-side navigation
  useEffect(() => {
    // Trigger lazy loading observer for this page
    const lazyloadRunObserver = () => {
      const lazyloadBackgrounds = document.querySelectorAll(
        `.e-con.e-parent:not(.e-lazyloaded):not(.e-no-lazyload)`
      );

      if (lazyloadBackgrounds.length === 0) return;

      const lazyloadBackgroundObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const lazyloadBackground = entry.target as HTMLElement;
              if (lazyloadBackground) {
                lazyloadBackground.classList.add("e-lazyloaded");
              }
              lazyloadBackgroundObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "200px 0px 200px 0px" }
      );

      lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
      });
    };

    // Run immediately and also after a small delay to ensure DOM is ready
    lazyloadRunObserver();
    setTimeout(lazyloadRunObserver, 100);

    // Force all images to load
    const allImages = document.querySelectorAll(".elementor-1234 img");
    allImages.forEach((img) => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.src) {
        const originalSrc = imgElement.src;
        // Preload the image
        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = originalSrc;
        document.head.appendChild(preloadLink);

        // Force reload
        imgElement.src = "";
        imgElement.src = originalSrc;
        imgElement.style.display = "";
        imgElement.style.visibility = "";
        imgElement.style.opacity = "";
      }
    });

    // Also trigger the elementor/lazyload/observe event
    const event = new Event("elementor/lazyload/observe");
    document.dispatchEvent(event);
  }, []);

  return (
    <>
      <Header />
      <div
        data-elementor-type="archive"
        data-elementor-id="1234"
        className="elementor elementor-1234 elementor-location-archive"
        data-elementor-post-type="elementor_library"
      >
        {/* Page Title Section */}
        <div
          className="elementor-element elementor-element-2719e2a e-flex e-con-boxed e-con e-parent"
          data-id="2719e2a"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-7faa5d5 elementor-widget elementor-widget-heading"
              data-id="7faa5d5"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Portfolio
                </h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-145313e elementor-widget__width-inherit elementor-absolute elementor-widget elementor-widget-html"
              data-id="145313e"
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

        {/* Projects Grid Section */}
        <div
          className="elementor-element elementor-element-70a0bc6 e-flex e-con-boxed e-con e-parent"
          data-id="70a0bc6"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-9d5a6e5 e-flex e-con-boxed e-con e-child"
              data-id="9d5a6e5"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-7ed3619 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-loop-grid"
                  data-id="7ed3619"
                  data-element_type="widget"
                  data-settings='{"template_id":1237,"pagination_type":"load_more_infinite_scroll","columns":3,"row_gap":{"unit":"px","size":30,"sizes":[]},"_skin":"post","columns_tablet":"2","columns_mobile":"1","edit_handle_selector":"[data-elementor-type=\"loop-item\"]","load_more_spinner":{"value":"fas fa-spinner","library":"fa-solid"},"row_gap_tablet":{"unit":"px","size":"","sizes":[]},"row_gap_mobile":{"unit":"px","size":"","sizes":[]}}'
                  data-widget_type="loop-grid.post"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="elementor-loop-container elementor-grid"
                      style={{ gridAutoRows: "1fr" }}
                    >
                      <style
                        id="loop-1237"
                        dangerouslySetInnerHTML={{
                          __html: `.elementor-1237 {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-ef9ae63 {
                        --display: flex;
                        --align-items: center;
                        --container-widget-width: calc(
                          (1 - var(--container-widget-flex-grow)) * 100%
                        );
                        --background-transition: 0.3s;
                        --padding-top: 0px;
                        --padding-bottom: 0px;
                        --padding-left: 0px;
                        --padding-right: 0px;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-ef9ae63
                        .e-con-inner {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-e059af9 {
                        flex-shrink: 0;
                        width: 100%;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-e059af9
                        img {
                        height: 250px;
                        width: 100%;
                        object-fit: cover;
                        object-position: center center;
                        display: block;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-0c0b797 {
                        --display: flex;
                        --gap: 0px 0px;
                        --background-transition: 0.3s;
                        --border-radius: 8px 8px 8px 8px;
                        --padding-top: 20px;
                        --padding-bottom: 20px;
                        --padding-left: 30px;
                        --padding-right: 30px;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        min-height: 0;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-0c0b797:not(
                          .elementor-motion-effects-element-type-background
                        ),
                      .elementor-1237
                        .elementor-element.elementor-element-0c0b797
                        > .elementor-motion-effects-container
                        > .elementor-motion-effects-layer {
                        background-color: var(--e-global-color-44ee991);
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-0c0b797,
                      .elementor-1237
                        .elementor-element.elementor-element-0c0b797::before {
                        --border-transition: 0.3s;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-0c0b797.e-con {
                        --flex-grow: 0;
                        --flex-shrink: 0;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-3d40f19
                        .elementor-icon-list-icon {
                        width: 14px;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-3d40f19
                        .elementor-icon-list-icon
                        i {
                        font-size: 14px;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-3d40f19
                        .elementor-icon-list-icon
                        svg {
                        --e-icon-list-icon-size: 14px;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-3d40f19
                        .elementor-icon-list-text,
                      .elementor-1237
                        .elementor-element.elementor-element-3d40f19
                        .elementor-icon-list-text
                        a {
                        color: var(--e-global-color-primary);
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-3d40f19
                        .elementor-icon-list-item {
                        font-family: var(
                            --e-global-typography-8a609d9-font-family
                          ),
                          Sans-serif;
                        font-size: var(--e-global-typography-8a609d9-font-size);
                        font-weight: var(
                          --e-global-typography-8a609d9-font-weight
                        );
                        line-height: var(
                          --e-global-typography-8a609d9-line-height
                        );
                        letter-spacing: var(
                          --e-global-typography-8a609d9-letter-spacing
                        );
                        word-spacing: var(
                          --e-global-typography-8a609d9-word-spacing
                        );
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-60158ca
                        .elementor-heading-title {
                        font-family: var(
                            --e-global-typography-e5f7704-font-family
                          ),
                          Sans-serif;
                        font-size: var(--e-global-typography-e5f7704-font-size);
                        font-weight: var(
                          --e-global-typography-e5f7704-font-weight
                        );
                        line-height: var(
                          --e-global-typography-e5f7704-line-height
                        );
                        letter-spacing: var(
                          --e-global-typography-e5f7704-letter-spacing
                        );
                        word-spacing: var(
                          --e-global-typography-e5f7704-word-spacing
                        );
                      }
                      @media (max-width: 1024px) {
                        .elementor-1237
                          .elementor-element.elementor-element-3d40f19
                          .elementor-icon-list-item {
                          font-size: var(
                            --e-global-typography-8a609d9-font-size
                          );
                          line-height: var(
                            --e-global-typography-8a609d9-line-height
                          );
                          letter-spacing: var(
                            --e-global-typography-8a609d9-letter-spacing
                          );
                          word-spacing: var(
                            --e-global-typography-8a609d9-word-spacing
                          );
                        }
                        .elementor-1237
                          .elementor-element.elementor-element-60158ca
                          .elementor-heading-title {
                          font-size: var(
                            --e-global-typography-e5f7704-font-size
                          );
                          line-height: var(
                            --e-global-typography-e5f7704-line-height
                          );
                          letter-spacing: var(
                            --e-global-typography-e5f7704-letter-spacing
                          );
                          word-spacing: var(
                            --e-global-typography-e5f7704-word-spacing
                          );
                        }
                      }
                      @media (min-width: 768px) {
                        .elementor-1237
                          .elementor-element.elementor-element-0c0b797 {
                          --width: calc(100% - 40px);
                        }
                      }
                      @media (max-width: 767px) {
                        .elementor-1237
                          .elementor-element.elementor-element-0c0b797 {
                          --width: 90%;
                        }
                        .elementor-1237
                          .elementor-element.elementor-element-3d40f19
                          .elementor-icon-list-item {
                          font-size: var(
                            --e-global-typography-8a609d9-font-size
                          );
                          line-height: var(
                            --e-global-typography-8a609d9-line-height
                          );
                          letter-spacing: var(
                            --e-global-typography-8a609d9-letter-spacing
                          );
                          word-spacing: var(
                            --e-global-typography-8a609d9-word-spacing
                          );
                        }
                        .elementor-1237
                          .elementor-element.elementor-element-60158ca
                          .elementor-heading-title {
                          font-size: var(
                            --e-global-typography-e5f7704-font-size
                          );
                          line-height: var(
                            --e-global-typography-e5f7704-line-height
                          );
                          letter-spacing: var(
                            --e-global-typography-e5f7704-letter-spacing
                          );
                          word-spacing: var(
                            --e-global-typography-e5f7704-word-spacing
                          );
                        }
                      } /* Start custom CSS for container, class: .elementor-element-ef9ae63 */
                      .elementor-1237
                        .elementor-element.elementor-element-ef9ae63 {
                        overflow: hidden;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-ef9ae63
                        .project-info {
                        opacity: 0;
                        transform: translateY(130px);
                        transition: opacity 400ms, transform 1s, bottom 1s;
                        position: absolute;
                        bottom: -130px;
                      }
                      .elementor-1237
                        .elementor-element.elementor-element-ef9ae63:hover
                        .project-info {
                        opacity: 1;
                        bottom: 20px;
                        transform: translateY(0px);
                      } /* End custom CSS */`,
                        }}
                      />
                      {projects.map((project, index) => (
                        <div
                          key={project.id}
                          data-elementor-type="loop-item"
                          data-elementor-id="1237"
                          className={project.classes}
                          data-elementor-post-type="elementor_library"
                          data-custom-edit-handle="1"
                        >
                          <Link
                            className="elementor-element elementor-element-ef9ae63 project-container e-flex e-con-boxed e-con e-parent"
                            data-id="ef9ae63"
                            data-element_type="container"
                            href={project.link}
                          >
                            <div className="e-con-inner">
                              <div
                                className="elementor-element elementor-element-e059af9 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
                                data-id="e059af9"
                                data-element_type="widget"
                                data-widget_type="theme-post-featured-image.default"
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    width={768}
                                    height={576}
                                    src={project.image}
                                    className="attachment-medium_large size-medium_large"
                                    alt={project.title}
                                    sizes="(max-width: 768px) 100vw, 768px"
                                    loading={index === 0 ? "eager" : "lazy"}
                                    decoding="async"
                                    onLoad={(e) => {
                                      const img = e.target as HTMLImageElement;
                                      img.style.display = "";
                                      img.style.visibility = "";
                                      img.style.opacity = "";
                                    }}
                                    onError={(e) => {
                                      const img = e.target as HTMLImageElement;
                                      console.error(
                                        "Image failed to load:",
                                        project.image
                                      );
                                      // Fallback to a placeholder if image fails
                                      if (!img.src.includes("placeholder")) {
                                        img.src =
                                          "/images/governance-placeholder.svg";
                                      }
                                    }}
                                  />
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-0c0b797 e-con-full project-info e-flex e-con e-child"
                                data-id="0c0b797"
                                data-element_type="container"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div
                                  className="elementor-element elementor-element-3d40f19 elementor-widget elementor-widget-post-info"
                                  data-id="3d40f19"
                                  data-element_type="widget"
                                  data-widget_type="post-info.default"
                                >
                                  <div className="elementor-widget-container">
                                    <ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
                                      <li
                                        className="elementor-icon-list-item elementor-repeater-item-f0ee353 elementor-inline-item"
                                        itemProp="about"
                                      >
                                        <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-terms">
                                          <span className="elementor-post-info__terms-list">
                                            {project.categories.map(
                                              (cat, i, arr) => (
                                                <span key={i}>
                                                  <span className="elementor-post-info__terms-list-item">
                                                    {cat}
                                                  </span>
                                                  {i < arr.length - 1 && ", "}
                                                </span>
                                              )
                                            )}
                                          </span>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-60158ca elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                                  data-id="60158ca"
                                  data-element_type="widget"
                                  data-widget_type="theme-post-title.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h3 className="elementor-heading-title elementor-size-default">
                                      {project.title}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                      <span className="e-load-more-spinner">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-spinner"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
                        </svg>
                      </span>
                      <div
                        className="e-load-more-anchor"
                        data-page="1"
                        data-max-page="4"
                        data-next-page="https://xyz.com/projects/page/2/"
                      ></div>
                      <div className="e-load-more-message"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section Before Footer */}
      <CTASection isExternal={true} buttonUrl="https://xyz.com/get-quote/" />
      <Footer />
    </>
  );
}
