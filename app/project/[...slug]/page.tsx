"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/projects";
import { getProjectBySlug } from "@/lib/projectDetails";

interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const slug = params.slug.join("/");
  const project = getProjectBySlug(slug, projects);

  useEffect(() => {
    // Trigger lazy loading observer
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

    lazyloadRunObserver();
    setTimeout(lazyloadRunObserver, 100);

    // Trigger the elementor/lazyload/observe event
    const event = new Event("elementor/lazyload/observe");
    document.dispatchEvent(event);

    // Handle sticky right sidebar - make it scroll with page only after last image is completely scrolled
    const imagesSection = document.querySelector(".project-images-section");
    const summarySection = document.querySelector(".project-summary-section") as HTMLElement;
    const galleryItems = document.querySelectorAll(".gallery-item");

    if (imagesSection && summarySection && galleryItems.length > 0) {
      const lastImage = galleryItems[galleryItems.length - 1] as HTMLElement;
      
      const handleScroll = () => {
        if (!lastImage || !imagesSection) return;

        const imagesSectionRect = imagesSection.getBoundingClientRect();
        const lastImageRect = lastImage.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;

        // Check if the entire images section (including last image) has been scrolled past
        // The last image is considered "completely scrolled" when its bottom is above the viewport top
        const isLastImageCompletelyScrolled = lastImageRect.bottom < 0;
        const isImagesSectionCompletelyScrolled = imagesSectionRect.bottom < 0;

        if (isLastImageCompletelyScrolled || isImagesSectionCompletelyScrolled) {
          // Last image completely scrolled, allow right sidebar to scroll with page
          summarySection.style.position = "relative";
          summarySection.style.top = "0";
          summarySection.style.maxHeight = "none";
          summarySection.style.overflowY = "visible";
          summarySection.classList.add("scrollable");
        } else {
          // Images still in view, keep sidebar sticky and non-scrollable
          summarySection.style.position = "sticky";
          summarySection.style.top = "100px";
          summarySection.style.maxHeight = "calc(100vh - 120px)";
          summarySection.style.overflowY = "auto";
          summarySection.classList.remove("scrollable");
        }
      };

      // Use requestAnimationFrame for smoother scroll handling
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      handleScroll(); // Initial check

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [project]);

  if (!project) {
    return (
      <>
        <Header />
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
          <h1>Project Not Found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects">Back to Portfolio</Link>
        </div>
        <Footer />
      </>
    );
  }

  // Get gallery images - use all gallery images if available, otherwise use the main image
  const galleryImages = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [{ url: project.image, thumbnail: project.image, title: project.title, width: 1200, height: 628 }];

  return (
    <>
      <Header />
      <div
        data-elementor-type="single-page"
        data-elementor-id="709"
        className={`elementor elementor-709 elementor-location-single post-${project.id} project type-project status-publish has-post-thumbnail hentry ${project.classes}`}
        data-elementor-post-type="elementor_library"
      >
        {/* Main Page Title Section */}
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
                  {project.title}
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

        {/* Main Content Section - Two Column: Images Left, Summary Right */}
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
                    data-elementor-type="wp-post"
                    data-elementor-id={project.id}
                    className={`elementor elementor-${project.id}`}
                    data-elementor-post-type="project"
                  >
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `
                          .project-detail-layout {
                            display: grid;
                            grid-template-columns: 70% 30%;
                            gap: 40px;
                            align-items: start;
                            width: 100%;
                            max-width: 1400px;
                            margin: 0 auto;
                            padding: 0 60px;
                          }
                          @media (max-width: 1200px) {
                            .project-detail-layout {
                              padding: 0 40px;
                            }
                          }
                          .elementor-element.elementor-element-1f37777 {
                            --padding-left: 0px !important;
                            --padding-right: 0px !important;
                            padding-left: 0 !important;
                            padding-right: 0 !important;
                          }
                          .elementor-element.elementor-element-1f37777 .e-con-inner {
                            padding-left: 0 !important;
                            padding-right: 0 !important;
                            max-width: 100% !important;
                            width: 100% !important;
                          }
                          .elementor-element.elementor-element-a455184 {
                            width: 100% !important;
                            max-width: 100% !important;
                            padding-left: 0 !important;
                            padding-right: 0 !important;
                          }
                          @media (max-width: 1024px) {
                            .project-detail-layout {
                              grid-template-columns: 1fr;
                              gap: 30px;
                              padding: 0 20px;
                            }
                          }
                          .project-images-section {
                            display: flex;
                            flex-direction: column;
                            gap: 20px;
                            position: relative;
                            font-family: Rubik, sans-serif;
                            font-size: 15px;
                            color: #7A7A7A;
                            width: 100%;
                            max-width: 100%;
                          }
                          .project-images-section p {
                            font-family: Rubik, sans-serif;
                            font-size: 15px;
                            color: #7A7A7A;
                            margin: 0px 0px 14.4px;
                            line-height: 1.6;
                          }
                          .project-images-section h1,
                          .project-images-section h2,
                          .project-images-section h3,
                          .project-images-section h4,
                          .project-images-section h5,
                          .project-images-section h6 {
                            font-family: Rubik, sans-serif;
                            color: #7A7A7A;
                          }
                          .project-summary-section {
                            padding: 0;
                            position: sticky;
                            top: 100px;
                            max-height: calc(100vh - 120px);
                            overflow-y: auto;
                            align-self: start;
                            transition: all 0.3s ease;
                            scrollbar-width: none; /* Firefox */
                            -ms-overflow-style: none; /* IE and Edge */
                            font-family: Rubik, sans-serif;
                            font-size: 15px;
                            color: #7A7A7A;
                            width: 100%;
                            max-width: 100%;
                          }
                          .project-summary-section p {
                            font-family: Rubik, sans-serif;
                            font-size: 15px;
                            color: #7A7A7A;
                            margin: 0px 0px 14.4px;
                            line-height: 1.6;
                          }
                          .project-summary-section h2,
                          .project-summary-section h3,
                          .project-summary-section h4,
                          .project-summary-section h5,
                          .project-summary-section h6 {
                            font-family: Rubik, sans-serif;
                            color: #7A7A7A;
                          }
                          .project-summary-section::-webkit-scrollbar {
                            display: none; /* Chrome, Safari, Opera */
                            width: 0;
                            height: 0;
                            background: transparent;
                          }
                          .project-summary-section.scrollable {
                            position: relative;
                            top: 0;
                            max-height: none;
                            overflow-y: visible;
                          }
                          @media (max-width: 1024px) {
                            .project-summary-section {
                              position: relative;
                              top: 0;
                              max-height: none;
                              overflow-y: visible;
                            }
                          }
                          .elementor-image-gallery {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 20px;
                          }
                          .gallery-item {
                            position: relative;
                            overflow: hidden;
                            border-radius: 8px;
                          }
                          .gallery-item img {
                            width: 100%;
                            height: auto;
                            display: block;
                            transition: transform 0.3s ease;
                            max-width: 100%;
                          }
                          .gallery-icon img {
                            width: 100%;
                            height: auto;
                            max-width: 100%;
                          }
                          .gallery-item:hover img {
                            transform: scale(1.05);
                          }
                          .gallery-icon {
                            position: relative;
                          }
                          .e-n-accordion-item summary {
                            background-color: #FFAA16;
                            color: #ffffff;
                            padding: 15px 20px;
                            border-radius: 8px;
                            cursor: pointer;
                            font-weight: 600;
                            font-size: 15px;
                            font-family: Rubik, sans-serif;
                            margin-bottom: 10px;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            list-style: none;
                            transition: background-color 0.3s ease;
                            border: none;
                            gap: 15px;
                          }
                          .e-n-accordion-item summary:hover {
                            background-color: #ff9900;
                          }
                          .e-n-accordion-item summary::-webkit-details-marker {
                            display: none;
                          }
                          .e-n-accordion-item[open] summary {
                            background-color: #FFAA16;
                            border: none;
                          }
                          .e-n-accordion-item-title-header {
                            display: flex;
                            align-items: center;
                            flex: 1;
                            order: 1;
                            justify-content: flex-start;
                          }
                          .e-n-accordion-item-title-text {
                            color: #ffffff;
                            font-weight: 600;
                            text-align: left;
                          }
                          .e-n-accordion-item-title-icon {
                            display: flex;
                            align-items: center;
                            gap: 5px;
                            flex-shrink: 0;
                            order: 2;
                            margin-left: auto;
                          }
                          .e-n-accordion-item-title-icon svg {
                            width: 16px;
                            height: 16px;
                            fill: #ffffff;
                          }
                          .e-n-accordion-item[open] .e-closed {
                            display: none;
                          }
                          .e-n-accordion-item:not([open]) .e-opened {
                            display: none;
                          }
                          .e-n-accordion-item[open] > div[role="region"] {
                            border-left: 4px solid #FFAA16;
                            border-top: none;
                            border-right: none;
                            border-bottom: none;
                            border-radius: 0;
                            padding: 20px 20px 20px 24px;
                            background-color: transparent;
                            margin-bottom: 10px;
                          }
                          .e-n-accordion-item[open] > div[role="region"] .elementor-widget-container {
                            color: #7A7A7A;
                            font-size: 15px;
                            font-family: Rubik, sans-serif;
                          }
                          .e-n-accordion-item[open] > div[role="region"] .elementor-widget-container p {
                            color: #7A7A7A;
                            font-size: 15px;
                            font-family: Rubik, sans-serif;
                            line-height: 1.6;
                            margin: 0px 0px 14.4px;
                          }
                          .e-n-accordion-item[open] > div[role="region"] .elementor-widget-container b,
                          .e-n-accordion-item[open] > div[role="region"] .elementor-widget-container strong {
                            color: #7A7A7A;
                            font-weight: 600;
                          }
                        `,
                      }}
                    />
                    <div className="project-detail-layout">
                      {/* Left Side - Images Gallery */}
                      <div className="project-images-section">
                        <div
                          className="elementor-element elementor-element-3dd9843 elementor-widget elementor-widget-image-gallery"
                          data-id="3dd9843"
                          data-element_type="widget"
                          data-widget_type="image-gallery.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image-gallery">
                              <div
                                id="gallery-1"
                                className="gallery galleryid-project gallery-columns-1 gallery-size-full"
                              >
                                {galleryImages.map((img, index) => (
                                  <figure key={index} className="gallery-item">
                                    <div className="gallery-icon landscape">
                                      <a
                                        data-elementor-open-lightbox="yes"
                                        data-elementor-lightbox-slideshow="3dd9843"
                                        data-elementor-lightbox-title={img.title}
                                        href={img.url}
                                      >
                                        <img
                                          width={1200}
                                          height={628}
                                          src={img.thumbnail || img.url}
                                          className="attachment-full size-full"
                                          alt={img.title || project.title}
                                          decoding="async"
                                          loading={index === 0 ? "eager" : "lazy"}
                                          onLoad={(e) => {
                                            const imgElement = e.target as HTMLImageElement;
                                            imgElement.style.display = "";
                                            imgElement.style.visibility = "";
                                            imgElement.style.opacity = "";
                                          }}
                                          onError={(e) => {
                                            const imgElement = e.target as HTMLImageElement;
                                            console.error("Image failed to load:", img.url);
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

                      {/* Right Side - Summary & Details */}
                      <div className="project-summary-section" style={{ marginTop: "0", paddingTop: "0" }}>
                        {/* Summary Section */}
                        {project.summary && (
                          <div style={{ marginTop: "0", marginBottom: "10px" }}>
                            <h6 style={{ color: "#7A7A7A", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "15px" }}>
                              Summary:
                            </h6>
                            <style
                              dangerouslySetInnerHTML={{
                                __html: `
                                  .project-summary-content {
                                    color: #7A7A7A;
                                    font-size: 15px;
                                    line-height: 1.6;
                                  }
                                  .project-summary-content b,
                                  .project-summary-content strong,
                                  .project-summary-content code {
                                    color: #FFAA16;
                                    font-weight: 600;
                                  }
                                `,
                              }}
                            />
                            <div
                              className="project-summary-content"
                              dangerouslySetInnerHTML={{ __html: project.summary }}
                            />
                          </div>
                        )}

                        {/* Project Details */}
                        <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "5px", marginTop: "0" }}>
                          {project.client && (
                            <div style={{ marginTop: "0", marginBottom: "20px" }}>
                              <h3 style={{ color: "#7A7A7A", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "8px" }}>
                                Client:
                              </h3>
                              <p style={{ color: "#7A7A7A", fontSize: "15px", margin: 0 }}>{project.client}</p>
                            </div>
                          )}

                          {project.projectUrl && (
                            <div style={{ marginTop: "0", marginBottom: "20px" }}>
                              <h3 style={{ color: "#7A7A7A", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "8px" }}>
                                Project URL:
                              </h3>
                              <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#7A7A7A", fontSize: "15px", textDecoration: "none" }}
                              >
                                {project.projectUrl}
                              </a>
                            </div>
                          )}

                          <div style={{ marginTop: "0", marginBottom: "20px" }}>
                            <h3 style={{ color: "#7A7A7A", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "8px" }}>
                              Category:
                            </h3>
                            <p style={{ color: "#7A7A7A", fontSize: "15px", margin: 0 }}>
                              {project.categories.join(", ")}
                            </p>
                          </div>

                          {project.tags && project.tags.length > 0 && (
                            <div style={{ marginTop: "0", marginBottom: "20px" }}>
                              <h3 style={{ color: "#7A7A7A", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "8px" }}>
                                Tags:
                              </h3>
                              <p style={{ color: "#7A7A7A", fontSize: "15px", margin: 0 }}>
                                {project.tags.join(", ")}
                              </p>
                            </div>
                          )}

                          {project.date && (
                            <div style={{ marginTop: "0", marginBottom: "20px" }}>
                              <h3 style={{ color: "#7A7A7A", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "8px" }}>
                                Date:
                              </h3>
                              <p style={{ color: "#7A7A7A", fontSize: "15px", margin: 0 }}>{project.date}</p>
                            </div>
                          )}
                        </div>

                        {/* Accordion Section */}
                        {project.accordionItems && project.accordionItems.length > 0 && (
                          <div style={{ marginTop: "30px", borderTop: "1px solid #e5e7eb", paddingTop: "30px" }}>
                            <div
                              className="elementor-element elementor-element-354c12e elementor-widget elementor-widget-n-accordion"
                              data-id="354c12e"
                              data-element_type="widget"
                              data-settings='{"default_state":"all_collapsed","max_items_expended":"one","n_accordion_animation_duration":{"unit":"ms","size":400,"sizes":[]}}'
                              data-widget_type="nested-accordion.default"
                            >
                              <div className="elementor-widget-container">
                                <div
                                  className="e-n-accordion"
                                  aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys"
                                >
                                  {project.accordionItems.map((item, index) => (
                                    <details
                                      key={index}
                                      id={`e-n-accordion-item-${5580 + index}`}
                                      className="e-n-accordion-item"
                                    >
                                      <summary
                                        className="e-n-accordion-item-title"
                                        data-accordion-index={index + 1}
                                        tabIndex={0}
                                        aria-expanded="false"
                                        aria-controls={`e-n-accordion-item-${5580 + index}`}
                                      >
                                        <span className="e-n-accordion-item-title-header">
                                          <div className="e-n-accordion-item-title-text" style={{ color: "#ffffff" }}>
                                            {item.title}
                                          </div>
                                        </span>
                                        <span className="e-n-accordion-item-title-icon">
                                          <span className="e-opened">
                                            <svg
                                              aria-hidden="true"
                                              className="e-font-icon-svg e-fas-minus"
                                              viewBox="0 0 448 512"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                          </span>
                                          <span className="e-closed">
                                            <svg
                                              aria-hidden="true"
                                              className="e-font-icon-svg e-fas-plus"
                                              viewBox="0 0 448 512"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                          </span>
                                        </span>
                                      </summary>
                                      <div
                                        role="region"
                                        aria-labelledby={`e-n-accordion-item-${5580 + index}`}
                                        className="elementor-element elementor-element-b8f205f e-con-full e-flex e-con e-child"
                                        data-id="b8f205f"
                                        data-element_type="container"
                                        data-settings='{"background_background":"classic"}'
                                      >
                                        <div
                                          className="elementor-element elementor-element-dabc26a elementor-widget elementor-widget-text-editor"
                                          data-id="dabc26a"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div
                                            className="elementor-widget-container"
                                            dangerouslySetInnerHTML={{ __html: item.content }}
                                          />
                                        </div>
                                      </div>
                                    </details>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* CTA Section Before Footer */}
      <CTASection buttonUrl="/get-quote" />
      <Footer />
    </>
  );
}
