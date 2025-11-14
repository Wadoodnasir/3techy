import type { Metadata } from 'next'
import CareersLayoutClient from './layout-client'

export const metadata: Metadata = {
  title: 'Job Openings » Bee Techy, LLC.',
  description: 'Explore career opportunities and job openings at Bee Techy, a top software development agency in Los Angeles.',
  openGraph: {
    title: 'Job Openings » Bee Techy, LLC.',
    description: 'Explore career opportunities and job openings at Bee Techy, a top software development agency in Los Angeles.',
    url: 'https://xyz.com/job-openings/',
    siteName: 'Bee Techy, LLC.',
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
    site: '@beetechyllc',
  },
  alternates: {
    canonical: 'https://xyz.com/job-openings/',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CareersLayoutClient>{children}</CareersLayoutClient>
}

