"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function About() {
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

    // Force all images to load by creating Image objects
    const imageUrls = [
      "/images/microsoft-logo-black-and-white-1-1024x219.png",
      "/images/hubspot-logo-black-and-white-1024x298.png",
      "/images/Wordmark_DarkBlue-modified-modified-1024x228.png",
      "/images/Amazon-logo-white.svg-1024x216.png",
      "/images/google-white-logo-1024x337.png",
      "/images/shopify.svg",
      "/images/image.webp",
      "/images/image-2.webp",
      "/images/Screen-Shot-2021-03-16-at-6.29.10-PM-794x1024.png",
      "/images/TSJLCB1J5-U06LTQFAED6-784701590903-512.png",
      "/images/TSJLCB1J5-U05RPVD8HTJ-eef6dbc755d6-512.png",
    ];

    // Force load images by creating Image objects
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });

    // Also trigger the elementor/lazyload/observe event
    const event = new Event("elementor/lazyload/observe");
    document.dispatchEvent(event);

    // Force all img tags to reload their src and ensure they're visible
    setTimeout(() => {
      const allImages = document.querySelectorAll(".elementor-997 img");
      allImages.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        if (imgElement.src) {
          // Force reload by temporarily removing and re-adding src
          const originalSrc = imgElement.src;
          imgElement.src = "";
          imgElement.src = originalSrc;
          // Ensure image is visible
          imgElement.style.display = "";
          imgElement.style.visibility = "";
          imgElement.style.opacity = "";
        }
      });
    }, 50);

    // Also check after a longer delay in case images load slowly
    setTimeout(() => {
      const allImages = document.querySelectorAll(".elementor-997 img");
      allImages.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        if (!imgElement.complete) {
          imgElement.onload = () => {
            imgElement.style.display = "";
            imgElement.style.visibility = "";
            imgElement.style.opacity = "";
          };
        }
      });
    }, 200);
  }, []);

  return (
    <>
      <Header />
      <div
        data-elementor-type="wp-page"
        data-elementor-id="997"
        className="elementor elementor-997"
        data-elementor-post-type="page"
        id="content"
      >
        {/* Page Title Section */}
        <div
          className="elementor-element elementor-element-b0220cb e-flex e-con-boxed e-con e-parent"
          data-id="b0220cb"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-67a042d elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
              data-id="67a042d"
              data-element_type="widget"
              data-widget_type="theme-post-title.default"
            >
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default">
                  About
                </h1>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-fa7bf45 elementor-widget__width-inherit elementor-absolute elementor-widget elementor-widget-html"
              data-id="fa7bf45"
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

        {/* Journeying Together Section */}
        <div
          className="elementor-element elementor-element-a4ec997 e-flex e-con-boxed e-con e-parent"
          data-id="a4ec997"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-ffe8fee e-grid e-con-boxed e-con e-child"
              data-id="ffe8fee"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-e31f178 elementor-widget elementor-widget-heading"
                  data-id="e31f178"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2
                      className="elementor-heading-title elementor-size-default"
                      style={{
                        fontFamily: '"Teko", Sans-serif',
                        fontSize: "4.5rem",
                        fontWeight: 400,
                        textTransform: "uppercase",
                        lineHeight: "1em",
                      }}
                      data-responsive-heading="true"
                    >
                      JOURNEYING TOGETHER SINCE<br></br>
                      <span className="color--global">2020.</span>
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-9010149 elementor-widget elementor-widget-text-editor"
                  data-id="9010149"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      3Techy began as a dream shared by a group of tech
                      enthusiasts. Over the years, we&apos;ve grown from a small
                      team to a leading Lahore based custom software
                      development and web and UI/UX design agency. Our journey
                      has been fueled by passion, innovation, and the undying
                      commitment to creating digital solutions that resonate.
                    </p>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d173272 elementor-widget elementor-widget-text-editor"
                  data-id="d173272"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      Our strength lies in our diverse and talented team. From
                      seasoned software developers to creative web designers,
                      each member brings a unique perspective and skill set to
                      the table.                       Together, our custom software development team
                      in Lahore collaborate, innovate, and create digital
                      masterpieces that stand out in a crowded digital
                      landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crafting Digital Excellence Section */}
        <div
          className="elementor-element elementor-element-5adef78 e-flex e-con-boxed e-con e-parent"
          data-id="5adef78"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-8acb99f e-con-full e-flex e-con e-child"
              data-id="8acb99f"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-5fc5a0f elementor-widget elementor-widget-spacer"
                data-id="5fc5a0f"
                data-element_type="widget"
                data-widget_type="spacer.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-0ed269b e-con-full e-flex e-con e-child"
              data-id="0ed269b"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-47d5547 elementor-widget elementor-widget-heading"
                data-id="47d5547"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Crafting Digital Excellence
                    <span className="color--global">.</span>
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-caa1edd elementor-widget elementor-widget-text-editor"
                data-id="caa1edd"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    We pride ourselves on our versatile skill set.                     Whether
                    it&apos;s developing a cutting-edge mobile app, designing an
                    intuitive website, or reimagining your brand&apos;s digital
                    identity, our custom software development team in Lahore
                    has the expertise to turn visions into reality. Our
                    team is a blend of software engineers, UI/UX designers, and
                    digital strategists, ensuring that every project gets the
                    multifaceted approach it deserves.
                  </p>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-078632b elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="078632b"
                data-element_type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-check"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">
                        Award-winning design drawing eyes and ROIs
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-check"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">
                        Client-centric approach to make every dollar count
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-check"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">
                        Cutting-edge technology to maximize efficiency
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-check"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">
                        Global impact through our work and charity
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        {/* <div
          className="elementor-element elementor-element-20faea9 e-flex e-con-boxed e-con e-parent"
          data-id="20faea9"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-42173f0 e-flex e-con-boxed e-con e-child"
              data-id="42173f0"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-553ec4d elementor-widget elementor-widget-heading"
                  data-id="553ec4d"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Meet the Team<span className="color--global">.</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-16f4afd e-grid e-con-boxed e-con e-child"
              data-id="16f4afd"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-c709308 elementor-cta--valign-top elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action"
                  data-id="c709308"
                  data-element_type="widget"
                  data-widget_type="call-to-action.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-cta">
                      <div className="elementor-cta__bg-wrapper">
                        <div
                          className="elementor-cta__bg elementor-bg"
                          style={{
                            backgroundImage:
                              "url(/images/Screen-Shot-2021-03-16-at-6.29.10-PM-794x1024.png)",
                          }}
                          role="img"
                          aria-label="Lahore Custom Software Developer"
                        ></div>
                        <div className="elementor-cta__bg-overlay"></div>
                      </div>
                      <div className="elementor-cta__content">
                        <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">
                          Eddy M<span className="color--global">.</span>
                        </h2>
                        <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">
                          The wearer of all hats. Eddy is a senior engineer with
                          a passion for launching software and drinking coffee,
                          who steps in wherever and whenever needed.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-d6d592c elementor-cta--valign-top elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action"
                  data-id="d6d592c"
                  data-element_type="widget"
                  data-widget_type="call-to-action.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-cta">
                      <div className="elementor-cta__bg-wrapper">
                        <div
                          className="elementor-cta__bg elementor-bg"
                          style={{
                            backgroundImage:
                              "url(/images/TSJLCB1J5-U06LTQFAED6-784701590903-512.png)",
                          }}
                          role="img"
                          aria-label="TSJLCB1J5-U06LTQFAED6-784701590903-512"
                        ></div>
                        <div className="elementor-cta__bg-overlay"></div>
                      </div>
                      <div className="elementor-cta__content">
                        <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">
                          Tetiana B<span className="color--global">.</span>
                        </h2>
                        <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">
                          The glue that holds the team together. Tetiana is our
                          Product Owner, responsible for project coordination
                          and documentation.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-85cf422 elementor-cta--valign-top elementor-cta--skin-classic elementor-animated-content elementor-bg-transform elementor-bg-transform-zoom-in elementor-widget elementor-widget-call-to-action"
                  data-id="85cf422"
                  data-element_type="widget"
                  data-widget_type="call-to-action.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-cta">
                      <div className="elementor-cta__bg-wrapper">
                        <div
                          className="elementor-cta__bg elementor-bg"
                          style={{
                            backgroundImage:
                              "url(/images/TSJLCB1J5-U05RPVD8HTJ-eef6dbc755d6-512.png)",
                          }}
                          role="img"
                          aria-label="TSJLCB1J5-U05RPVD8HTJ-eef6dbc755d6-512"
                        ></div>
                        <div className="elementor-cta__bg-overlay"></div>
                      </div>
                      <div className="elementor-cta__content">
                        <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">
                          Oleg D<span className="color--global">.</span>
                        </h2>
                        <div className="elementor-cta__description elementor-cta__content-item elementor-content-item">
                          A creative genius, Oleg coordinates the Design stage
                          of our process to ensure the UI/UX design aligns with
                          the vision and the team understands it.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empty Spacer Section */}
        <div
          className="elementor-element elementor-element-6192a73 e-flex e-con-boxed e-con e-parent"
          data-id="6192a73"
          data-element_type="container"
        >
          <div className="e-con-inner"></div>
        </div>

        {/* Trusted By Section */}
        <div
          className="elementor-element elementor-element-cb62f77 e-con-full e-flex e-con e-parent"
          data-id="cb62f77"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div
            className="elementor-element elementor-element-17b673b elementor-widget elementor-widget-heading"
            data-id="17b673b"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                Trusted By and Partnered With
                <span style={{ color: "#ffaa16" }}>:</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div
          className="elementor-element elementor-element-b60359a e-grid e-con-boxed e-con e-parent"
          data-id="b60359a"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            {/* Microsoft Logo */}
            <div
              className="elementor-element elementor-element-e8cca64 elementor-widget elementor-widget-image"
              data-id="e8cca64"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width={800}
                  height={171}
                  src="/images/microsoft-logo-black-and-white-1-1024x219.png"
                  className="attachment-large size-large wp-image-4217"
                  alt="Microsoft Logo"
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "";
                    img.style.visibility = "";
                    img.style.opacity = "";
                  }}
                />
              </div>
            </div>

            {/* HubSpot Logo */}
            <div
              className="elementor-element elementor-element-5ef2980 elementor-widget elementor-widget-image"
              data-id="5ef2980"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width={800}
                  height={233}
                  src="/images/hubspot-logo-black-and-white-1024x298.png"
                  className="attachment-large size-large wp-image-4300"
                  alt="HubSpot Logo"
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "";
                    img.style.visibility = "";
                    img.style.opacity = "";
                  }}
                />
              </div>
            </div>

            {/* Wordmark Logo */}
            <div
              className="elementor-element elementor-element-8f78ca7 elementor-widget elementor-widget-image"
              data-id="8f78ca7"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width={800}
                  height={178}
                  src="/images/Wordmark_DarkBlue-modified-modified-1024x228.png"
                  className="attachment-large size-large wp-image-4219"
                  alt="Wordmark Logo"
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "";
                    img.style.visibility = "";
                    img.style.opacity = "";
                  }}
                />
              </div>
            </div>

            {/* Amazon Logo */}
            <div
              className="elementor-element elementor-element-7aa1615 elementor-widget elementor-widget-image"
              data-id="7aa1615"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width={800}
                  height={169}
                  src="/images/Amazon-logo-white.svg-1024x216.png"
                  className="attachment-large size-large wp-image-4286"
                  alt="Amazon Logo"
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "";
                    img.style.visibility = "";
                    img.style.opacity = "";
                  }}
                />
              </div>
            </div>

            {/* Google Logo */}
            <div
              className="elementor-element elementor-element-a68ebca elementor-widget elementor-widget-image"
              data-id="a68ebca"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width={800}
                  height={263}
                  src="/images/google-white-logo-1024x337.png"
                  className="attachment-large size-large wp-image-4285"
                  alt="Google Logo"
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "";
                    img.style.visibility = "";
                    img.style.opacity = "";
                  }}
                />
              </div>
            </div>

            {/* Shopify Logo */}
            <div
              className="elementor-element elementor-element-786b214 elementor-widget elementor-widget-image"
              data-id="786b214"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width={800}
                  height={227}
                  src="/images/shopify.svg"
                  className="attachment-large size-large wp-image-4287"
                  alt="Shopify Logo"
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "";
                    img.style.visibility = "";
                    img.style.opacity = "";
                  }}
                />
              </div>
            </div>

            {/* Additional Logo 1 */}
            <div
              className="elementor-element elementor-element-289ec9e elementor-widget elementor-widget-image"
              data-id="289ec9e"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width={800}
                  height={202}
                  src="/images/image.webp"
                  className="attachment-large size-large wp-image-4520"
                  alt="Partner Logo"
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "";
                    img.style.visibility = "";
                    img.style.opacity = "";
                  }}
                />
              </div>
            </div>

            {/* Additional Logo 2 */}
            <div
              className="elementor-element elementor-element-c76b052 elementor-widget elementor-widget-image"
              data-id="c76b052"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width={800}
                  height={240}
                  src="/images/image-2.webp"
                  className="attachment-large size-large wp-image-4522"
                  alt="Partner Logo"
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="eager"
                  decoding="async"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "";
                    img.style.visibility = "";
                    img.style.opacity = "";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section Before Footer */}
      <CTASection isExternal={true} buttonUrl="https://3techy.com/get-quote/" />

      <Footer />
    </>
  );
}
