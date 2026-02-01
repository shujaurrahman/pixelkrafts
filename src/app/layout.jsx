import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });



const appName = "Digitex - Expert Web Development Agency";
const appDesc = "Digitex offers professional web development, digital solutions, and programming services to help your business thrive online. From custom websites to cutting-edge applications, we've got you covered";

export const metadata = {
  title: appName,
  description: appDesc,
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
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
