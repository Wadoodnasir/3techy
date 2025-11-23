import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lahore Custom Software Development | Web & UI UX Design Agency',
  description: '3Techy provides a variety of tech solutions and software development services to clients in Lahore, Pakistan and worldwide.',
  openGraph: {
    title: 'Lahore Custom Software Development | Web & UI UX Design Agency',
    description: '3Techy provides a variety of tech solutions and software development services to clients in Lahore, Pakistan and worldwide.',
    url: 'https://xyz.com/about/',
    siteName: '3Techy',
    images: [
      {
        url: '/images/upload-b4d72503-b88e-4ebc-92a3-f0060ba51db2.gif',
        width: 800,
        height: 450,
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
    canonical: 'https://xyz.com/about/',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

