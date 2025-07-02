import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import {
  Didact_Gothic,
  Geist,
  Geist_Mono,
  Merriweather,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

const didactGothic = Didact_Gothic({
  variable: "--font-didact-gothic",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Sashaktikaran Foundation - Empowering Rural Communities Through Education",
    template: "%s | Sashaktikaran Foundation",
  },
  description:
    "Sashaktikaran Foundation empowers rural communities through foundational education. We provide quality learning opportunities to children and women in remote villages, bridging gaps with technology and community-driven approaches.",
  keywords: [
    "rural education",
    "foundational learning",
    "women empowerment",
    "community development",
    "Madhya Pradesh",
    "Project Neev",
    "education technology",
    "social impact",
    "NGO",
    "children education",
  ],
  authors: [{ name: "Sashaktikaran Foundation" }],
  creator: "Sashaktikaran Foundation",
  publisher: "Sashaktikaran Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sashaktikaran.org"),
  openGraph: {
    title:
      "Sashaktikaran Foundation - Empowering Rural Communities Through Education",
    description:
      "Sashaktikaran Foundation empowers rural communities through foundational education. We provide quality learning opportunities to children and women in remote villages.",
    url: "https://sashaktikaran.org",
    siteName: "Sashaktikaran Foundation",
    images: [
      {
        url: "/hero2.jpeg",
        width: 1200,
        height: 630,
        alt: "Sashaktikaran Foundation - Rural Education Initiative",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sashaktikaran Foundation - Empowering Rural Communities Through Education",
    description:
      "Empowering rural communities through foundational education. Quality learning for children and women in remote villages.",
    images: ["/hero2.jpeg"],
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sashaktikaran Foundation",
    description:
      "Sashaktikaran Foundation empowers rural communities through foundational education. We provide quality learning opportunities to children and women in remote villages, bridging gaps with technology and community-driven approaches.",
    url: "https://sashaktikaran.org",
    logo: "https://sashaktikaran.org/logo.png",
    foundingDate: "2017-03-08",
    foundingLocation: {
      "@type": "Place",
      name: "India",
    },
    areaServed: {
      "@type": "Place",
      name: "Madhya Pradesh, India",
    },
    knowsAbout: [
      "Rural Education",
      "Women Empowerment",
      "Foundational Learning",
      "Community Development",
      "Educational Technology",
    ],
    sameAs: [
      "https://facebook.com/sashaktikaran",
      "https://instagram.com/sashaktikaran",
      "https://linkedin.com/company/sashaktikaran",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-123-456-7890",
      contactType: "customer service",
      email: "contact@sashaktikaran.org",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${sourceSans3.variable} ${didactGothic.variable} font-didact-gothic antialiased`}
      >
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
