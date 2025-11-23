import type { Metadata } from 'next'
import ReviewsLayoutClient from './layout-client'

export const metadata: Metadata = {
  title: 'Reviews » 3Techy',
  description: 'Read client reviews and testimonials for 3Techy, a top software development agency in Lahore, Pakistan.',
  openGraph: {
    title: 'Reviews » 3Techy',
    description: 'Read client reviews and testimonials for 3Techy, a top software development agency in Lahore, Pakistan.',
    url: 'https://xyz.com/reviews/',
    siteName: '3Techy',
    images: [
      {
        url: '/images/Review1.png',
        width: 1200,
        height: 628,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@3techy',
  },
  alternates: {
    canonical: 'https://xyz.com/reviews/',
  },
}

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ReviewsLayoutClient>{children}</ReviewsLayoutClient>
}

