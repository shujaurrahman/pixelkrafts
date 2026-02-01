import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });



const appName = "PixelKrafts - Software Solutions & Digital Services";
const appDesc = "PixelKrafts offers professional web development, app development, SEO, digital marketing, and custom AI solutions to help your business thrive online. Beautifully designed, expertly developed solutions that scale with you.";

export const metadata = {
  title: appName,
  description: appDesc,
  keywords: "web development, app development, SEO services, digital marketing, social media ads, chatbot development, AI development, UI/UX design, API development, software solutions",
  authors: [{ name: "PixelKrafts Software Solutions" }],
  creator: "PixelKrafts",
  publisher: "PixelKrafts Software Solutions",
  url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://pixelkrafts.in'}/`,
  alternate: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
    }
  },
  icons: {
    icon: [
      { url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/android-chrome-96x96.png`, sizes: '96x96', type: 'image/png' },
      { url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/mstile-150x150.png`, sizes: '150x150', type: 'image/png' },
    ],
    shortcut: [`${process.env.NEXT_PUBLIC_BASE_URL}/images/favicon-32x32.png`],
    apple: [
      { url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ]
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-c-black-1`}
      >
        {children}
      </body>
    </html>
  );
}
