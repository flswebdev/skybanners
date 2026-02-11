import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, CONTACT } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Aerial Advertising in Southern Ontario`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} - Aerial Advertising in Southern Ontario`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: CONTACT.phoneFormatted,
  email: CONTACT.email,
  areaServed: {
    "@type": "Place",
    name: CONTACT.serviceArea,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
