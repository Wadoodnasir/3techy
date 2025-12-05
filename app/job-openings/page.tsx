"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";

export default function JobOpenings() {
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

    // Also trigger the elementor/lazyload/observe event
    const event = new Event("elementor/lazyload/observe");
    document.dispatchEvent(event);
  }, []);

  // Get all service slugs for the sidebar menu
  const serviceSlugs = Object.values(services).map((service) => ({
    title: service.title,
    slug: service.slug,
  }));

  return (
    <>
      <Header />
      <div
        data-elementor-type="single-page"
        data-elementor-id="709"
        className="elementor elementor-709 elementor-location-single post-6274 page type-page status-publish hentry"
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
                <h1 className="elementor-heading-title elementor-size-default">
                  Job Openings
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
                    data-elementor-id="6274"
                    className="elementor elementor-6274"
                    data-elementor-post-type="page"
                  >
                    <div
                      className="elementor-element elementor-element-720af3b e-flex e-con-boxed e-con e-parent"
                      data-id="720af3b"
                      data-element_type="container"
                    >
                      <div className="e-con-inner">
                        <div
                          className="elementor-element elementor-element-8b48f55 elementor-widget elementor-widget-html"
                          data-id="8b48f55"
                          data-element_type="widget"
                          data-widget_type="html.default"
                        >
                          <div className="elementor-widget-container">
                           <h1></h1>
                           <p>We are always looking for talented and passionate individuals to join our team. If you are interested in working with us, please send us your resume and portfolio.</p>
                           <ul>
                            <li>
                              <a href="mailto:contact@3techy.com">
                                contact@3techy.com
                              </a>
                            </li>
                          </ul>
                          <h1>Benefits</h1>
                          <ul>
                            <li>
                              <p>Flexible work hours</p>
                              <p>Remote work</p>
                              <p>Competitive salary</p>
                              <p>Paid time off</p>
                              <p>Paid holidays</p>
                              <p>Paid sick days</p>
                              <p>Paid vacation days</p>
                              <p>Paid holidays</p>
                              <p>Paid sick days</p>
                              <p>Paid vacation days</p>
                              <p>Paid holidays</p>
                              <p>Paid sick days</p>
                              <p>Paid vacation days</p>
                            </li>
                          </ul>
                          <h1>Requirements</h1>
                          <ul>
                            <li>
                              <p>Bachelor's degree in Computer Science or related field</p>
                            </li>
                            <li>
                              <p>3+ years of experience in software development</p>
                            </li>
                            <li>
                              <p>Strong problem-solving skills</p>
                            </li>
                            <li>
                              <p>Strong communication skills</p>
                            </li>
                          </ul>
                          <h1>Responsibilities</h1>
                          <ul>
                            <li>
                              <p>Develop and maintain software applications</p>
                            </li>
                            <li>
                              <p>Troubleshoot and debug software issues</p>
                            </li>
                            <li>
                              <p>Collaborate with other developers and stakeholders</p>
                            </li>
                            <li>
                              <p>Participate in code reviews and provide feedback</p>
                            </li>
                            <li>
                              <p>Stay up-to-date with new technologies and trends</p>
                            </li>
                            <li>
                              <p>Follow best practices and coding standards</p>
                            </li>
                            <li>
                              <p>Write clean, maintainable code</p>
                            </li>
                          </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Sidebar Section */}
            <div
              className="elementor-element elementor-element-9f5a2b2 e-con-full e-flex e-con e-child"
              data-id="9f5a2b2"
              data-element_type="container"
            >
              {/* Upwork Badge */}
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
                          srcSet="/images/upwork-badge.png 600w, /images/upwork-badge-150x150.png 150w"
                          sizes="(max-width: 600px) 100vw, 600px"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Services Menu */}
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
                          {serviceSlugs.map((service) => (
                            <li
                              key={service.slug}
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <Link
                                href={`/${service.slug}/`}
                                className="elementor-item"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ready to get started Section */}
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
                            tabIndex={-1}
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
                            tabIndex={-1}
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
      <CTASection buttonUrl="/get-quote" />

      <Footer />
    </>
  );
}

