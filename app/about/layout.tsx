import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Los Angeles Custom Software Development | Web & UI UX Design Agency',
  description: 'Bee Techy provides a variety of tech solutions and software development services to clients in the Los Angeles area and nationwide.',
  openGraph: {
    title: 'Los Angeles Custom Software Development | Web & UI UX Design Agency',
    description: 'Bee Techy provides a variety of tech solutions and software development services to clients in the Los Angeles area and nationwide.',
    url: 'https://xyz.com/about/',
    siteName: 'Bee Techy, LLC.',
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
    site: '@beetechyllc',
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

