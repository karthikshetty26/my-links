import "./globals.css";
import NavbarUi from '@/component/navbar_ui/navbar_ui'
import Script from "next/script";
import { Poppins } from "next/font/google"

const poppinsSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
});

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
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9J1RVTSWHQ" />
        <Script id='google-analytics' strategy='afterInteractive'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-9J1RVTSWHQ');
        `}</Script> */}
      </head>
      <body className={poppinsSans.variable}>
        <NavbarUi />
        {children}
      </body>
    </html>
  );
}
