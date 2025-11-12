"use client";

import { useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // YouTube video ID extracted from the original URL
  const videoId = "_h1XmNejD-s";

  const handlePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="elementor-element elementor-element-926d569 e-flex e-con-boxed e-con e-parent"
        data-id="926d569"
        data-element_type="container"
      >
        <div className="e-con-inner">
          {/* Heading Container */}
          <div
            className="elementor-element elementor-element-89dec5a e-flex e-con-boxed e-con e-child"
            data-id="89dec5a"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-02b5681 elementor-widget elementor-widget-heading"
                data-id="02b5681"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    How Can Technology Help Your Business
                    <span className="color--global">?</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* Video/Image Container */}
          <div
            className="elementor-element elementor-element-4eb3351 e-flex e-con-boxed e-con e-child"
            data-id="4eb3351"
            data-element_type="container"
          >
            <div className="e-con-inner">
              {/* Absolute Positioned Container with Play Button and Quote */}
              <div
                className="elementor-element elementor-element-3a6d748 e-con-full e-flex e-con e-child"
                data-id="3a6d748"
                data-element_type="container"
                data-settings='{"background_background":"classic","position":"absolute"}'
              >
                {/* Play Button Icon */}
                <div
                  className="elementor-element elementor-element-b9d7866 elementor-view-stacked elementor-absolute ripple elementor-shape-circle elementor-widget elementor-widget-icon"
                  data-id="b9d7866"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute"}'
                  data-widget_type="icon.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-wrapper">
                      <a
                        className="elementor-icon"
                        href="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJ0eXBlIjoidmlkZW8iLCJ2aWRlb1R5cGUiOiJ5b3V0dWJlIiwidXJsIjoiaHR0cHM6XC9cL3d3dy55b3V0dWJlLmNvbVwvZW1iZWRcL19oMVhtTmVqRC1zP2ZlYXR1cmU9b2VtYmVkIn0%3D"
                        aria-label="Play Video Button"
                        onClick={handlePlayClick}
                      >
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-play"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Quote Heading */}
                <div
                  className="elementor-element elementor-element-48c5914 elementor-widget elementor-widget-heading"
                  data-id="48c5914"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      &quot;YOU GOTTA STAY AHEAD.&quot;
                    </h2>
                  </div>
                </div>
              </div>
              {/* TED-X Talk Image */}
              <div
                className="elementor-element elementor-element-76219cd elementor-widget elementor-widget-image"
                data-id="76219cd"
                data-element_type="widget"
                data-widget_type="image.default"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  className="elementor-widget-container"
                  style={{ textAlign: "center", width: "100%" }}
                >
                  <Image
                    src="/images/Ted-X-Talk.webp"
                    alt="Los Angeles Web Design & Development"
                    width={1000}
                    height={700}
                    className="attachment-large size-large wp-image-512"
                    loading="lazy"
                    decoding="async"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={videoId}
      />
    </>
  );
}
