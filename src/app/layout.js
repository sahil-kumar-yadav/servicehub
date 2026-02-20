import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SS ServiceHub | AI & Full-Stack Development Company",
  description: "Transform your business with cutting-edge AI solutions, full-stack development, cloud architecture, and automation services. Delivering scalable, production-ready solutions for startups and enterprises.",
  keywords: "AI development, full-stack development, machine learning, cloud infrastructure, backend development, frontend development, automation, React, Next.js, AWS, Azure, GCP",
  authors: [{ name: "ServiceHub" }],
  openGraph: {
    title: "ServiceHub | AI & Full-Stack Development Company",
    description: "Transform your business with cutting-edge AI solutions and full-stack development services.",
    type: "website",
    locale: "en_US",
    siteName: "SS ServiceHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "SS ServiceHub | AI & Full-Stack Development Company",
    description: "Transform your business with cutting-edge AI solutions and full-stack development services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#030712" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
        style={{
          fontFamily: "var(--font-inter), var(--font-geist-sans), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}

