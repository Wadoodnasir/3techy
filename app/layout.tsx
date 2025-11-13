import type { Metadata } from 'next'
import './globals.css'
import '../styles/elementor.css'
import '../styles/inline-styles.css'
import '../styles/live-chat.css'
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
        
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rubik:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic|Titillium+Web:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap"
        />
        
        {/* Elementor CSS Files - Load in parallel for better performance */}
        <link rel="stylesheet" href="/css/wp-content/themes/hello-elementor/style.min.css" />
        <link rel="stylesheet" href="/css/wp-content/themes/hello-elementor/theme.min.css" />
        <link rel="stylesheet" href="/css/wp-content/plugins/elementor/assets/css/frontend-lite.min.css" />
        <link rel="stylesheet" href="/css/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css" />
        <link rel="stylesheet" href="/css/wp-content/uploads/elementor/css/post-6.css" />
        <link rel="stylesheet" href="/css/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min.css" />
        <link rel="stylesheet" href="/css/wp-content/uploads/elementor/css/post-2745.css" />
        <link rel="stylesheet" href="/css/wp-content/uploads/elementor/css/post-703.css" />
        <link rel="stylesheet" href="/css/wp-content/uploads/elementor/css/post-706.css" />
        <link rel="stylesheet" href="/css/wp-includes/css/dashicons.min.css" />
        <link rel="stylesheet" href="/css/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/css/view/general.min.css" />
        <link rel="stylesheet" href="/css/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css" />
        <link rel="stylesheet" href="/css/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css" />
        <link rel="stylesheet" href="/css/wp-content/plugins/elementor-pro/assets/css/widget-carousel.min.css" />
        <link rel="stylesheet" href="/css/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" />
        <link rel="stylesheet" href="/css/wp-content/plugins/elementor-pro/assets/css/widget-posts.min.css" />
      </head>
      <body className="home wp-singular page-template page-template-elementor_header_footer page page-id-2745 wp-custom-logo wp-theme-hello-elementor wp-child-theme-hello-theme-child-master elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-2745 elementor-page-709">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

