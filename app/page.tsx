import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import VideoSection from "@/components/VideoSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Counter from "@/components/Counter";
import ContactFormSection from "@/components/ContactFormSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div
        data-elementor-type="wp-page"
        data-elementor-id="2745"
        className="elementor elementor-2745"
        data-elementor-post-type="page"
        id="content"
      >
        {/* Hero Section */}
        <div
          className="elementor-element elementor-element-08201c8 e-con-full e-flex e-con e-parent"
          data-id="08201c8"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div
            className="elementor-element elementor-element-621b05c e-flex e-con-boxed e-con e-child"
            data-id="621b05c"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-cf4fd97 elementor-widget elementor-widget-heading"
                data-id="cf4fd97"
                data-element_type="widget"
                data-settings='{"_animation":"none"}'
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <p className="elementor-heading-title elementor-size-default">
                    Our Lahore Agency Develops Software For Clients
                    Worldwide With a 🐝 <b>&quot;Bee&quot; Guarantee.</b>
                  </p>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-defcd3e elementor-widget elementor-widget-heading"
                data-id="defcd3e"
                data-element_type="widget"
                data-settings='{"_animation":"none"}'
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    If <span className="color--global">You</span> Imagine It,
                    <br />
                    We <span className="color--global">Will</span> Build It
                    <span className="color--global">.</span>
                  </h1>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-1fe868a elementor-align-center elementor-widget elementor-widget-button"
                data-id="1fe868a"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="https://3techy.com/get-quote/"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          Get Quote Today
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-183913b elementor-widget__width-inherit elementor-absolute elementor-widget elementor-widget-html"
            data-id="183913b"
            data-element_type="widget"
            data-settings='{"_position":"absolute"}'
            data-widget_type="html.default"
          >
            <div className="elementor-widget-container">
              <div className="hero-bg-pattern-stripes bg-piece"></div>
              <div className="hero-bg-center-logo bg-piece"></div>
              <div className="hero-bg-line-right bg-piece"></div>
              <div className="hero-bg-top-left-1 bg-piece"></div>
              <div className="hero-bg-bottom-right-1 bg-piece"></div>
              <div className="hero-bg-top-right-1 bg-piece"></div>
              <div className="hero-bg-line-left bg-piece"></div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div
          className="elementor-element elementor-element-158bad4 e-flex e-con-boxed e-con e-parent"
          data-id="158bad4"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-cbdc865 e-grid e-con-boxed e-con e-child"
              data-id="cbdc865"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-3f2086c e-con-full e-flex e-con e-child"
                  data-id="3f2086c"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-48a82b9 elementor-widget elementor-widget-heading"
                    data-id="48a82b9"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Plenty Of Options To Suit Your Needs
                        <span className="color--global">.</span>
                      </h2>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-72cefbc elementor-widget elementor-widget-text-editor"
                    data-id="72cefbc"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <p>
                        Whether you have an idea that you&apos;d like to plan
                        for, are in business and growing, ready to launch a new
                        product, or curious about designing and developing a new
                        mobile app, our Lahore software development agency
                        has you covered.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Service Icon Box 1: Mobile App Development */}
                <div
                  className="elementor-element elementor-element-9e2d48f elementor-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="9e2d48f"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <a
                          href="https://3techy.com/mobile-app-design-development/"
                          aria-label="Mobile App Development"
                          className="elementor-icon elementor-animation-"
                          tabIndex={-1}
                        >
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fas-mobile-alt"
                            viewBox="0 0 320 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <a
                            href="https://3techy.com/mobile-app-design-development/"
                            aria-label="Mobile App Development"
                          >
                            Mobile App Development
                          </a>
                        </h3>
                        <p className="elementor-icon-box-description">
                          iOS, Android, Flutter
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Icon Box 2: CRM/SaaS Design & Development */}
                <div
                  className="elementor-element elementor-element-7fc4616 elementor-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="7fc4616"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <a
                          href="https://3techy.com/saas-design-development/"
                          aria-label="SaaS Design & Development"
                          className="elementor-icon elementor-animation-"
                          tabIndex={-1}
                        >
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-codepen"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <a
                            href="https://3techy.com/saas-design-development/"
                            aria-label="SaaS Design & Development"
                          >
                            CRM/SaaS Design & Development
                          </a>
                        </h3>
                        <p className="elementor-icon-box-description">
                          Get A Free Consultation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Nested Grid Container for Services 3-4 */}
                <div
                  className="elementor-element elementor-element-2bb0b35 e-grid e-con-boxed e-con e-child"
                  data-id="2bb0b35"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    {/* Service Icon Box 3: Shopify Web Design & Development */}
                    <div
                      className="elementor-element elementor-element-261d1d6 elementor-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                      data-id="261d1d6"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <a
                              href="https://3techy.com/shopify-web-design-development/"
                              aria-label="Shopify Web Design & Development"
                              className="elementor-icon elementor-animation-"
                              tabIndex={-1}
                            >
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-shopping-bag"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path>
                              </svg>
                            </a>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <a
                                href="https://3techy.com/shopify-web-design-development/"
                                aria-label="Shopify Web Design & Development"
                              >
                                Shopify Web Design & Development
                              </a>
                            </h3>
                            <p className="elementor-icon-box-description">
                              Liquid, GraphQL, Apps
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Service Icon Box 4: Blockchain & Web3 Development */}
                    <div
                      className="elementor-element elementor-element-e40d21a elementor-position-right elementor-mobile-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                      data-id="e40d21a"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <a
                              href="https://3techy.com/blockchain-web3-development/"
                              aria-label="Blockchain & Web3 Development"
                              className="elementor-icon elementor-animation-"
                              tabIndex={-1}
                            >
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fab-bitcoin"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"></path>
                              </svg>
                            </a>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <a
                                href="https://3techy.com/blockchain-web3-development/"
                                aria-label="Blockchain & Web3 Development"
                              >
                                Blockchain & Web3 Development
                              </a>
                            </h3>
                            <p className="elementor-icon-box-description">
                              NFT Contracts & More
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Icon Box 5: iOS Mobile Application Development & Design */}
                <div
                  className="elementor-element elementor-element-c8f8304 elementor-position-right elementor-mobile-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="c8f8304"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <a
                          href="https://3techy.com/ios-application-development-design/"
                          aria-label="iOS Application Development & Design"
                          className="elementor-icon elementor-animation-"
                          tabIndex={-1}
                        >
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-apple"
                            viewBox="0 0 384 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <a
                            href="https://3techy.com/ios-application-development-design/"
                            aria-label="iOS Application Development & Design"
                          >
                            iOS Mobile Application Development & Design
                          </a>
                        </h3>
                        <p className="elementor-icon-box-description">
                          Swift & React Native
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Icon Box 6: Android Mobile Application Development & Design */}
                <div
                  className="elementor-element elementor-element-d7716ad elementor-position-right elementor-mobile-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="d7716ad"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <a
                          href="https://3techy.com/android-application-development-design/"
                          aria-label="Android Application Development & Design"
                          className="elementor-icon elementor-animation-"
                          tabIndex={-1}
                        >
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-android"
                            viewBox="0 0 576 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <a
                            href="https://3techy.com/android-application-development-design/"
                            aria-label="Android Application Development & Design"
                          >
                            Android Mobile Application Development & Design
                          </a>
                        </h3>
                        <p className="elementor-icon-box-description">
                          Kotlin & React Native
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Nested Grid Container for Services 7-8 */}
                <div
                  className="elementor-element elementor-element-3180ea3 e-grid e-con-boxed e-con e-child"
                  data-id="3180ea3"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    {/* Service Icon Box 7: Hubspot Web Design & Development */}
                    <div
                      className="elementor-element elementor-element-7cb4dba elementor-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                      data-id="7cb4dba"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <a
                              href="https://3techy.com/hubspot-web-design-development/"
                              aria-label="Hubspot Web Design & Development"
                              className="elementor-icon elementor-animation-"
                              tabIndex={-1}
                            >
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fab-hubspot"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M267.4 211.6c-25.1 23.7-40.8 57.3-40.8 94.6 0 29.3 9.7 56.3 26 78L203.1 434c-4.4-1.6-9.1-2.5-14-2.5-10.8 0-20.9 4.2-28.5 11.8-7.6 7.6-11.8 17.8-11.8 28.6s4.2 20.9 11.8 28.5c7.6 7.6 17.8 11.6 28.5 11.6 10.8 0 20.9-3.9 28.6-11.6 7.6-7.6 11.8-17.8 11.8-28.5 0-4.2-.6-8.2-1.9-12.1l50-50.2c22 16.9 49.4 26.9 79.3 26.9 71.9 0 130-58.3 130-130.2 0-65.2-47.7-119.2-110.2-128.7V116c17.5-7.4 28.2-23.8 28.2-42.9 0-26.1-20.9-47.9-47-47.9S311.2 47 311.2 73.1c0 19.1 10.7 35.5 28.2 42.9v61.2c-15.2 2.1-29.6 6.7-42.7 13.6-27.6-20.9-117.5-85.7-168.9-124.8 1.2-4.4 2-9 2-13.8C129.8 23.4 106.3 0 77.4 0 48.6 0 25.2 23.4 25.2 52.2c0 28.9 23.4 52.3 52.2 52.3 9.8 0 18.9-2.9 26.8-7.6l163.2 114.7zm89.5 163.6c-38.1 0-69-30.9-69-69s30.9-69 69-69 69 30.9 69 69-30.9 69-69 69z"></path>
                              </svg>
                            </a>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <a
                                href="https://3techy.com/hubspot-web-design-development/"
                                aria-label="Hubspot Web Design & Development"
                              >
                                Hubspot Web Design & Development
                              </a>
                            </h3>
                            <p className="elementor-icon-box-description">
                              HubL, Automations, Etc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Service Icon Box 8: UX/UI Design */}
                    <div
                      className="elementor-element elementor-element-1a9dc49 elementor-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                      data-id="1a9dc49"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <a
                              href="https://3techy.com/ux-ui-design/"
                              aria-label="UX/UI Design"
                              className="elementor-icon elementor-animation-"
                              tabIndex={-1}
                            >
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-paint-brush"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path>
                              </svg>
                            </a>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <a
                                href="https://3techy.com/ux-ui-design/"
                                aria-label="UX/UI Design"
                              >
                                UX/UI Design
                              </a>
                            </h3>
                            <p className="elementor-icon-box-description">
                              Wireframes & Mockups
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Icon Box 9: Progressive Web App (PWA) Development */}
                <div
                  className="elementor-element elementor-element-5405efa elementor-position-right elementor-mobile-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="5405efa"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <a
                          href="https://3techy.com/progressive-web-app-pwa-development/"
                          aria-label="Progressive Web App (PWA) Development"
                          className="elementor-icon elementor-animation-"
                          tabIndex={-1}
                        >
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fab-chromecast"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <a
                            href="https://3techy.com/progressive-web-app-pwa-development/"
                            aria-label="Progressive Web App (PWA) Development"
                          >
                            Progressive Web App (PWA) Development
                          </a>
                        </h3>
                        <p className="elementor-icon-box-description">
                          Using React
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Icon Box 10: Artificial Intelligence (AI) Development */}
                <div
                  className="elementor-element elementor-element-c969d17 elementor-position-right elementor-mobile-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                  data-id="c969d17"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <a
                          href="https://3techy.com/artificial-intelligence-development-automation/"
                          aria-label="Artificial Intelligence (AI) Development"
                          className="elementor-icon elementor-animation-"
                          tabIndex={-1}
                        >
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fas-brain"
                            viewBox="0 0 576 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <a
                            href="https://3techy.com/artificial-intelligence-development-automation/"
                            aria-label="Artificial Intelligence (AI) Development"
                          >
                            Artificial Intelligence (AI) Development
                          </a>
                        </h3>
                        <p className="elementor-icon-box-description">
                          OpenAI, Perplexity, Etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section - Heading */}
        <div
          className="elementor-element elementor-element-a2afaf7 e-flex e-con-boxed e-con e-parent"
          data-id="a2afaf7"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-5535f10 elementor-widget elementor-widget-heading"
              data-id="5535f10"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  You Deserve An Award-winning Company
                  <span className="color--global">.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Awards Section - First Grid (3 awards) */}
     
        {/* Awards Section - Second Grid (9 awards) */}
        <div
          className="elementor-element elementor-element-aa3932f e-grid e-con-boxed e-con e-parent"
          data-id="aa3932f"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            {/* Award 4: Top Clutch.co App Development Company Legal Cannabis Lahore */}
            <div
              className="elementor-element elementor-element-4f37006 elementor-widget elementor-widget-image"
              data-id="4f37006"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_app_development_company_legal_cannabis_los_angeles.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4129"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
            {/* Award 5: Top Clutch.co Software Developers Education Lahore */}
            <div
              className="elementor-element elementor-element-cda4445 elementor-widget elementor-widget-image"
              data-id="cda4445"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_software_developers_education_los_angeles.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4131"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
            {/* Award 6: Top Clutch.co Computer Vision Company Pakistan 2024 */}
            <div
              className="elementor-element elementor-element-c886de9 elementor-widget elementor-widget-image"
              data-id="c886de9"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_computer_vision_company_california_2024.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4130"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
            {/* Award 7: Top Clutch.co Software Developers Real Estate Lahore */}
            <div
              className="elementor-element elementor-element-d89f45b elementor-widget elementor-widget-image"
              data-id="d89f45b"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_software_developers_real_estate_los_angeles.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4134"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
            {/* Award 8: Top Clutch.co Software Developers Real Estate Pakistan */}
            <div
              className="elementor-element elementor-element-7501b8c elementor-widget elementor-widget-image"
              data-id="7501b8c"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_software_developers_real_estate_california.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4133"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
            {/* Award 9: Top Clutch.co Software Developers Legal Cannabis United States */}
            <div
              className="elementor-element elementor-element-9a2b026 elementor-widget elementor-widget-image"
              data-id="9a2b026"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_software_developers_legal_cannabis_united_states.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4132"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
            {/* Award 10: Top Clutch.co Software Developers Retail Lahore */}
            <div
              className="elementor-element elementor-element-9db3aae elementor-widget elementor-widget-image"
              data-id="9db3aae"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_software_developers_retail_los_angeles.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4136"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
            {/* Award 11: Top Clutch.co Software Developers Retail Pakistan */}
            <div
              className="elementor-element elementor-element-2abb485 elementor-widget elementor-widget-image"
              data-id="2abb485"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_software_developers_retail_california.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4135"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
            {/* Award 12: Top Clutch.co Web Developers Hospitality & Leisure Pakistan (Hidden on tablet/mobile) */}
            <div
              className="elementor-element elementor-element-fed6589 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
              data-id="fed6589"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_web_developers_hospitality__leisure_california.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4138"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
            {/* Award 13: Top Clutch.co Web Design Company Hospitality & Leisure Lahore (Hidden on tablet/mobile) */}
            <div
              className="elementor-element elementor-element-6fff437 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
              data-id="6fff437"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://clutch.co/profile/bee-techy?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/top_clutch.co_web_design_company_hospitality__leisure_los_angeles.svg"
                    alt=""
                    width={800}
                    height={865}
                    className="attachment-large size-large wp-image-4137"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section - Heading */}
        <div
          className="elementor-element elementor-element-0ce3c85 e-con-full e-flex e-con e-parent"
          data-id="0ce3c85"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div
            className="elementor-element elementor-element-324cd03 elementor-widget elementor-widget-heading"
            data-id="324cd03"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                Especially A Company Trusted By
                <span style={{ color: "#ffaa16" }}>:</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Trusted By Section - Company Logos Grid */}
        <div
          className="elementor-element elementor-element-cdc6362 e-grid e-con-boxed e-con e-parent"
          data-id="cdc6362"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            {/* Logo 1: Microsoft */}
            <div
              className="elementor-element elementor-element-9aadf96 elementor-widget elementor-widget-image"
              data-id="9aadf96"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <Image
                  src="/images/microsoft-logo-black-and-white-1-1024x219.png"
                  alt=""
                  width={800}
                  height={171}
                  className="attachment-large size-large wp-image-4217"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Logo 2: HubSpot */}
            <div
              className="elementor-element elementor-element-ef73797 elementor-widget elementor-widget-image"
              data-id="ef73797"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <Image
                  src="/images/hubspot-logo-black-and-white-1024x298.png"
                  alt=""
                  width={800}
                  height={233}
                  className="attachment-large size-large wp-image-4300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Logo 3: Wordmark DarkBlue */}
            <div
              className="elementor-element elementor-element-8ab1dbf elementor-widget elementor-widget-image"
              data-id="8ab1dbf"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <Image
                  src="/images/Wordmark_DarkBlue-modified-modified-1024x228.png"
                  alt=""
                  width={800}
                  height={178}
                  className="attachment-large size-large wp-image-4219"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Logo 4: Amazon */}
            <div
              className="elementor-element elementor-element-5896de8 elementor-widget elementor-widget-image"
              data-id="5896de8"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <Image
                  src="/images/Amazon-logo-white.svg-1024x216.png"
                  alt=""
                  width={800}
                  height={169}
                  className="attachment-large size-large wp-image-4286"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Logo 5: Google */}
            <div
              className="elementor-element elementor-element-3eeb082 elementor-widget elementor-widget-image"
              data-id="3eeb082"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <Image
                  src="/images/google-white-logo-1024x337.png"
                  alt=""
                  width={800}
                  height={263}
                  className="attachment-large size-large wp-image-4285"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Logo 6: Shopify */}
            <div
              className="elementor-element elementor-element-a1da177 elementor-widget elementor-widget-image"
              data-id="a1da177"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <Image
                  src="/images/shopify.svg"
                  alt=""
                  width={800}
                  height={227}
                  className="attachment-large size-large wp-image-4287"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Logo 7: Image.webp */}
            <div
              className="elementor-element elementor-element-a3ece00 elementor-widget elementor-widget-image"
              data-id="a3ece00"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <Image
                  src="/images/image.webp"
                  alt=""
                  width={800}
                  height={202}
                  className="attachment-large size-large wp-image-4520"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Logo 8: Image-2.webp */}
            <div
              className="elementor-element elementor-element-c971c37 elementor-widget elementor-widget-image"
              data-id="c971c37"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <Image
                  src="/images/image-2.webp"
                  alt=""
                  width={800}
                  height={240}
                  className="attachment-large size-large wp-image-4522"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Every Innovation Begins With An Idea Section */}
        <div
          className="elementor-element elementor-element-036ad6a e-flex e-con-boxed e-con e-parent"
          data-id="036ad6a"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            {/* Images Container */}
            <div
              className="elementor-element elementor-element-0f32c31 e-con-full e-flex e-con e-child"
              data-id="0f32c31"
              data-element_type="container"
            >
              {/* Image 1 */}
              <div
                className="elementor-element elementor-element-c8d499a grayscale elementor-widget elementor-widget-image"
                data-id="c8d499a"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <Image
                    src="/images/featured-image-1.webp"
                    alt="Lahore digital agency"
                    width={263}
                    height={289}
                    className="attachment-large size-large wp-image-172"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {/* Image 2 */}
              <div
                className="elementor-element elementor-element-81e1599 grayscale elementor-widget elementor-widget-image"
                data-id="81e1599"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <Image
                    src="/images/image6.webp"
                    alt=""
                    width={356}
                    height={356}
                    className="attachment-large size-large wp-image-174"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            {/* Content Container */}
            <div
              className="elementor-element elementor-element-a7d8355 e-con-full e-flex e-con e-child"
              data-id="a7d8355"
              data-element_type="container"
            >
              {/* Main Heading */}
              <div
                className="elementor-element elementor-element-22b51df elementor-widget elementor-widget-heading"
                data-id="22b51df"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Every Innovation Begins With An Idea
                    <span className="color--global">.</span>
                  </h2>
                </div>
              </div>
              {/* Subheading */}
              <div
                className="elementor-element elementor-element-6848725 elementor-widget elementor-widget-heading"
                data-id="6848725"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <p className="elementor-heading-title elementor-size-default">
                    Technology Has Enabled Businesses To Reach Heights That
                    People Never Thought Were Possible.
                  </p>
                </div>
              </div>
              {/* Text Content */}
              <div
                className="elementor-element elementor-element-29e1293 elementor-widget elementor-widget-text-editor"
                data-id="29e1293"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <div className="text">
                    <p>
                      Startups such as Uber, AirBnB, and Mailchimp all provide
                      huge value for their customers, both consumers and
                      businesses.
                    </p>
                    <p>
                      People in all industries have saved time and money through
                      developing and/or implementing software into their
                      operations.
                    </p>
                    <p>
                      If you&apos;re ready to turn your idea into a reality, or
                      want to brainstorm with us, schedule a free consultation
                      with our Lahore software development agency now.
                    </p>
                  </div>
                  <div className="link-box"></div>
                </div>
              </div>
              {/* Button */}
              <div
                className="elementor-element elementor-element-7fb162b elementor-widget elementor-widget-button"
                data-id="7fb162b"
                data-element_type="widget"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="https://3techy.com/get-quote/"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          Schedule Free Consultation
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Can Technology Help Your Business Section */}
        <VideoSection />

        {/* This Is How We Bring Ideas To Life Section */}
        <div
          className="elementor-element elementor-element-f12d06d e-flex e-con-boxed e-con e-parent"
          data-id="f12d06d"
          data-element_type="container"
        >
          <div className="e-con-inner">
            {/* Top Container with Heading, Image, and Intro Text */}
            <div
              className="elementor-element elementor-element-dbaae25 e-con-full e-flex e-con e-child"
              data-id="dbaae25"
              data-element_type="container"
            >
              {/* Heading */}
              <div
                className="elementor-element elementor-element-949d56a elementor-widget elementor-widget-heading"
                data-id="949d56a"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    This Is How We Bring Ideas To Life
                    <span className="color--global">.</span>
                  </h2>
                </div>
              </div>
              {/* Image */}
              <div
                className="elementor-element elementor-element-a2eaeed elementor-widget__width-initial grayscale elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image"
                data-id="a2eaeed"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <Image
                    src="/images/image9.webp"
                    alt=""
                    width={256}
                    height={179}
                    className="attachment-medium_large size-medium_large wp-image-178"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {/* Intro Text */}
              <div
                className="elementor-element elementor-element-3915301 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor"
                data-id="3915301"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <div className="featured-block clearfix">
                    <div className="text">
                      Our team of software development experts in Lahore
                      will take every step necessary to ensure timely and cost
                      efficient delivery using our step-by-step process.
                      Here&apos;s how:
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordion Container */}
            <div
              className="elementor-element elementor-element-b68e373 e-con-full e-flex e-con e-child"
              data-id="b68e373"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-f017850 elementor-widget elementor-widget-n-accordion"
                data-id="f017850"
                data-element_type="widget"
                data-settings='{"n_accordion_animation_duration":{"unit":"ms","size":300,"sizes":[]},"default_state":"expanded","max_items_expended":"one"}'
                data-widget_type="nested-accordion.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="e-n-accordion"
                    aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys"
                  >
                    {/* Accordion Item 1: Design & Planning */}
                    <details
                      id="e-n-accordion-item-2510"
                      className="e-n-accordion-item"
                      open
                    >
                      <summary
                        className="e-n-accordion-item-title"
                        data-accordion-index="1"
                        tabIndex={0}
                        aria-expanded="true"
                        aria-controls="e-n-accordion-item-2510"
                      >
                        <span className="e-n-accordion-item-title-header">
                          <div className="e-n-accordion-item-title-text">
                            <span className="color--global">1.</span> Design
                            &amp; Planning
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
                              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                          </span>
                          <span className="e-closed">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-plus"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                          </span>
                        </span>
                      </summary>
                      <div
                        role="region"
                        aria-labelledby="e-n-accordion-item-2510"
                        className="elementor-element elementor-element-ad6037f e-con-full e-flex e-con e-child"
                        data-id="ad6037f"
                        data-element_type="container"
                      >
                        <div
                          role="region"
                          aria-labelledby="e-n-accordion-item-2510"
                          className="elementor-element elementor-element-220020f e-flex e-con-boxed e-con e-child"
                          data-id="220020f"
                          data-element_type="container"
                        >
                          <div className="e-con-inner">
                            <div
                              className="elementor-element elementor-element-0f94de9 elementor-widget elementor-widget-text-editor"
                              data-id="0f94de9"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <p>
                                  First, we outline the requirements, create the
                                  blueprint, and draw the layouts. That way, you
                                  have a full roadmap for development, coupled
                                  with a cost and time breakdown.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                    {/* Accordion Item 2: Development & Testing */}
                    <details
                      id="e-n-accordion-item-2511"
                      className="e-n-accordion-item"
                    >
                      <summary
                        className="e-n-accordion-item-title"
                        data-accordion-index="2"
                        tabIndex={-1}
                        aria-expanded="false"
                        aria-controls="e-n-accordion-item-2511"
                      >
                        <span className="e-n-accordion-item-title-header">
                          <div className="e-n-accordion-item-title-text">
                            <span className="color--global">2.</span>{" "}
                            Development &amp; Testing
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
                              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                          </span>
                          <span className="e-closed">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-plus"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                          </span>
                        </span>
                      </summary>
                      <div
                        role="region"
                        aria-labelledby="e-n-accordion-item-2511"
                        className="elementor-element elementor-element-1e588d4 e-con-full e-flex e-con e-child"
                        data-id="1e588d4"
                        data-element_type="container"
                      >
                        <div
                          className="elementor-element elementor-element-10fb668 elementor-widget elementor-widget-text-editor"
                          data-id="10fb668"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <p>
                              Next, using the roadmap, our developers will put
                              together the pieces of the puzzle to make the
                              magic happen. We&apos;ll create a prototype, test
                              thoroughly, then go for launch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </details>
                    {/* Accordion Item 3: Deploying & Supporting */}
                    <details
                      id="e-n-accordion-item-2512"
                      className="e-n-accordion-item"
                    >
                      <summary
                        className="e-n-accordion-item-title"
                        data-accordion-index="3"
                        tabIndex={-1}
                        aria-expanded="false"
                        aria-controls="e-n-accordion-item-2512"
                      >
                        <span className="e-n-accordion-item-title-header">
                          <div className="e-n-accordion-item-title-text">
                            <span className="color--global">3.</span> Deploying
                            &amp; Supporting
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
                              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                          </span>
                          <span className="e-closed">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-plus"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                            </svg>
                          </span>
                        </span>
                      </summary>
                      <div
                        role="region"
                        aria-labelledby="e-n-accordion-item-2512"
                        className="elementor-element elementor-element-658d500 e-con-full e-flex e-con e-child"
                        data-id="658d500"
                        data-element_type="container"
                      >
                        <div
                          className="elementor-element elementor-element-acab332 elementor-widget elementor-widget-text-editor"
                          data-id="acab332"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <p>
                              Lastly, once the product is ready, we will be
                              there all the way through the end, including
                              support after that. We&apos;ll train your team and
                              get you going.
                            </p>
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Great Things In Business Section */}
        <div
          className="elementor-element elementor-element-753f78e e-flex e-con-boxed e-con e-parent e-no-lazyload"
          data-id="753f78e"
          data-element_type="container"
          data-settings='{"background_background":"classic","background_motion_fx_motion_fx_scrolling":"yes","background_motion_fx_translateY_effect":"yes","background_motion_fx_translateY_speed":{"unit":"px","size":10,"sizes":[]},"background_motion_fx_range":"page","background_motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"background_motion_fx_devices":["desktop","tablet","mobile"]}'
        >
          <div className="e-con-inner">
            {/* Icon */}
            <div
              className="elementor-element elementor-element-29807da elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon"
              data-id="29807da"
              data-element_type="widget"
              data-widget_type="icon.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0.00 0.00 512.00 512.00"
                    >
                      <g>
                        <path d="   M 127.57 0.00   L 384.30 0.00   C 393.17 1.20 395.50 6.69 395.49 15.10   Q 395.43 53.02 395.81 91.92   Q 395.82 93.00 394.74 93.00   L 372.72 93.00   A 0.53 0.53 0.0 0 1 372.19 92.47   L 372.40 70.01   A 0.26 0.26 0.0 0 0 372.14 69.75   L 291.24 69.75   Q 290.97 69.75 290.97 69.48   L 291.01 46.99   Q 291.01 46.50 291.51 46.50   L 370.86 46.50   A 1.43 1.43 0.0 0 0 372.29 45.08   L 372.40 24.20   A 0.95 0.94 0.3 0 0 371.45 23.25   L 140.11 23.25   A 0.39 0.38 90.0 0 0 139.73 23.64   L 139.72 46.24   A 0.27 0.27 0.0 0 0 139.99 46.51   L 220.50 46.50   A 0.50 0.50 0.0 0 1 221.00 47.00   L 221.00 69.25   Q 221.00 69.75 220.50 69.75   L 140.61 69.75   A 0.89 0.88 90.0 0 0 139.73 70.64   L 139.73 92.35   A 0.65 0.65 0.0 0 1 139.08 93.00   L 116.78 93.00   Q 116.32 93.00 116.32 92.54   Q 116.06 54.49 116.44 16.50   C 116.53 7.43 117.96 1.46 127.57 0.00   Z"></path>
                        <rect
                          x="-11.72"
                          y="-11.62"
                          transform="translate(256.02,58.13) rotate(0.1)"
                          width="23.44"
                          height="23.24"
                          rx="0.74"
                        ></rect>
                        <path d="   M 117.26 348.99   C 108.35 348.99 104.77 342.85 104.76 334.79   Q 104.73 240.30 104.76 145.80   C 104.76 133.29 107.13 128.07 120.11 128.03   Q 141.31 127.96 162.46 128.01   A 0.53 0.52 -0.0 0 0 162.99 127.49   C 163.06 114.00 161.71 104.77 178.46 104.77   Q 255.67 104.73 332.89 104.76   C 350.16 104.77 348.84 113.17 349.02 127.41   Q 349.02 127.98 349.59 127.98   Q 369.54 128.03 389.43 128.00   C 401.87 127.99 407.23 130.43 407.24 143.38   Q 407.27 237.67 407.24 331.96   C 407.24 344.89 403.98 349.06 391.18 349.01   Q 370.40 348.94 349.63 349.03   Q 349.09 349.03 349.01 349.57   C 347.64 359.33 341.26 360.73 332.14 360.73   Q 256.44 360.77 180.74 360.74   C 171.16 360.73 164.82 359.90 162.92 349.75   A 0.92 0.91 84.7 0 0 162.02 349.00   Q 139.82 349.00 117.26 348.99   Z   M 325.75 128.27   A 0.27 0.27 0.0 0 0 325.48 128.00   L 186.52 128.00   A 0.27 0.27 0.0 0 0 186.25 128.27   L 186.25 337.23   A 0.27 0.27 0.0 0 0 186.52 337.50   L 325.48 337.50   A 0.27 0.27 0.0 0 0 325.75 337.23   L 325.75 128.27   Z   M 140.12 197.75   A 0.61 0.61 0.0 0 1 139.51 197.14   L 139.55 175.11   A 0.61 0.61 0.0 0 1 140.16 174.50   L 162.12 174.50   A 0.61 0.61 0.0 0 0 162.73 173.89   L 162.78 151.86   A 0.61 0.61 0.0 0 0 162.17 151.25   L 128.61 151.25   A 0.61 0.61 0.0 0 0 128.00 151.86   L 128.00 325.16   A 0.61 0.61 0.0 0 0 128.61 325.77   L 162.14 325.74   A 0.61 0.61 0.0 0 0 162.75 325.13   L 162.75 291.57   A 0.61 0.61 0.0 0 0 162.14 290.96   L 140.15 291.02   A 0.61 0.61 0.0 0 1 139.54 290.41   L 139.50 268.15   A 0.61 0.61 0.0 0 1 140.11 267.54   L 162.14 267.54   A 0.61 0.61 0.0 0 0 162.75 266.93   L 162.75 244.82   A 0.61 0.61 0.0 0 0 162.13 244.21   L 140.16 244.45   A 0.61 0.61 0.0 0 1 139.54 243.84   L 139.52 221.61   A 0.61 0.61 0.0 0 1 140.13 221.00   L 162.14 221.00   A 0.61 0.61 0.0 0 0 162.75 220.39   L 162.75 198.36   A 0.61 0.61 0.0 0 0 162.14 197.75   L 140.12 197.75   Z   M 371.78 174.50   A 0.56 0.56 0.0 0 1 372.34 175.05   L 372.56 197.18   A 0.56 0.56 0.0 0 1 372.00 197.75   L 349.82 197.75   A 0.56 0.56 0.0 0 0 349.26 198.31   L 349.23 220.44   A 0.56 0.56 0.0 0 0 349.79 221.00   L 371.94 221.00   A 0.56 0.56 0.0 0 1 372.50 221.56   L 372.50 243.96   A 0.56 0.56 0.0 0 1 371.93 244.52   L 349.82 244.19   A 0.56 0.56 0.0 0 0 349.25 244.75   L 349.25 267.01   A 0.56 0.56 0.0 0 0 349.81 267.57   L 371.86 267.55   A 0.56 0.56 0.0 0 1 372.42 268.11   L 372.54 290.44   A 0.56 0.56 0.0 0 1 371.98 291.00   L 349.82 291.00   A 0.56 0.56 0.0 0 0 349.26 291.56   L 349.24 325.18   A 0.56 0.56 0.0 0 0 349.80 325.74   L 383.44 325.77   A 0.56 0.56 0.0 0 0 384.00 325.21   L 384.00 151.81   A 0.56 0.56 0.0 0 0 383.44 151.25   L 349.81 151.25   A 0.56 0.56 0.0 0 0 349.25 151.81   L 349.25 173.94   A 0.56 0.56 0.0 0 0 349.81 174.50   L 371.78 174.50   Z"></path>
                        <rect
                          x="209.50"
                          y="151.26"
                          width="93.00"
                          height="23.24"
                          rx="0.51"
                        ></rect>
                        <rect
                          x="209.50"
                          y="197.75"
                          width="69.76"
                          height="23.26"
                          rx="0.60"
                        ></rect>
                        <rect
                          x="209.50"
                          y="244.25"
                          width="93.00"
                          height="23.30"
                          rx="0.61"
                        ></rect>
                        <rect
                          x="209.51"
                          y="291.00"
                          width="69.74"
                          height="23.24"
                          rx="0.43"
                        ></rect>
                        <path d="   M 384.43 512.00   L 127.70 512.00   C 117.41 510.51 116.36 503.71 116.33 494.19   Q 116.14 433.39 116.31 372.98   Q 116.31 372.25 117.04 372.26   L 138.84 372.40   A 0.93 0.93 0.0 0 1 139.77 373.34   L 139.70 395.10   Q 139.70 395.56 140.16 395.56   L 371.49 395.48   A 0.97 0.96 -90.0 0 0 372.45 394.51   L 372.26 373.47   Q 372.25 372.25 373.47 372.25   L 394.99 372.25   A 0.64 0.63 -90.0 0 1 395.62 372.89   Q 395.41 435.25 395.52 495.48   C 395.54 504.58 394.03 510.52 384.43 512.00   Z   M 372.49 419.77   Q 372.91 419.51 372.35 419.22   Q 371.93 419.00 371.45 419.00   L 140.25 419.00   Q 139.54 419.00 139.55 419.60   L 139.65 487.70   Q 139.65 488.75 140.70 488.75   L 371.64 488.75   A 0.58 0.57 -90.0 0 0 372.21 488.17   L 372.35 420.02   A 0.29 0.28 76.0 0 1 372.49 419.77   Z"></path>
                        <rect
                          x="-11.73"
                          y="-11.63"
                          transform="translate(256.01,453.87) rotate(0.1)"
                          width="23.46"
                          height="23.26"
                          rx="0.81"
                        ></rect>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Heading */}
            <div
              className="elementor-element elementor-element-6dc49be elementor-widget elementor-widget-heading"
              data-id="6dc49be"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Great Things In Business Are Never Done By One Person.
                  <span className="color--global">
                    They&apos;re Done By A Team Of People.
                  </span>
                </h2>
              </div>
            </div>
            {/* Button */}
            <div
              className="elementor-element elementor-element-cc46738 elementor-align-center elementor-widget elementor-widget-button"
              data-id="cc46738"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href="https://3techy.com/get-quote/"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">
                        Schedule Free Consultation
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div
          className="elementor-element elementor-element-c18b837 e-con-full e-flex e-con e-parent"
          data-id="c18b837"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          {/* Heading Container */}
          <div
            className="elementor-element elementor-element-cd044cf e-flex e-con-boxed e-con e-child"
            data-id="cd044cf"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-4795725 elementor-widget elementor-widget-heading"
                data-id="4795725"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Now, A Word From Our Clients
                    <span className="color--global">.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <TestimonialCarousel />

          {/* Read More Reviews Button */}
          <div
            className="elementor-element elementor-element-e44e1ea elementor-align-center elementor-widget elementor-widget-button"
            data-id="e44e1ea"
            data-element_type="widget"
            data-widget_type="button.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a
                  className="elementor-button elementor-button-link elementor-size-sm"
                  href="https://3techy.com/reviews/"
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">
                      Read More Reviews
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Counter/Stats Section */}
        <div
          className="elementor-element elementor-element-d2249b9 e-grid e-con-boxed e-con e-parent"
          data-id="d2249b9"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <Counter title="Projects Completed" value={870} dataId="99322b2" />
            <Counter title="Busy Bees" value={23} dataId="08db502" />
            <Counter title="Happy Clients" value={712} dataId="da0c808" />
            <Counter title="Cups of Coffee" value={6260} dataId="902069a" />
          </div>
        </div>

        {/* Get In Touch Section */}
        <ContactFormSection
          formId="home_page_form"
          postId="2745"
          formName="New Form"
          refererTitle="Los Angeles Software Development | Mobile App Design & Development"
        />

        {/* Fresh Off The Press - Blog Posts Section */}
        <div
          className="elementor-element elementor-element-e3b91c4 e-flex e-con-boxed e-con e-parent"
          data-id="e3b91c4"
          data-element_type="container"
        >
          <div className="e-con-inner">
            {/* Heading */}
            <div
              className="elementor-element elementor-element-e3017d7 e-con-full e-flex e-con e-child"
              data-id="e3017d7"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-eaeac05 elementor-widget elementor-widget-heading"
                data-id="eaeac05"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Fresh Off The Press<span className="color--global">.</span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div
              className="elementor-element elementor-element-16b0ca2 e-con-full e-flex e-con e-child"
              data-id="16b0ca2"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-0927afc elementor-posts--align-center elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-posts"
                data-id="0927afc"
                data-element_type="widget"
                data-settings='{"classic_columns":"3","classic_columns_tablet":"2","classic_columns_mobile":"1","classic_row_gap":{"unit":"px","size":35,"sizes":[]},"classic_row_gap_tablet":{"unit":"px","size":"","sizes":[]},"classic_row_gap_mobile":{"unit":"px","size":"","sizes":[]}}'
                data-widget_type="posts.classic"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid">
                    {/* Blog Post 1 */}
                    <article className="elementor-post elementor-grid-item post-7701 post type-post status-publish format-standard has-post-thumbnail hentry">
                      <a
                        className="elementor-post__thumbnail__link"
                        href="https://3techy.com/2025/06/21/elevate-security-cloud-solutions-in-la/"
                        tabIndex={-1}
                      >
                        <div className="elementor-post__thumbnail">
                          <Image
                            src="/images/2025/06/elevating-enterprise-security-how-enhanced-cloud-visibility-fuels-custom-software-innovation-for-la-businesses-1.png"
                            alt="Elevate Security: Cloud Solutions in LA"
                            width={300}
                            height={300}
                            className="attachment-medium size-medium wp-image-7702"
                            loading="lazy"
                          />
                        </div>
                      </a>
                      <div className="elementor-post__text">
                        <h3 className="elementor-post__title">
                          <a href="https://3techy.com/2025/06/21/elevate-security-cloud-solutions-in-la/">
                            Elevate Security: Cloud Solutions in LA
                          </a>
                        </h3>
                        <div className="elementor-post__excerpt">
                          <p>
                            Elevating Enterprise Security: How Enhanced Cloud
                            Visibility Fuels Custom Software Innovation for LA
                            Businesses In today&apos;s digital age, the cloud
                          </p>
                        </div>
                      </div>
                    </article>

                    {/* Blog Post 2 */}
                    <article className="elementor-post elementor-grid-item post-7692 post type-post status-publish format-standard has-post-thumbnail hentry">
                      <a
                        className="elementor-post__thumbnail__link"
                        href="https://3techy.com/2025/06/21/cloud-visibility-solutions-for-la-enterprises/"
                        tabIndex={-1}
                      >
                        <div className="elementor-post__thumbnail">
                          <Image
                            src="/images/2025/06/beyond-the-firewall-how-custom-cloud-visibility-solutions-empower-la-enterprises-to-outpace-cyber-threats-1.png"
                            alt="Cloud Visibility Solutions for LA Enterprises"
                            width={300}
                            height={300}
                            className="attachment-medium size-medium wp-image-7693"
                            loading="lazy"
                          />
                        </div>
                      </a>
                      <div className="elementor-post__text">
                        <h3 className="elementor-post__title">
                          <a href="https://3techy.com/2025/06/21/cloud-visibility-solutions-for-la-enterprises/">
                            Cloud Visibility Solutions for LA Enterprises
                          </a>
                        </h3>
                        <div className="elementor-post__excerpt">
                          <p>
                            Beyond the Firewall: How 3Techy&apos;s Custom
                            Cloud Visibility Solutions Empower LA Enterprises to
                            Outpace Cyber Threats In today&apos;s digital
                          </p>
                        </div>
                      </div>
                    </article>

                    {/* Blog Post 3 */}
                    <article className="elementor-post elementor-grid-item post-7685 post type-post status-publish format-standard has-post-thumbnail hentry">
                      <a
                        className="elementor-post__thumbnail__link"
                        href="https://3techy.com/2025/06/20/eco-friendly-web-design-for-las-leaders/"
                        tabIndex={-1}
                      >
                        <div className="elementor-post__thumbnail">
                          <Image
                            src="/images/2025/06/sustainable-software-how-eco-friendly-web-design-drives-roi-for-las-c-level-leaders-1.png"
                            alt="Eco-Friendly Web Design for LA's Leaders"
                            width={300}
                            height={300}
                            className="attachment-medium size-medium wp-image-7686"
                            loading="lazy"
                          />
                        </div>
                      </a>
                      <div className="elementor-post__text">
                        <h3 className="elementor-post__title">
                          <a href="https://3techy.com/2025/06/20/eco-friendly-web-design-for-las-leaders/">
                            Eco-Friendly Web Design for LA&apos;s Leaders
                          </a>
                        </h3>
                        <div className="elementor-post__excerpt">
                          <p>
                            Sustainable Software: How Eco-Friendly Web Design
                            Drives ROI for LA&apos;s C-Level Leaders In the
                            bustling business ecosystem of Lahore,
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Whether You're Ready */}
        <div
          className="elementor-element elementor-element-efe559d e-flex e-con-boxed e-con e-parent"
          data-id="efe559d"
          data-element_type="container"
          data-settings='{"background_background":"gradient"}'
        >
          <div className="e-con-inner">
            <CTASection withWrapper={false} isExternal={true} buttonUrl="https://3techy.com/get-quote/" />
          </div>
        </div>
      </div>
      <Footer />
      <div id="back-to-top" className="hidden">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
