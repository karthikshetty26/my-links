import "./globals.css";
import NavbarUi from '@/component/navbar_ui/navbar_ui'
import Script from "next/script";

export const metadata = {
  metadataBase: new URL('https://connect.karthikshetty.info'),
  title: "Karthik Shetty | Connect with Me",
  description: "Find all my important links in one place! Connect with me through my portfolio, GitHub, LinkedIn, YouTube channels, and social media profiles.",
  keywords: "Karthik Shetty, social links, connect with me, link-sharing, portfolio links, GitHub, LinkedIn, YouTube, web development, full stack developer, React, Next.js, Angular, Java, MySQL",
  openGraph: {
    title: "Karthik Shetty | Connect with Me",
    description: "All my essential links in one place. Connect with me on various platforms and explore my work.",
    type: "website",
    locale: "en_US",
    url: "https://connect.karthikshetty.info",
    siteName: "Karthik Shetty | Connect",
    images: [
      {
        url: "/images/sharing/connect-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karthik Shetty - Connect with Me"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Shetty | Connect with Me",
    description: "Find all my important links in one place, including portfolio, GitHub, LinkedIn, and social media.",
    creator: "@karthikshettyyy",
    images: ["/images/sharing/connect-og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://connect.karthikshetty.info"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9J1RVTSWHQ" />
        <Script id='google-analytics' strategy='afterInteractive'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-9J1RVTSWHQ');
        `}</Script> */}
      </head>
      <body>
        <NavbarUi />
        {children}
      </body>
    </html>
  );
}
