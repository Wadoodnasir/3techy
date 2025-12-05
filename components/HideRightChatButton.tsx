'use client'

import { useEffect } from 'react'

export default function HideRightChatButton() {
  useEffect(() => {
    const hideRightChatButton = () => {
      // Find all chat buttons
      const chatButtons = document.querySelectorAll(
        '.IconLauncher__BaseLauncher-fiVgfM, button[aria-label="Open live chat"]'
      )

      chatButtons.forEach((btn) => {
        const element = btn as HTMLElement
        const styles = window.getComputedStyle(element)
        const right = styles.getPropertyValue('right')
        const left = styles.getPropertyValue('left')

        // If button is positioned on the right side, hide it
        if (
          (right && right !== 'auto' && parseFloat(right) < 100) ||
          (!left || left === 'auto' || parseFloat(left) > window.innerWidth / 2)
        ) {
          // Button is on right side - hide it
          element.style.display = 'none'
          element.style.visibility = 'hidden'
        }
      })
    }

    // Run immediately
    hideRightChatButton()

    // Run periodically to catch dynamically added buttons
    const interval = setInterval(hideRightChatButton, 500)

    // Observe DOM changes
    const observer = new MutationObserver(hideRightChatButton)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    })

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return null
}

