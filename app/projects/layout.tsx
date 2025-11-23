import type { Metadata } from 'next'
import ProjectsLayoutClient from './layout-client'

export const metadata: Metadata = {
  title: 'Projects Archive » 3Techy',
  description: 'Browse our portfolio of custom software development projects, mobile apps, web applications, and UI/UX design work.',
  openGraph: {
    title: 'Projects Archive » 3Techy',
    description: 'Browse our portfolio of custom software development projects, mobile apps, web applications, and UI/UX design work.',
    url: 'https://xyz.com/projects/',
    siteName: '3Techy',
    images: [
      {
        url: '/images/Bee-Techy-Email-Icon.png',
        width: 412,
        height: 411,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@3techy',
  },
  alternates: {
    canonical: 'https://xyz.com/projects/',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProjectsLayoutClient>{children}</ProjectsLayoutClient>
}
