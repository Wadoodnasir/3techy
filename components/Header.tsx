"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isProjectsPage = pathname === "/projects";
  const isReviewsPage = pathname === "/reviews";
  const isJobOpeningsPage = pathname === "/job-openings";

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop dropdown with 5-second delay
  useEffect(() => {
    const initDropdown = () => {
      const servicesMenuItems = document.querySelectorAll(
        ".menu-item-has-children"
      );

      servicesMenuItems.forEach((menuItem) => {
        const submenu = menuItem.querySelector(".sub-menu") as HTMLElement;
        if (!submenu) return;

        // Ensure dropdown starts hidden
        submenu.classList.remove("dropdown-visible");
        submenu.style.display = "none";

        const showDropdown = () => {
          if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
            dropdownTimeoutRef.current = null;
          }
          submenu.style.display = "block";
          submenu.style.setProperty("display", "block", "important");
          // Use requestAnimationFrame to ensure smooth animation
          requestAnimationFrame(() => {
            submenu.classList.add("dropdown-visible");
          });
        };

        const hideDropdown = () => {
          if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
            dropdownTimeoutRef.current = null;
          }
          dropdownTimeoutRef.current = setTimeout(() => {
            // Double check that mouse is not over menu item or dropdown
            const isOverMenuItem = menuItem.matches(":hover");
            const isOverSubmenu = submenu.matches(":hover");
            if (!isOverMenuItem && !isOverSubmenu) {
              // Remove visible class first to trigger animation
              submenu.classList.remove("dropdown-visible");
              // Wait for animation to complete before hiding
              setTimeout(() => {
                if (!submenu.classList.contains("dropdown-visible")) {
                  submenu.style.display = "none";
                }
              }, 300); // Match CSS transition duration
            }
            dropdownTimeoutRef.current = null;
          }, 300);
        };

        // Show dropdown on hover over Services
        menuItem.addEventListener("mouseenter", showDropdown);

        // Hide dropdown with delay when leaving Services
        menuItem.addEventListener("mouseleave", (e) => {
          const mouseEvent = e as MouseEvent;
          const relatedTarget = mouseEvent.relatedTarget as HTMLElement;
          if (
            relatedTarget &&
            (submenu.contains(relatedTarget) || relatedTarget === submenu)
          ) {
            return;
          }
          hideDropdown();
        });

        // Keep dropdown open when hovering over it
        submenu.addEventListener("mouseenter", showDropdown);

        // Hide dropdown with delay when leaving dropdown
        submenu.addEventListener("mouseleave", (e) => {
          const mouseEvent = e as MouseEvent;
          const relatedTarget = mouseEvent.relatedTarget as HTMLElement;
          // Only cancel hide if moving back to Services menu item
          if (
            relatedTarget &&
            (menuItem.contains(relatedTarget) || relatedTarget === menuItem)
          ) {
            // Moving back to Services, don't hide
            return;
          }
          // Moving away from both Services and dropdown, start hide timer
          hideDropdown();
        });
      });
    };

    // Initialize dropdown after a short delay to ensure DOM is ready
    const timer = setTimeout(initDropdown, 100);

    return () => {
      clearTimeout(timer);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Debug: Log when menu state changes and ensure dropdown is visible
  useEffect(() => {
    console.log('Menu state changed, isMenuOpen:', isMenuOpen);
    // Find the main dropdown nav (not the submenu)
    const dropdown = document.querySelector('nav.elementor-nav-menu--dropdown');
    if (dropdown) {
      console.log('Dropdown element found:', dropdown);
      console.log('Dropdown classes:', dropdown.className);
      console.log('Has menu-open class:', dropdown.classList.contains('menu-open'));
      
      // Force update display based on state
      if (dropdown instanceof HTMLElement) {
        if (isMenuOpen) {
          dropdown.classList.add('menu-open');
          // Force CSS properties with !important via setProperty
          dropdown.style.setProperty('display', 'block', 'important');
          dropdown.style.setProperty('visibility', 'visible', 'important');
          dropdown.style.setProperty('position', 'fixed', 'important');
          dropdown.style.setProperty('top', '80px', 'important');
          dropdown.style.setProperty('left', '0', 'important');
          dropdown.style.setProperty('right', '0', 'important');
          dropdown.style.setProperty('width', '100%', 'important');
          dropdown.style.setProperty('z-index', '10000', 'important');
          dropdown.style.setProperty('background-color', '#fff', 'important');
          dropdown.style.setProperty('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)', 'important');
          dropdown.style.setProperty('padding', '20px 0', 'important');
          dropdown.style.setProperty('margin', '0', 'important');
          dropdown.style.setProperty('opacity', '1', 'important');
          dropdown.style.setProperty('transform', 'none', 'important');
          console.log('Menu opened - applied all styles');
          console.log('Dropdown height:', dropdown.offsetHeight);
          console.log('Dropdown width:', dropdown.offsetWidth);
          console.log('Dropdown scrollHeight:', dropdown.scrollHeight);
        } else {
          dropdown.style.setProperty('display', 'none', 'important');
          dropdown.classList.remove('menu-open');
          console.log('Menu closed - set display none and removed menu-open class');
        }
        console.log('Computed display:', window.getComputedStyle(dropdown).display);
        console.log('Computed visibility:', window.getComputedStyle(dropdown).visibility);
        console.log('Computed position:', window.getComputedStyle(dropdown).position);
        console.log('Computed top:', window.getComputedStyle(dropdown).top);
        console.log('Computed z-index:', window.getComputedStyle(dropdown).zIndex);
        console.log('Computed opacity:', window.getComputedStyle(dropdown).opacity);
        console.log('Computed height:', window.getComputedStyle(dropdown).height);
      }
    } else {
      console.log('Dropdown element NOT found!');
    }
  }, [isMenuOpen]);

  // Handle submenu toggles in mobile dropdown
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleSubmenuToggle = (e: Event) => {
      const target = e.target as HTMLElement;
      const menuItem = target.closest('.menu-item-has-children');
      if (!menuItem) return;

      // Only handle clicks within the mobile dropdown menu
      const dropdownMenu = menuItem.closest('.elementor-nav-menu--dropdown');
      if (!dropdownMenu) return;

      e.preventDefault();
      e.stopPropagation();
      menuItem.classList.toggle('submenu-open');
    };

    // Add click listeners to all submenu parent links in dropdown
    // Use setTimeout to ensure DOM is ready
    const timer = setTimeout(() => {
      const submenuParents = document.querySelectorAll(
        '.elementor-nav-menu--dropdown .menu-item-has-children > a'
      );
      submenuParents.forEach((link) => {
        link.addEventListener('click', handleSubmenuToggle);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const submenuParents = document.querySelectorAll(
        '.elementor-nav-menu--dropdown .menu-item-has-children > a'
      );
      submenuParents.forEach((link) => {
        link.removeEventListener('click', handleSubmenuToggle);
      });
    };
  }, [isMenuOpen]);

  return (
    <div
      data-elementor-type="header"
      data-elementor-id="703"
      className="elementor elementor-703 elementor-location-header"
      data-elementor-post-type="elementor_library"
    >
      <header
        className={`elementor-element elementor-element-aea08fd e-con-full sticky-header-container e-flex e-con e-parent ${
          isSticky ? "sticky" : ""
        }`}
        data-id="aea08fd"
        data-element_type="container"
        id="header"
        data-settings='{"sticky":"top","sticky_effects_offset":400,"motion_fx_motion_fx_scrolling":"yes","motion_fx_devices":["desktop","tablet","mobile"],"sticky_on":["desktop","tablet","mobile"],"sticky_offset":0}'
      >
        <div
          className="elementor-element elementor-element-6924e4b logo elementor-widget__width-initial elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
          data-id="6924e4b"
          data-element_type="widget"
          id="logo"
          data-widget_type="theme-site-logo.default"
        >
          <div className="elementor-widget-container">
            <Link href="/" aria-label="3Techy Logo">
              <Image
                src="/images/logo.svg"
                alt="3Techy Logo"
                width={534}
                height={119}
                priority
                className="attachment-full size-full wp-image-4973"
              />
            </Link>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-0b1d9f9 elementor-nav-menu__align-center elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
          data-id="0b1d9f9"
          data-element_type="widget"
          data-settings='{"full_width":"stretch","submenu_icon":{"value":"<svg class=\\"e-font-icon-svg e-fas-angle-down\\" viewBox=\\"0 0 320 512\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"></path></svg>","library":"fa-solid"},"layout":"horizontal","toggle":"burger"}'
          data-widget_type="nav-menu.default"
        >
          <div className="elementor-widget-container">
            <link
              rel="stylesheet"
              href="/css/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css"
            />
            <nav
              className={`elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade ${
                isMenuOpen ? "menu-open" : ""
              }`}
            >
              <ul id="menu-1-0b1d9f9" className="elementor-nav-menu">
                <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1018 ${isAboutPage ? "current-menu-item" : ""}`}>
                  <Link href="/about" className={`elementor-item ${isAboutPage ? "elementor-item-active" : ""}`}>
                    About
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-124">
                  <a href="#" className="elementor-item elementor-item-anchor">
                    Services
                    <svg
                      className="dropdown-arrow"
                      viewBox="0 0 12 8"
                      aria-hidden="true"
                    >
                      <polyline points="1 1 6 6 11 1" />
                    </svg>
                  </a>
                  <ul className="sub-menu elementor-nav-menu--dropdown">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-989">
                      <Link
                        href="/saas-design-development"
                        className="elementor-sub-item"
                      >
                        SaaS Design & Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-986">
                      <Link
                        href="/artificial-intelligence-development-automation"
                        className="elementor-sub-item"
                      >
                        Artificial Intelligence Development & Automation
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-988">
                      <Link
                        href="/mobile-app-design-development"
                        className="elementor-sub-item"
                      >
                        Mobile App Design & Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1393">
                      <Link
                        href="/ios-application-development-design"
                        className="elementor-sub-item"
                      >
                        iOS Application Development & Design
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1394">
                      <Link
                        href="/android-application-development-design"
                        className="elementor-sub-item"
                      >
                        Android Application Development & Design
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1392">
                      <Link
                        href="/blockchain-web3-development"
                        className="elementor-sub-item"
                      >
                        Blockchain & Web3 Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1395">
                      <Link
                        href="/web-application-development"
                        className="elementor-sub-item"
                      >
                        Web Application Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1396">
                      <Link
                        href="/progressive-web-app-pwa-development"
                        className="elementor-sub-item"
                      >
                        Progressive Web App (PWA) Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-990">
                      <Link
                        href="/ux-ui-design"
                        className="elementor-sub-item"
                      >
                        UX/UI Design
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-125 ${isProjectsPage ? "current-menu-item" : ""}`}>
                  <Link
                    href="/projects"
                    className={`elementor-item ${isProjectsPage ? "elementor-item-active" : ""}`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-2863 ${isReviewsPage ? "current-menu-item" : ""}`}>
                  <Link href="/reviews" className={`elementor-item ${isReviewsPage ? "elementor-item-active" : ""}`}>
                    Reviews
                  </Link>
                </li>
                <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-7717 ${isJobOpeningsPage ? "current-menu-item" : ""}`}>
                  <Link
                    href="/job-openings"
                    className={`elementor-item ${isJobOpeningsPage ? "elementor-item-active" : ""}`}
                  >
                    Careers
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-731">
                  <Link href="/get-quote?source=contact" className="elementor-item">
                    Contact Us
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1747">
                  <Link
                    href="/get-quote"
                    className="elementor-item"
                  >
                    <b>Get A Quote</b>
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className="elementor-menu-toggle"
              role="button"
              tabIndex={0}
              aria-label="Menu Toggle"
              aria-expanded={isMenuOpen}
              onClick={() => {
                console.log('Toggle clicked, isMenuOpen:', isMenuOpen);
                setIsMenuOpen(!isMenuOpen);
                console.log('After toggle, new state will be:', !isMenuOpen);
              }}
            >
              <span className="elementor-menu-toggle__icon--open">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="19"
                  viewBox="0 0 27 19"
                >
                  <title>Menu</title>
                  <rect x="13" y="16" width="14" height="3"></rect>
                  <rect width="27" height="3"></rect>
                  <rect y="8" width="27" height="3"></rect>
                </svg>
              </span>
              <svg
                aria-hidden="true"
                role="presentation"
                className="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
              </svg>
              <span className="elementor-screen-only">Menu</span>
            </div>
            <nav
              className={`elementor-nav-menu--dropdown elementor-nav-menu__container ${
                isMenuOpen ? "menu-open" : ""
              }`}
              aria-hidden={!isMenuOpen}
              style={isMenuOpen ? {} : { display: 'none' }}
            >
              <ul id="menu-2-0b1d9f9" className="elementor-nav-menu">
                <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-1018 ${isAboutPage ? "current-menu-item" : ""}`}>
                  <Link href="/about" className={`elementor-item ${isAboutPage ? "elementor-item-active" : ""}`} tabIndex={isMenuOpen ? 0 : -1}>
                    About
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-124">
                  <a 
                    href="#" 
                    className="elementor-item elementor-item-anchor" 
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const menuItem = e.currentTarget.closest('.menu-item-has-children');
                      if (menuItem) {
                        menuItem.classList.toggle('submenu-open');
                      }
                    }}
                  >
                    Services
                    <svg
                      className="dropdown-arrow"
                      viewBox="0 0 12 8"
                      aria-hidden="true"
                    >
                      <polyline points="1 1 6 6 11 1" />
                    </svg>
                  </a>
                  <ul className="sub-menu elementor-nav-menu--dropdown">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-989">
                      <Link
                        href="/saas-design-development"
                        className="elementor-sub-item"
                        tabIndex={isMenuOpen ? 0 : -1}
                      >
                        SaaS Design & Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-986">
                      <Link
                        href="/artificial-intelligence-development-automation"
                        className="elementor-sub-item"
                        tabIndex={isMenuOpen ? 0 : -1}
                      >
                        Artificial Intelligence Development & Automation
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-988">
                      <Link
                        href="/mobile-app-design-development"
                        className="elementor-sub-item"
                        tabIndex={isMenuOpen ? 0 : -1}
                      >
                        Mobile App Design & Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1393">
                      <Link
                        href="/ios-application-development-design"
                        className="elementor-sub-item"
                        tabIndex={isMenuOpen ? 0 : -1}
                      >
                        iOS Application Development & Design
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1394">
                      <Link
                        href="/android-application-development-design"
                        className="elementor-sub-item"
                        tabIndex={isMenuOpen ? 0 : -1}
                      >
                        Android Application Development & Design
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1392">
                      <Link
                        href="/blockchain-web3-development"
                        className="elementor-sub-item"
                        tabIndex={isMenuOpen ? 0 : -1}
                      >
                        Blockchain & Web3 Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1395">
                      <Link
                        href="/web-application-development"
                        className="elementor-sub-item"
                        tabIndex={isMenuOpen ? 0 : -1}
                      >
                        Web Application Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1396">
                      <Link
                        href="/progressive-web-app-pwa-development"
                        className="elementor-sub-item"
                        tabIndex={isMenuOpen ? 0 : -1}
                      >
                        Progressive Web App (PWA) Development
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-990">
                      <Link
                        href="/ux-ui-design"
                        className="elementor-sub-item"
                        tabIndex={isMenuOpen ? 0 : -1}
                      >
                        UX/UI Design
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-125 ${isProjectsPage ? "current-menu-item" : ""}`}>
                  <Link
                    href="/projects"
                    className={`elementor-item ${isProjectsPage ? "elementor-item-active" : ""}`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-2863 ${isReviewsPage ? "current-menu-item" : ""}`}>
                  <Link href="/reviews" className={`elementor-item ${isReviewsPage ? "elementor-item-active" : ""}`}>
                    Reviews
                  </Link>
                </li>
                <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-7717 ${isJobOpeningsPage ? "current-menu-item" : ""}`}>
                  <Link
                    href="/job-openings"
                    className={`elementor-item ${isJobOpeningsPage ? "elementor-item-active" : ""}`}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    Careers
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-731">
                  <Link href="/get-quote?source=contact" className="elementor-item">
                    Contact Us
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1747">
                  <Link
                    href="/get-quote"
                    className="elementor-item"
                  >
                    <b>Get A Quote</b>
                  </Link>
                </li>
              </ul>
                </nav>
              </div>
            </div>
        <div
          className="elementor-element elementor-element-ccb4655 elementor-position-left elementor-hidden-tablet elementor-hidden-mobile elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
          data-id="ccb4655"
          data-element_type="widget"
          data-widget_type="icon-box.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-icon-box-wrapper">
              <div className="elementor-icon-box-icon">
                <span className="elementor-icon elementor-animation-">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0.00 0.00 42.00 39.00"
                  >
                    <path
                      fill="#4c4d4d"
                      fillOpacity="0.306"
                      d="M 16.16 0.00  L 18.28 0.00  Q 23.20 0.64 25.35 1.81  C 37.78 8.58 36.13 23.32 23.06 27.66  C 17.31 29.57 7.71 28.51 1.58 28.46  A 1.34 1.34 0.0 0 1 0.70 26.11  L 3.45 23.68  A 0.66 0.66 0.0 0 0 3.51 22.76  C -5.69 12.05 4.82 0.87 16.16 0.00  Z"
                    ></path>
                    <path
                      fill="#ffaa17"
                      d="M 42.00 23.81  L 42.00 26.06  Q 41.22 29.97 38.75 33.27  Q 38.42 33.71 38.81 34.10  L 42.00 37.28  L 42.00 39.00  L 23.22 39.00  Q 15.11 38.11 10.23 32.00  A 0.55 0.55 0.0 0 1 10.73 31.11  C 22.35 32.63 35.12 28.17 36.78 14.99  A 0.32 0.32 0.0 0 1 37.32 14.80  Q 41.30 18.60 42.00 23.81  Z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="elementor-icon-box-content">
                <div className="elementor-icon-box-title">
                  <span> Call Us Now </span>
                </div>
                <p className="elementor-icon-box-description">
                  <a href="tel:+9230344998760">+92 303 44998760</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
