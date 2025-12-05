"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

export default function Contact() {

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

    lazyloadRunObserver();
    setTimeout(lazyloadRunObserver, 100);

    // Trigger the elementor/lazyload/observe event
    const event = new Event("elementor/lazyload/observe");
    document.dispatchEvent(event);
  }, []);

  return (
    <>
      <Header />
      <div
        data-elementor-type="wp-page"
        data-elementor-id="729"
        className="elementor elementor-729"
        data-elementor-post-type="page"
      >
        {/* Page Title Section */}
        <div
          className="elementor-element elementor-element-26dc3c6 e-flex e-con-boxed e-con e-parent"
          data-id="26dc3c6"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-dca579a elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
              data-id="dca579a"
              data-element_type="widget"
              data-widget_type="theme-post-title.default"
            >
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default">
                  Contact Us
                </h1>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-4aa7876 elementor-widget__width-inherit elementor-absolute elementor-widget elementor-widget-html"
              data-id="4aa7876"
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

        {/* Get In Touch Section with Form */}
        <ContactFormSection
          formId="contact_us_form"
          postId="729"
          formName="Lead Form"
          refererTitle="Contact Us » 3Techy"
        />

        {/* Contact Information Grid Section */}
        <div
          className="elementor-element elementor-element-a52facc e-flex e-con-boxed e-con e-parent"
          data-id="a52facc"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-ffc83aa e-grid e-con-boxed e-con e-child"
              data-id="ffc83aa"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-2f39c9c e-con-full e-flex e-con e-child"
                  data-id="2f39c9c"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-6068416 elementor-widget elementor-widget-heading"
                    data-id="6068416"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-heading-title elementor-size-default">
                        Sales
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-bf59ede elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="bf59ede"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <a href="mailto:contact@3techy.com">
                            <span className="elementor-icon-list-text">
                              contact@3techy.com
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1a4e2b8 e-con-full e-flex e-con e-child"
                  data-id="1a4e2b8"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-be60c23 elementor-widget elementor-widget-heading"
                    data-id="be60c23"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-heading-title elementor-size-default">
                        Support
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-e9627c9 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="e9627c9"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <a href="mailto:contact@3techy.com">
                            <span className="elementor-icon-list-text">
                              contact@3techy.com
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1e35ce9 e-con-full e-flex e-con e-child"
                  data-id="1e35ce9"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-124e05c elementor-widget elementor-widget-heading"
                    data-id="124e05c"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-heading-title elementor-size-default">
                        Press
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-309c427 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="309c427"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <a href="mailto:contact@3techy.com">
                            <span className="elementor-icon-list-text">
                              contact@3techy.com
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-0b0c685 e-con-full e-flex e-con e-child"
                  data-id="0b0c685"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-955af35 elementor-widget elementor-widget-heading"
                    data-id="955af35"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-heading-title elementor-size-default">
                        Careers
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-b515705 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="b515705"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <a href="mailto:contact@3techy.com">
                            <span className="elementor-icon-list-text">
                              contact@3techy.com
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

