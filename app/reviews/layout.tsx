import type { Metadata } from 'next'
import ReviewsLayoutClient from './layout-client'

export const metadata: Metadata = {
  title: 'Reviews » Bee Techy, LLC.',
  description: 'Read client reviews and testimonials for Bee Techy, a top software development agency in Los Angeles.',
  openGraph: {
    title: 'Reviews » Bee Techy, LLC.',
    description: 'Read client reviews and testimonials for Bee Techy, a top software development agency in Los Angeles.',
    url: 'https://xyz.com/reviews/',
    siteName: 'Bee Techy, LLC.',
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
    site: '@beetechyllc',
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

