'use client'

import { useEffect } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="video-modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <div
        className="video-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '90%',
          maxWidth: '1200px',
          aspectRatio: '16/9',
          cursor: 'default',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          style={{
            position: 'absolute',
            top: '-40px',
            right: '0',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '32px',
            cursor: 'pointer',
            padding: '0',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10001,
          }}
        >
          ×
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </div>
    </div>
  )
}

