'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  title: string
  value: number
  duration?: number
  dataId: string
}

export default function Counter({ title, value, duration = 2000, dataId }: CounterProps) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            animateCounter()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  const animateCounter = () => {
    const startTime = Date.now()
    const startValue = 0
    const endValue = value

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US')
  }

  // Map dataId to correct class name
  const getCounterClass = (id: string) => {
    const classMap: { [key: string]: string } = {
      '99322b2': 'elementor-element-99322b2',
      '08db502': 'elementor-element-08db502',
      'da0c808': 'elementor-element-da0c808',
      '902069a': 'elementor-element-902069a',
    }
    return classMap[id] || 'elementor-element-99322b2'
  }

  return (
    <div
      ref={counterRef}
      className={`elementor-element ${getCounterClass(dataId)} elementor-widget elementor-widget-counter`}
      data-id={dataId}
      data-element_type="widget"
      data-widget_type="counter.default"
    >
      <div className="elementor-widget-container">
        <div className="elementor-counter">
          <div className="elementor-counter-title">{title}</div>
          <div className="elementor-counter-number-wrapper">
            <span className="elementor-counter-number-prefix"></span>
            <span
              className="elementor-counter-number"
              data-duration={duration}
              data-to-value={value}
              data-from-value="0"
              data-delimiter=","
            >
              {formatNumber(count)}
            </span>
            <span className="elementor-counter-number-suffix"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

