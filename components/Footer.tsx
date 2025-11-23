import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="elementor elementor-706 elementor-location-footer">
      <footer
        className="elementor-element elementor-element-0a63204 e-grid e-con-boxed e-con e-parent"
        data-id="0a63204"
        data-element_type="container"
      >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-4cc420a e-flex e-con-boxed e-con e-child"
          data-id="4cc420a"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-b7c997e elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
              data-id="b7c997e"
              data-element_type="widget"
              aria-label="Home"
              data-widget_type="theme-site-logo.default"
            >
              <div className="elementor-widget-container">
                <Link href="https://xyz.com" aria-label="Home">
                  <Image
                    src="/images/Bee-Techy-Landscape-Color-Icon-White-Text-1.png"
                    alt="3Techy Logo"
                    width={534}
                    height={119}
                    className="attachment-full size-full wp-image-4973"
                  />
                </Link>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-0d52f5e elementor-widget elementor-widget-text-editor"
              data-id="0d52f5e"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  3Techy specializes in designing, developing, and
                  implementing custom software for winning companies.
                </p>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-f1907a9 elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons"
              data-id="f1907a9"
              data-element_type="widget"
            >
              <div className="elementor-widget-container">
                <div className="elementor-social-icons-wrapper elementor-grid">
                  <span className="elementor-grid-item">
                    <a
                      className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-a143157"
                      href="https://www.facebook.com/beetechy.co/"
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
                      href="https://www.instagram.com/beetechy/"
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
        </div>
        <div
          className="elementor-element elementor-element-5e82cd4 e-flex e-con-boxed e-con e-child"
          data-id="5e82cd4"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-0f70534 elementor-widget elementor-widget-heading"
              data-id="0f70534"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <span className="elementor-heading-title elementor-size-default">
                  Explore
                </span>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-750acc4 elementor-nav-menu__align-start elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu"
              data-id="750acc4"
              data-element_type="widget"
              data-settings='{"layout":"vertical","submenu_icon":{"value":"<svg class=\"e-font-icon-svg e-fas-caret-down\" viewBox=\"0 0 320 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\"></path></svg>","library":"fa-solid"}}'
              data-widget_type="nav-menu.default"
            >
              <div className="elementor-widget-container">
                <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-underline e--animation-grow">
                  <ul id="menu-1-750acc4" className="elementor-nav-menu sm-vertical">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-749">
                      <Link href="/about" className="elementor-item">About Us</Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2641">
                      <Link href="https://xyz.com/service-areas/" className="elementor-item">
                        Service Areas
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2935">
                      <Link href="https://xyz.com/industries-serviced/" className="elementor-item">
                        Industries
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-751">
                      <Link href="/projects" className="elementor-item">Our Portfolio</Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-753">
                      <Link href="https://xyz.com/contact/" className="elementor-item">
                        Contact Us
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-755">
                      <Link href="/blog" className="elementor-item">Blog</Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6256">
                      <Link
                        href="https://xyz.com/designer-referral-program/"
                        className="elementor-item"
                      >
                        Referral Program
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-6257">
                      <Link
                        rel="privacy-policy"
                        href="https://xyz.com/privacy-policy/"
                        className="elementor-item"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7716">
                      <Link
                        href="https://xyz.com/apply-to-work-at-3techy/"
                        className="elementor-item"
                      >
                        Apply to Work At 3Techy
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-5368f85 e-flex e-con-boxed e-con e-child"
          data-id="5368f85"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-99ea977 elementor-widget elementor-widget-heading"
              data-id="99ea977"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <span className="elementor-heading-title elementor-size-default">
                  Contact
                </span>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-cc1ba00 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="cc1ba00"
              data-element_type="widget"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg e-fas-map-marker-alt"
                        viewBox="0 0 384 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                    </span>
                    <span className="elementor-icon-list-text">
                      Model Link Road, Model Town<br />Lahore, Pakistan
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a href="tel:+9230344998760">
                      <span className="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-phone-alt"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">+92 303 44998760</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a href="mailto:3techy.offical@gmail.com">
                      <span className="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-envelope"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">3techy.offical@gmail.com</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a href="https://xyz.com">
                      <span className="elementor-icon-list-icon">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-link"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">xyz.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-bf8dddd e-flex e-con-boxed e-con e-child"
          data-id="bf8dddd"
          data-element_type="container"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-043edae elementor-widget elementor-widget-heading"
              data-id="043edae"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <span className="elementor-heading-title elementor-size-default">
                  Free Secrets
                </span>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-5a08a7c elementor-button-align-stretch elementor-widget elementor-widget-form"
              data-id="5a08a7c"
              data-element_type="widget"
              id="newsletter_form"
              data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"20","step_type":"number_text","step_icon_shape":"circle"}'
              data-widget_type="form.default"
            >
              <div className="elementor-widget-container">
                <form
                  className="elementor-form"
                  method="post"
                  id="newsletter_form"
                  name="Newsletter"
                >
                  <input type="hidden" name="post_id" value="706" />
                  <input type="hidden" name="form_id" value="5a08a7c" />
                  <input
                    type="hidden"
                    name="referer_title"
                    value="Lahore Software Development | Mobile App Design & Development"
                  />
                  <input type="hidden" name="queried_id" value="2745" />
                  <div className="elementor-form-fields-wrapper elementor-labels-">
                    <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-subscribe_email elementor-col-70 elementor-field-required">
                      <label
                        htmlFor="form-field-subscribe_email"
                        className="elementor-field-label elementor-screen-only"
                      >
                        Email
                      </label>
                      <input
                        size={1}
                        type="email"
                        name="form_fields[subscribe_email]"
                        id="form-field-subscribe_email"
                        className="elementor-field elementor-size-sm elementor-field-textual"
                        placeholder="Email"
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-20 e-form__buttons">
                      <button className="elementor-button elementor-size-sm" type="submit">
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-envelope"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                            </svg>
                            <span className="elementor-screen-only">Submit</span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-fa6bad4 elementor-widget elementor-widget-text-editor"
              data-id="fa6bad4"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  We&#8217;ll send you valuable information every week about
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

