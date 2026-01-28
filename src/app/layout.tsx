import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://apexveil.com"),
  title: {
    default: "Apex Veil® | Defense-Grade Drone Veiling & Stealth Technology",
    template: "%s | Apex Veil®",
  },
  description: "Next-generation drone-based veiling system engineered to obscure, disrupt, and control aerial visibility using coordinated swarm intelligence and adaptive cloaking.",
  keywords: [
    "Apex Veil",
    "Drone Technology",
    "Stealth Drones",
    "Swarm Intelligence",
    "Aerial Concealment",
    "Adaptive Cloaking",
    "Tactical Obfuscation",
    "Defense Technology",
    "Drone Swarm",
    "Military Reconnaissance",
    "Electronic Countermeasures",
  ],
  authors: [{ name: "Apex Veil Engineering" }],
  creator: "Apex Veil Operations",
  publisher: "Apex Veil Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexveil.com",
    siteName: "Apex Veil®",
    title: "Apex Veil® | Disappear From The Sky",
    description: "Engineering absolute obfuscation through autonomous swarm intelligence. Defense-grade stealth technology.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Apex Veil Strategic Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Veil® | Advanced Drone Stealth",
    description: "Adaptive aerial dominance and absolute obfuscation systems.",
    creator: "@apexveil",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebas.variable} ${roboto.variable} antialiased bg-background text-foreground selection:bg-secondary selection:text-black`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
