import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
  The legacy meta description advertised cloud, AI and cybersecurity, none of which
  appear in the site's actual copy or documented past performance (content plan,
  bug 11). This description covers what the firm demonstrably delivers. Revisit once
  the capability question is settled with the client.
*/
export const metadata: Metadata = {
  title: {
    default: "Defense In Depth Solutions | IT Staffing, Software Development and Training",
    template: "%s | Defense In Depth Solutions",
  },
  description:
    "Women-owned IT services firm established in 2007. IT staffing, software development, training and web services for federal agencies and the enterprises that support them. Offices in Houston, TX and Leesburg, VA.",
  applicationName: "Defense In Depth Solutions",
  authors: [{ name: "Defense in Depth Solutions, Inc." }],
  keywords: [
    "IT staffing",
    "software development",
    "federal contractor",
    "women-owned business enterprise",
    "Oracle EBS",
    "SAP BW",
    "Section 508",
    "Houston IT services",
  ],
  openGraph: {
    title: "Defense In Depth Solutions | IT Staffing, Software Development and Training",
    description:
      "Women-owned IT services firm established in 2007. Staffing, software and training for federal agencies and enterprises.",
    siteName: "Defense In Depth Solutions",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh overflow-x-hidden">{children}</body>
    </html>
  );
}
