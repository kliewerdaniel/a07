import type { Metadata } from "next";
import { Source_Serif_4, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GrainOverlay } from "@/components/experimental/grain-overlay";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <link rel="alternate" type="application/rss+xml" title="Daniel Kliewer's Blog" href="/rss.xml" />
      </head>
      <body className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <GrainOverlay />
        </ThemeProvider>
      </body>
    </html>
  );
}
