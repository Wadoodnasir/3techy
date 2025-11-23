"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

function GetQuoteHeading() {
  const searchParams = useSearchParams();
  const isContactUs = searchParams.get("source") === "contact";
  
  return (
    <h1 className="elementor-heading-title elementor-size-default">
      {isContactUs ? "Contact Us" : "Get A Quote Within 24 Hours"}
    </h1>
  );
}

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consultation: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };


  return (
    <>
      <Header />
      <div
        data-elementor-type="single-page"
        data-elementor-id="709"
        className="elementor elementor-709 elementor-location-single"
      >
        <div className="elementor-element elementor-element-724465f e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-161676e elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading">
              <div className="elementor-widget-container">
                <Suspense fallback={
                  <h1 className="elementor-heading-title elementor-size-default">
                    Get A Quote Within 24 Hours
                  </h1>
                }>
                  <GetQuoteHeading />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-1f37777 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <main className="elementor-element elementor-element-a455184 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-0b58a01 elementor-widget elementor-widget-theme-post-content">
                <div className="elementor-widget-container">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id="1707"
                    className="elementor elementor-1707"
                  >
                    <div className="elementor-element elementor-element-76b7e96 e-flex e-con-boxed e-con e-parent">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-aaafb9a elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              <span className="color--global">
                                <span style={{ color: "#ffffff" }}>
                                  Get An Expert Estimate And Consultation For
                                  Free
                                </span>
                                .
                              </span>
                            </h2>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-6b19984 elementor-widget elementor-widget-text-editor">
                          <div className="elementor-widget-container">
                            <p>
                              Describe your needs as detailed as possible and
                              we will get back to you within 24 hours.
                            </p>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-4b153c6 custom_form elementor-button-align-stretch elementor-widget elementor-widget-form">
                          <div className="elementor-widget-container">
                            <form
                              className="elementor-form"
                              method="post"
                              id="get_quote_form"
                              name="Lead Form"
                              onSubmit={handleSubmit}
                            >
                              <div className="elementor-form-fields-wrapper elementor-labels-above" style={{ display: 'flex', flexWrap: 'wrap', gap: '0' }}>
                                <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50 elementor-field-required" style={{ flex: '1', minWidth: '48%', marginRight: '2%' }}>
                                  <label
                                    htmlFor="form-field-name"
                                    className="elementor-field-label"
                                  >
                                    Name
                                    <span className="color--global">*</span>
                                  </label>
                                  <input
                                    size={1}
                                    type="text"
                                    name="name"
                                    id="form-field-name"
                                    className="elementor-field elementor-size-sm elementor-field-textual"
                                    placeholder="Name"
                                    required
                                    aria-required="true"
                                    value={formData.name}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required" style={{ flex: '1', minWidth: '48%' }}>
                                  <label
                                    htmlFor="form-field-email"
                                    className="elementor-field-label"
                                  >
                                    Email <span className="color--global">*</span>
                                  </label>
                                  <input
                                    size={1}
                                    type="email"
                                    name="email"
                                    id="form-field-email"
                                    className="elementor-field elementor-size-sm elementor-field-textual"
                                    placeholder="Email"
                                    required
                                    aria-required="true"
                                    value={formData.email}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
                                  <label
                                    htmlFor="form-field-message"
                                    className="elementor-field-label"
                                  >
                                    Message
                                    <span className="color--global">*</span>
                                  </label>
                                  <textarea
                                    className="elementor-field-textual elementor-field elementor-size-sm"
                                    name="message"
                                    id="form-field-message"
                                    rows={5}
                                    placeholder="Describe what you are looking for... (do you need to plan your idea? develop an existing project? get support with something ongoing?)"
                                    required
                                    aria-required="true"
                                    value={formData.message}
                                    onChange={handleChange}
                                  ></textarea>
                                </div>
                                <div className="elementor-field-type-checkbox elementor-field-group elementor-column elementor-field-group-consultation elementor-col-100">
                                  <div className="elementor-field-subgroup">
                                    <span className="elementor-field-option">
                                      <input
                                        type="checkbox"
                                        value="Claim Free Consultation Call ($250 value)"
                                        id="form-field-consultation-0"
                                        name="consultation"
                                        checked={formData.consultation}
                                        onChange={handleChange}
                                      />{" "}
                                      <label htmlFor="form-field-consultation-0">
                                        <span style={{ color: "white" }}>
                                          Claim Free Consultation Call
                                        </span>{" "}
                                        ($250 value)
                                      </label>
                                    </span>
                                  </div>
                                </div>
                                <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                  <button
                                    className="elementor-button elementor-size-lg"
                                    type="submit"
                                  >
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-text">
                                        Send Message
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-element elementor-element-0cb2280 e-con-full e-flex e-con e-parent">
                      <div className="elementor-element elementor-element-9095581 elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            You deserve an award-winning company
                            <span className="color--global">.</span>
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-element elementor-element-f85337a e-grid e-con-boxed e-con e-parent">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-ced43a7 elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <a
                              href="https://clutch.co/profile/bee-techy"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                width={800}
                                height={685}
                                src="/images/global_award_spring_2024.png"
                                className="attachment-large size-large wp-image-6383"
                                alt="Global Award Spring 2024"
                                priority
                              />
                            </a>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-66b1cca elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <a
                              href="https://clutch.co/profile/bee-techy"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                width={759}
                                height={1024}
                                src="/images/top_clutch.co_computer_vision_company_2024_award.png"
                                className="attachment-large size-large wp-image-6382"
                                alt="Top Clutch Computer Vision Company 2024"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-b719023 elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <a
                              href="https://clutch.co/profile/bee-techy"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                width={800}
                                height={685}
                                src="/images/clutch_spring_champion_2024.png"
                                className="attachment-large size-large wp-image-6384"
                                alt="Clutch Spring Champion 2024"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-element elementor-element-4390ea6 e-con-full e-flex e-con e-parent">
                      <div className="elementor-element elementor-element-48202b9 elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Especially A Company trusted by
                            <span style={{ color: "#ffaa16" }}>:</span>
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-element elementor-element-81cd601 e-grid e-con-boxed e-con e-parent">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-584f2d6 elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <Image
                              width={800}
                              height={171}
                              src="/images/microsoft-logo-black-and-white-1-1024x219.png"
                              className="attachment-large size-large wp-image-4217"
                              alt="Microsoft"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-4dc20d2 elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <Image
                              width={800}
                              height={233}
                              src="/images/hubspot-logo-black-and-white-1024x298.png"
                              className="attachment-large size-large wp-image-4300"
                              alt="HubSpot"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-aac7d57 elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <Image
                              width={800}
                              height={178}
                              src="/images/Wordmark_DarkBlue-modified-modified-1024x228.png"
                              className="attachment-large size-large wp-image-4219"
                              alt="Company Logo"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2c5a0e8 elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <Image
                              width={800}
                              height={169}
                              src="/images/Amazon-logo-white.svg-1024x216.png"
                              className="attachment-large size-large wp-image-4286"
                              alt="Amazon"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-1a12377 elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <Image
                              width={800}
                              height={263}
                              src="/images/google-white-logo-1024x337.png"
                              className="attachment-large size-large wp-image-4285"
                              alt="Google"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-c25feb8 elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <Image
                              width={800}
                              height={227}
                              src="/images/shopify.svg"
                              className="attachment-large size-large wp-image-4287"
                              alt="Shopify"
                              loading="lazy"
                            />
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
              {/* All Services Menu */}
              <div
                className="elementor-element elementor-element-24472bb e-flex e-con-boxed e-con e-child"
                data-id="24472bb"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-9d1c7f2 elementor-widget elementor-widget-heading">
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
                          {Object.values(services).map((service) => (
                            <li
                              key={service.slug}
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <Link
                                href={`/${service.slug}`}
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
                            href="tel:+9230344998760"
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
                            <a href="tel:+9230344998760">+92 303 44998760</a>
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
                            href="mailto:3techy.offical@gmail.com"
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
                            <a href="mailto:3techy.offical@gmail.com">
                              3techy.offical@gmail.com
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

