import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job Openings » 3Techy',
  description: 'Explore career opportunities at 3Techy. Join our team of talented software developers, designers, and tech professionals in Lahore, Pakistan.',
  openGraph: {
    title: 'Job Openings » 3Techy',
    description: 'Explore career opportunities at 3Techy. Join our team of talented software developers, designers, and tech professionals in Lahore, Pakistan.',
    url: 'https://xyz.com/job-openings/',
    siteName: '3Techy',
    images: [
      {
        url: '/images/Bee-Techy-Email-Icon.png',
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
    canonical: 'https://xyz.com/job-openings/',
  },
}

export default function JobOpeningsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

