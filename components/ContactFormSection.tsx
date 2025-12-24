"use client";

import { useState } from "react";
import Link from "next/link";

interface ContactFormSectionProps {
  formId?: string;
  postId?: string;
  formName?: string;
  refererTitle?: string;
}

export default function ContactFormSection({
  formId = "home_page_form",
  postId = "2745",
  formName = "New Form",
  refererTitle = "Los Angeles Software Development | Mobile App Design & Development",
}: ContactFormSectionProps) {
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
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        consultation: (e.target as HTMLInputElement).checked,
      }));
    } else {
      // Extract field name from form_fields[name] format
      const fieldName = name.replace("form_fields[", "").replace("]", "");
      setFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    }
  };

  return (
    <div
      className="elementor-element elementor-element-5173e3f e-flex e-con-boxed e-con e-parent"
      data-id="5173e3f"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-893fd8d e-con-full e-flex e-con e-child"
          data-id="893fd8d"
          data-element_type="container"
        >
          {/* Heading */}
          <div
            className="elementor-element elementor-element-d7dfeca elementor-widget elementor-widget-heading"
            data-id="d7dfeca"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                Get In Touch<span className="color--global">.</span>
              </h2>
            </div>
          </div>

          {/* Description Text */}
          <div
            className="elementor-element elementor-element-b6f2bda elementor-widget elementor-widget-text-editor"
            data-id="b6f2bda"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              <p>
                Describe your needs as detailed as possible and we will get
                back to you the same day.
                <br />
                <br />
                You can also:
              </p>
            </div>
          </div>

          {/* Call Us Icon Box */}
          <div
            className="elementor-element elementor-element-1c67989 elementor-view-stacked elementor-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
            data-id="1c67989"
            data-element_type="widget"
            data-widget_type="icon-box.default"
            style={{ marginTop: "-10px" }}
          >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon elementor-animation-">
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-mobile-alt"
                      viewBox="0 0 320 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <div className="elementor-icon-box-title">
                    <span> Call Us </span>
                  </div>
                  <p className="elementor-icon-box-description">
                    <a aria-label="+92 303 44998760" href="tel:+9230344998760">
                      +92 303 44998760
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Us Icon Box */}
          <div
            className="elementor-element elementor-element-d9722e8 elementor-view-stacked elementor-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
            data-id="d9722e8"
            data-element_type="widget"
            data-widget_type="icon-box.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon elementor-animation-">
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-far-envelope"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <div className="elementor-icon-box-title">
                    <Link href="/contact"> Email Us </Link>
                  </div>
                  <p className="elementor-icon-box-description">
                    <Link href="/contact">
                      <span className="__cf_email__">contact@3techy.com</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div
            className="elementor-element elementor-element-c7b9cea elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons"
            data-id="c7b9cea"
            data-element_type="widget"
            data-widget_type="social-icons.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-social-icons-wrapper">
                <span className="elementor-grid-item">
                  <a
                    className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-a143157"
                    href="https://www.facebook.com/beetechyllc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="elementor-screen-only">Facebook</span>
                    <svg
                      className="e-font-icon-svg e-fab-facebook"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </a>
                </span>
                <span className="elementor-grid-item">
                  <a
                    className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-523c705"
                    href="https://www.instagram.com/3techyoffical/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="elementor-screen-only">Instagram</span>
                    <svg
                      className="e-font-icon-svg e-fab-instagram"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                </span>
                <span className="elementor-grid-item">
                  <a
                    className="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-e358c82"
                    href="https://www.linkedin.com/company/bee-techy-llc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="elementor-screen-only">Linkedin</span>
                    <svg
                      className="e-font-icon-svg e-fab-linkedin"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </a>
                </span>
                <span className="elementor-grid-item">
                  <a
                    className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-b6197c4"
                    href="https://twitter.com/beetechyllc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="elementor-screen-only">Twitter</span>
                    <svg
                      className="e-font-icon-svg e-fab-twitter"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="elementor-element elementor-element-3f8411c e-con-full e-flex e-con e-child"
          data-id="3f8411c"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-decbbbe custom_form elementor-button-align-stretch elementor-widget elementor-widget-form"
            data-id="decbbbe"
            data-element_type="widget"
            id={formId}
            data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
            data-widget_type="form.default"
          >
            <div className="elementor-widget-container">
              <form
                className="elementor-form"
                method="post"
                name={formName}
                noValidate
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="post_id" value={postId} />
                <input type="hidden" name="form_id" value="decbbbe" />
                <input
                  type="hidden"
                  name="referer_title"
                  value={refererTitle}
                />
                <input type="hidden" name="queried_id" value={postId} />

                <div className="elementor-form-fields-wrapper elementor-labels-">
                  {/* Name Field */}
                  <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50 elementor-field-required">
                    <label
                      htmlFor={`form-field-name-${formId}`}
                      className="elementor-field-label elementor-screen-only"
                    >
                      Name
                    </label>
                    <input
                      size={1}
                      type="text"
                      name="form_fields[name]"
                      id={`form-field-name-${formId}`}
                      className="elementor-field elementor-size-sm elementor-field-textual"
                      placeholder="Name"
                      required
                      aria-required="true"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
                    <label
                      htmlFor={`form-field-email-${formId}`}
                      className="elementor-field-label elementor-screen-only"
                    >
                      Email
                    </label>
                    <input
                      size={1}
                      type="email"
                      name="form_fields[email]"
                      id={`form-field-email-${formId}`}
                      className="elementor-field elementor-size-sm elementor-field-textual"
                      placeholder="Email"
                      required
                      aria-required="true"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                    <label
                      htmlFor={`form-field-message-${formId}`}
                      className="elementor-field-label elementor-screen-only"
                    >
                      Message
                    </label>
                    <textarea
                      className="elementor-field-textual elementor-field elementor-size-sm"
                      name="form_fields[message]"
                      id={`form-field-message-${formId}`}
                      rows={5}
                      placeholder="Describe what you are looking for... (do you need to plan your idea? develop an existing project? get support with something ongoing?)"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* Free Consultation Checkbox */}
                  <div className="elementor-field-type-checkbox elementor-field-group elementor-column elementor-field-group-consultation elementor-col-100">
                    <label
                      htmlFor={`form-field-consultation-${formId}`}
                      className="elementor-field-label elementor-screen-only"
                    >
                      Free Consultation
                    </label>
                    <div className="elementor-field-subgroup">
                      <span className="elementor-field-option">
                        <input
                          type="checkbox"
                          value='<span style="color: white;">Claim free consultation call</span> ($250 value)'
                          id={`form-field-consultation-0-${formId}`}
                          name="form_fields[consultation]"
                          checked={formData.consultation}
                          onChange={handleChange}
                        />
                        <label htmlFor={`form-field-consultation-0-${formId}`}>
                          <span style={{ color: "white" }}>
                            Claim free consultation call
                          </span>{" "}
                          ($250 value)
                        </label>
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                    <button
                      className="elementor-button elementor-size-sm"
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
    </div>
  );
}

