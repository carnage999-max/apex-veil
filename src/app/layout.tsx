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
  description: "Apex Veil® is a coordinated police drone deployment platform designed to safely stop fleeing vehicles by obstructing visibility with precision-deployed adhesives.",
  keywords: [
    "Apex Veil",
    "Police Drone Technology",
    "Pursuit Mitigation",
    "Vehicle Stopping System",
    "Law Enforcement Drone",
    "Adhesive Deployment",
    "Tactical Obfuscation",
    "Public Safety Technology",
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
    title: "Apex Veil® | Police Pursuit Mitigation Platform",
    description: "Safely stop fleeing vehicles without dangerous high-speed pursuits using autonomous drone tracking and adhesive deployment.",
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
    title: "Apex Veil® | Advanced Pursuit Mitigation",
    description: "Coordinated police drone platform designed to safely stop fleeing vehicles.",
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
        {children}
      </body>
    </html>
  );
}
