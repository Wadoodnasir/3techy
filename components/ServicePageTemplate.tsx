"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ServiceContent } from "@/lib/services";

interface ServicePageTemplateProps {
  service: ServiceContent;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
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
        data-elementor-type="single-page"
        data-elementor-id="709"
        className="elementor elementor-709 elementor-location-single"
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
            <div className="elementor-element elementor-element-161676e elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading">
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default">
                  {service.title}
                </h1>
              </div>
            </div>
            <div className="elementor-element elementor-element-29b444e elementor-widget__width-inherit elementor-absolute elementor-widget elementor-widget-html">
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
            <main className="elementor-element elementor-element-a455184 e-con-full e-flex e-con e-child">
              <div
                className="elementor-element elementor-element-0b58a01 elementor-widget elementor-widget-theme-post-content"
                data-id="0b58a01"
                data-element_type="widget"
                id="post-content"
                data-widget_type="theme-post-content.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="wp-block-heading">{service.mainHeading}</h2>
                  <p>{service.introParagraph}</p>

                  <h2 className="wp-block-heading">{service.powerHeading}</h2>
                  <p>{service.powerParagraph}</p>

                  <h2 className="wp-block-heading">
                    {service.servicesHeading}
                  </h2>

                  <h3 className="wp-block-heading">{service.service1Title}</h3>
                  <ul className="wp-block-list">
                    {service.service1Items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="wp-block-heading">{service.service2Title}</h3>
                  <ul className="wp-block-list">
                    {service.service2Items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h2 className="wp-block-heading">
                    {service.whyChooseHeading}
                  </h2>
                  <ul className="wp-block-list">
                    {service.whyChooseItems.map((item, index) => (
                      <li key={index}>
                        <strong>{item.split(":")[0]}:</strong>{" "}
                        {item.split(":")[1]}
                      </li>
                    ))}
                  </ul>

                  <h2 className="wp-block-heading">Conclusion:</h2>
                  <p>
                    {service.conclusionParagraph.includes("get in touch with us today!") ? (
                      <>
                        {service.conclusionParagraph.split("get in touch with us today!")[0]}
                        <Link href="/contact">get in touch with us today!</Link>
                        {service.conclusionParagraph.split("get in touch with us today!")[1] || ""}
                      </>
                    ) : (
                      service.conclusionParagraph
                    )}
                  </p>
                </div>
              </div>
            </main>

            {/* Sidebar Section */}
            <div className="elementor-element elementor-element-9f5a2b2 e-con-full e-flex e-con e-child">
              {/* Upwork Badge */}
              <div className="elementor-element elementor-element-130624d e-flex e-con-boxed e-con e-child">
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-bef6566 elementor-widget elementor-widget-image">
                    <div className="elementor-widget-container">
                      <a
                        href="https://www.upwork.com/freelancers/eddymosk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          width="600"
                          height="603"
                          src="/images/upwork-badge.png"
                          className="attachment-large size-large wp-image-4175"
                          alt="Upwork Badge"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Services Menu */}
              <div className="elementor-element elementor-element-24472bb e-flex e-con-boxed e-con e-child">
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-9d1c7f2 elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">
                        All Services
                      </h4>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-19382b4 elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu">
                    <div className="elementor-widget-container">
                      <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-background e--animation-fade">
                        <ul
                          id="menu-1-19382b4"
                          className="elementor-nav-menu sm-vertical"
                        >
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                            <Link
                              href="/artificial-intelligence-development-automation"
                              className="elementor-item"
                            >
                              Artificial Intelligence Development & Automation
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-972">
                            <Link
                              href="/mobile-app-design-development"
                              className="elementor-item"
                            >
                              Mobile App Design & Development
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item current_page_item menu-item-973">
                            <Link
                              href={`/${service.slug}`}
                              className="elementor-item elementor-item-active"
                            >
                              {service.title}
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1400">
                            <Link
                              href="/blockchain-web3-development"
                              className="elementor-item"
                            >
                              Blockchain & Web3 Development
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1401">
                            <Link
                              href="/ios-application-development-design"
                              className="elementor-item"
                            >
                              iOS Application Development & Design
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1402">
                            <Link
                              href="/android-application-development-design"
                              className="elementor-item"
                            >
                              Android Application Development & Design
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1403">
                            <Link
                              href="/web-application-development"
                              className="elementor-item"
                            >
                              Web Application Development
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1404">
                            <Link
                              href="/progressive-web-app-pwa-development"
                              className="elementor-item"
                            >
                              Progressive Web App (PWA) Development
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-975">
                            <Link href="/ux-ui-design" className="elementor-item">
                              UX/UI Design
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="elementor-element elementor-element-2c31914 e-flex e-con-boxed e-con e-child">
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d85fcb elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">
                        Ready to get started?
                      </h4>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-9ce67b4 elementor-widget elementor-widget-text-editor">
                    <div className="elementor-widget-container">
                      <div className="text">
                        Ready to discuss your idea or initiate the process? Feel
                        free to email us, contact us, or call us, whichever you
                        prefer.
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-5412a71 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box">
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
                            <a href="tel:03034498760">03034498760</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-b23955f elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <a
                            href="mailto:[email protected]"
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
                            <a href="mailto:[email protected]">
                              [email protected]
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
      <Footer />
    </>
  );
}

