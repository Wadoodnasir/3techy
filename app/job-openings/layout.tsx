import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job Openings » 3Techy',
  description: 'Explore career opportunities at 3Techy. Join our team of talented software developers, designers, and tech professionals in Lahore, Pakistan.',
  openGraph: {
    title: 'Job Openings » 3Techy',
    description: 'Explore career opportunities at 3Techy. Join our team of talented software developers, designers, and tech professionals in Lahore, Pakistan.',
    url: 'https://3techy.com/job-openings/',
    siteName: '3Techy',
    images: [
      {
        url: '/images/logo.svg',
        width: 412,
        height: 411,
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
    canonical: 'https://3techy.com/job-openings/',
  },
}

export default function JobOpeningsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

