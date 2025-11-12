'use client'

import { useState, useEffect } from 'react'

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [hubspotLoaded, setHubspotLoaded] = useState(false)

  useEffect(() => {
    // Hide HubSpot's default chat button if it exists
    const hideHubspotButton = () => {
      // Find HubSpot's button (it won't have our custom class)
      const hubspotButtons = document.querySelectorAll(
        '.IconLauncher__BaseLauncher-fiVgfM:not(.reagan--widget-loaded)'
      )
      hubspotButtons.forEach((btn) => {
        ;(btn as HTMLElement).style.display = 'none'
      })
    }

    // Check if HubSpot Conversations is loaded and sync state
    const checkHubSpot = () => {
      if (window.HubSpotConversations) {
        setHubspotLoaded(true)
        hideHubspotButton()
        
        // Listen for HubSpot chat open/close events
        try {
          // HubSpot may expose events differently, so we'll check for widget state
          const hubspotWidget = document.querySelector('[data-hubspot-chat]')
          if (hubspotWidget) {
            // HubSpot widget exists, sync our button state
            const observer = new MutationObserver(() => {
              const isHubspotOpen = hubspotWidget.getAttribute('data-state') === 'open'
              setIsOpen(isHubspotOpen)
            })
            observer.observe(hubspotWidget, { attributes: true, attributeFilter: ['data-state'] })
            
            return () => observer.disconnect()
          }
        } catch (e) {
          // HubSpot API might not be available yet
        }
      }
    }

    // Hide HubSpot button immediately
    hideHubspotButton()

    // Check immediately
    checkHubSpot()

    // Check periodically in case HubSpot loads later
    const interval = setInterval(() => {
      hideHubspotButton()
      checkHubSpot()
    }, 1000)

    // Also observe DOM for new buttons added by HubSpot
    const observer = new MutationObserver(() => {
      hideHubspotButton()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Cleanup
    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    
    // If HubSpot is loaded, use its API
    if (window.HubSpotConversations) {
      if (isOpen) {
        window.HubSpotConversations.widget.close()
      } else {
        window.HubSpotConversations.widget.open()
      }
    }
  }

  return (
    <>
      <button
        aria-label="Open live chat"
        aria-haspopup="dialog"
        className="IconLauncher__BaseLauncher-fiVgfM IconLauncher__ShapedLauncher-gZzRBO jrgLYt reagan--widget-loaded"
        style={{ backgroundColor: 'rgb(255, 186, 65)' }}
        onClick={toggleChat}
      >
        <div
          direction={isOpen ? 'left' : 'right'}
          className={`TwistFadeTransition__TransitionComponent-hXIVqG ${
            isOpen ? 'iRVkwX' : 'dJcSNz'
          }`}
        >
          <div className="IconLauncher__LauncherIcon-eqBHFy dhXRwb">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 19 18"
                className="conversations-visitor-close-icon"
              >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g fill="#33475b" transform="translate(-927 -991) translate(900.277 962)">
                    <g transform="translate(27 29)">
                      <path d="M10.627 9.013l6.872 6.873.708.707-1.415 1.414-.707-.707-6.872-6.872L2.34 17.3l-.707.707L.22 16.593l.707-.707L7.8 9.013.946 2.161l-.707-.708L1.653.04l.707.707L9.213 7.6 16.066.746l.707-.707 1.414 1.414-.707.708-6.853 6.852z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            ) : (
              <div className="VizExIcon__IconWrapper-iRZCFt fzWkmv">
                <svg
                  width="32"
                  height="30"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#33475b"
                >
                  <g clipPath="url(#messages__clip0_14307_15730)">
                    <path fillOpacity="0.01" d="M0 0h24v24H0z"></path>
                    <mask
                      id="messages__b"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      style={{ maskType: 'alpha' }}
                    >
                      <g clipPath="url(#messages__clip1_14307_15730)">
                        <g clipPath="url(#messages__clip2_14307_15730)">
                          <mask
                            id="messages__a"
                            maskUnits="userSpaceOnUse"
                            x="1"
                            y="0"
                            width="23"
                            height="23"
                            style={{ maskType: 'alpha' }}
                          >
                            <path d="M2.571 22.286h-.008.008z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.143 4.286c1.414 0 2.571 1.157 2.571 2.571v8.572c0 1.414-1.157 2.571-2.571 2.571H7.209l-4.037 4.037c-.162.162-.384.247-.606.248-.11 0-.219-.017-.32-.068-.317-.128-.532-.445-.532-.788V6.857c0-1.414 1.157-2.571 2.572-2.571h12.857zM4.286 6c-.472 0-.857.386-.857.857v12.506l2.82-2.82c.162-.163.377-.249.608-.249h10.286c.471 0 .857-.385.857-.857V6.866c0-.472-.386-.857-.857-.857H4.286V6z"
                            ></path>
                            <path d="M20.571.857c1.415 0 2.572 1.158 2.572 2.572V12c0 .472-.386.857-.857.857-.472 0-.857-.385-.857-.857V3.43c0-.472-.386-.857-.858-.857H7.714c-.471 0-.857-.386-.857-.857 0-.472.386-.858.857-.858h12.857z"></path>
                          </mask>
                          <g mask="url(#messages__a)">
                            <path d="M-1.714-1.714h27.429v27.429H-1.714z"></path>
                          </g>
                        </g>
                      </g>
                    </mask>
                    <g mask="url(#messages__b)">
                      <path d="M0 0h24v24H0V0z"></path>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="messages__clip0_14307_15730">
                      <path d="M0 0h24v24H0z"></path>
                    </clipPath>
                    <clipPath id="messages__clip1_14307_15730">
                      <path d="M0 0h24v24H0z"></path>
                    </clipPath>
                    <clipPath id="messages__clip2_14307_15730">
                      <path
                        transform="translate(-1.714 -1.714)"
                        d="M0 0h27.429v27.429H0z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        </div>
      </button>
    </>
  )
}

// Extend Window interface for HubSpot
declare global {
  interface Window {
    HubSpotConversations?: {
      widget: {
        open: () => void
        close: () => void
      }
    }
  }
}

