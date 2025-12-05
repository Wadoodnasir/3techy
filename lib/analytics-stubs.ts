/**
 * Analytics Stub Functions
 * These functions replace external analytics calls with no-op stubs
 */

// Google Analytics / GTM Stub
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
    _hsq: any[]
    fbq: (...args: any[]) => void
    lintrk: {
      (...args: any[]): void
      q?: any[]
    }
    Sentry: any
    trackingFunctions: any
    reb2b: any
  }
}

export function initAnalyticsStubs() {
  // Google Analytics / GTM
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      // Stub - no external calls
    }

    // HubSpot
    window._hsq = window._hsq || []
    const originalPush = Array.prototype.push
    window._hsq.push = function () {
      // Stub - no external calls, but maintain array functionality
      return originalPush.apply(window._hsq, arguments as any)
    }

    // Facebook Pixel
    window.fbq = function () {
      // Stub - no external calls
    }

    // LinkedIn
    window.lintrk = function () {
      // Stub - no external calls
    } as any
    window.lintrk.q = []

    // Sentry
    window.Sentry = window.Sentry || {
      init: function () {
        // Stub - no external calls
      },
      Replay: function () {
        // Stub
      },
    }

    // Apollo
    window.trackingFunctions = window.trackingFunctions || {
      onLoad: function () {
        // Stub - no external calls
      },
    }

    // reb2b
    window.reb2b = window.reb2b || {
      loaded: true,
    }
  }
}
