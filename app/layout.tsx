import type { Metadata } from 'next'
import './globals.css'
import '../styles/elementor.css'
import '../styles/inline-styles.css'
import '../styles/live-chat.css'
import CSSLoader from '@/components/CSSLoader'
import Scripts from '@/components/Scripts'

export const metadata: Metadata = {
  title: 'Los Angeles Software Development | Mobile App Design & Development',
  description: 'Bee Techy is a top software development agency that provides quality mobile app design and development services in the Los Angeles area.',
  openGraph: {
    title: 'Los Angeles Software Development | Mobile App Design & Development',
    description: 'Bee Techy is a top software development agency that provides quality mobile app design and development services in the Los Angeles area.',
    url: 'https://xyz.com/',
    siteName: 'Bee Techy, LLC.',
    images: [
      {
        url: '/images/upload-b4d72503-b88e-4ebc-92a3-f0060ba51db2.gif',
        width: 800,
        height: 450,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@beetechyllc',
  },
  icons: {
    icon: [
      { url: '/images/Bee-Techy-Email-Icon-150x150.png', sizes: '32x32' },
      { url: '/images/Bee-Techy-Email-Icon-300x300.png', sizes: '192x192' },
    ],
    apple: '/images/Bee-Techy-Email-Icon-300x300.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://xyz.com/" />
      </head>
      <body className="home wp-singular page-template page-template-elementor_header_footer page page-id-2745 wp-custom-logo wp-theme-hello-elementor wp-child-theme-hello-theme-child-master elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-2745 elementor-page-709">
        <CSSLoader />
        {children}
        <Scripts />
      </body>
    </html>
  )
}

