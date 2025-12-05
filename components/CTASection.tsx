import Link from "next/link";

interface CTASectionProps {
  /**
   * Whether to wrap the CTA in a flex container with centered alignment
   * @default true
   */
  withWrapper?: boolean;
  /**
   * The URL for the CTA button
   * @default "/get-quote"
   */
  buttonUrl?: string;
  /**
   * Whether the button URL is external (uses <a> tag) or internal (uses Next.js Link)
   * @default false
   */
  isExternal?: boolean;
}

export default function CTASection({
  withWrapper = true,
  buttonUrl = "/get-quote",
  isExternal = false,
}: CTASectionProps) {
  const content = (
    <div
      className="elementor-element elementor-element-b46b5ae e-flex e-con-boxed e-con e-child"
      data-id="b46b5ae"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-285a5ce elementor-widget elementor-widget-heading"
          data-id="285a5ce"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              Whether You&apos;re Ready Or Want To Explore Possibilities,
              Let&apos;s Get In Touch.
            </h2>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-9dd9060 elementor-widget elementor-widget-button"
          data-id="9dd9060"
          data-element_type="widget"
          data-widget_type="button.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              {isExternal ? (
                <a
                  className="elementor-button elementor-button-link elementor-size-sm"
                  href={buttonUrl}
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">
                      Schedule Free Consultation
                    </span>
                  </span>
                </a>
              ) : (
                <Link
                  className="elementor-button elementor-button-link elementor-size-sm"
                  href={buttonUrl}
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">
                      Schedule Free Consultation
                    </span>
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (withWrapper) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {content}
      </div>
    );
  }

  return content;
}

